import React from 'react';
import Router from 'next/router'
import { withRouter } from 'next/router'
import Head from 'next/head'
import fetch from 'isomorphic-unfetch';
import Link from 'next/link';
import {decodeHTML} from 'entities'
import WordpressService from '../services/wordpress'
import Header from '../components/Header';
import Footer from '../components/Footer';
import postStyles from '../public/styles/modules/post.module.css';
import DatePicker from "react-datepicker";

class Edit extends React.Component {

	constructor(props) {
		super(props);
		this.state = {
			active_tab: 1,
			ID: '',
			title: '',
			authors: [""],
			format: '',
			publication_date: new Date(),
			attachment_id: '',
			attachment_filename: '',
			content_link: '',
			agreed: false,
			description: '',
			copyright_notice: '',
			image_id: '',
			image_filename: '',
			image_url: '',
			agency_specific: true,
			agency_parent: 0,
			agency_child: 0,
			available_agencies: [],
			selected_topics: [],
			selected_tags: [],
			first_name: '',
			last_name: '',
			email_address: '',
			phone_number: '',
			relevant: false,
			working: false,
			error: false
		}
		this.handleChange = this.handleChange.bind(this);
		this.setAuthors = this.setAuthors.bind(this);
		this.input = React.createRef();
	}

	static async getInitialProps(ctx) {
		const wordpress = new WordpressService
		const formats = await wordpress.fetchFormats();
		const topics = await wordpress.fetchTopics();
		const tags = await wordpress.fetchTags();
		const parent = 0;
		const agencies = await wordpress.fetchAgencies(parent);
		return {
			formats,
			agencies,
			topics,
			tags,
		}
	}

	async componentDidMount() {
		if( !this.props.user ) {
			Router.push('/login')
			return false;
		}
		const whitePaperID = this.props.router.query.id;
		const wordpress = new WordpressService
		const whitepaper = await wordpress.fetchWhitepaper(whitePaperID)
		console.log(whitepaper);

		let dateObj = new Date(whitepaper.publication_date * 1000);

		if( !this.props.user ) {
			let login = document.querySelector('.js-login');
			login.click();
			return false;
		}

		const access_token = this.props.user.access_token;
		const user = await wordpress.getUser(access_token);
		var file_url = whitepaper.file_url;
		var filename = file_url.substring(file_url.lastIndexOf('/')+1);
		var data = decodeHTML(whitepaper.description);
		var strippedDescription = data.replace(/(<([^>]+)>)/ig,"");
		let featured_img_url = '';
		let featured_image_id = '';
		let image_filename = '';
		if( whitepaper.featured_media ) {
			featured_img_url = whitepaper.featured_media.file;
			featured_image_id = whitepaper.featured_media.media_id;
			image_filename = featured_img_url.substring(featured_img_url.lastIndexOf('/')+1);
		}

		let selected_topics_r = new Array();
		whitepaper.topics.forEach(element => selected_topics_r.push(element.term_id));

		let selected_tags_r = new Array();
		whitepaper.tags.forEach(element => selected_tags_r.push(element.term_id));

		this.setState(state => ({
			first_name: whitepaper.first_name,
			last_name: whitepaper.last_name,
			email_address: whitepaper.email_address,
			phone_number: whitepaper.phone_number,

			active_tab: 1,
			ID: whitepaper.id,
			title: whitepaper.title,
			authors: whitepaper.authors,
			format: parseInt(whitepaper.format[0].term_id),
			publication_date: dateObj,
			attachment_id: '',
			attachment_filename: filename,
			content_link: whitepaper.content_link,
			agreed: true,
			description: strippedDescription,
			copyright_notice: whitepaper.copyright_notice,
			image_id: featured_image_id,
			image_filename: '',
			image_url: featured_img_url,
			agency_specific: true,
			agency_parent: 0,
			agency_child: 0,
			available_agencies: [],
			selected_topics: selected_topics_r,
			selected_tags: selected_tags_r,
		}));
	}

	componentDidUpdate() {
		const {working} = this.state;
		let html = document.querySelector('html');

		if( working ) {
			html.classList.add('working');
		} else {
			html.classList.remove('working');
		}
	}

	isURL(url) {
		var regexp = /(http|https):\/\/(\w+:{0,1}\w*@)?(\S+)(:[0-9]+)?(\/|\/([\w#!:.?+=&%@!\-\/]))?/
		return regexp.test(url);
	}

	setPublicationDate(date) {
		console.log(date);
		this.setState({
			publication_date: date
		});
	}

	triggerFileUpload() {
		document.querySelector('#pdf-upload').dispatchEvent(new Event('submit'))
	}

	uploadPDFSubmit(e) {
		e.preventDefault();
		let formData = new FormData(e.target);
		const token = this.props.user.access_token;
		let component = this;
		let file = formData.get('pdf_file');
		formData.append("token", token);

		if( !token ) {
			return false;
		}

		if( file.size > 41943040 ) {
			this.setState({
				error: {
					file: 'Selected file is larger than 40MB',
				}
			});
			return false;
		}

		if( file.type !== 'application/pdf'  ) {
			this.setState({
				error: {
					file: 'Unsupported file type. Please select a PDF.',
				}
			});
			return false;
		}

		component.setState({
			working: true
		});

		let url = e.target.action;
		fetch(url, {
			method: 'POST',
			body: formData,
		}).then(response => {
			return response.json();
		}).then(body => {
			let flat = JSON.stringify(body);
			if( flat.includes('error') ) {
				component.setState({
					error: {
						file: 'The selected file could not be uploaded. Please contact support for assistance.'
					},
					working: false
				});

				return false;
			} else {
				component.setState({
					"attachment_id": body,
					"attachment_filename": file.name,
					"content_link": '',
					working: false
				});
			}
		})
	}

	triggerImageUpload() {
		document.querySelector('#image-upload').dispatchEvent(new Event('submit'))
	}

	uploadImageSubmit(e) {
		e.preventDefault();
		let formData = new FormData(e.target);
		const token = this.props.user.access_token;
		let component = this;
		let file = formData.get('image_file');
		formData.append("token", token);
		formData.append("ID", this.state.ID)

		if( !token ) {
			return false;
		}

		if( file.size > 10048576  ) {
			this.setState({
				error: {
					image: 'Selected file is larger than 10MB',
				}
			});
			return false;
		}

		var pattern = /image-*/;
		if (!file.type.match(pattern)) {
			this.setState({
				error: {
					image: 'Unsupported file type. Please select a JPG or PNG.',
				}
			});
			return false;
		}

		component.setState({
			working: true
		});

		let url = e.target.action;
		fetch(url, {
			method: 'POST',
			body: formData,
		}).then(response => {
			return response.json();
		}).then(body => {
			let flat = JSON.stringify(body);
			if( flat.includes('error') ) {
				component.setState({
					error: {
						image: 'The selected file could not be uploaded. There may be something wrong with your image. Please contact support for assistance.'
					},
					working: false,
				});
				return false;
			} else {
				component.setState({
					image_id: body.ID,
					image_filename: file.name,
					image_url: body.url,
					working: false
				});
			}
		})
	}

	setAuthors(index,e) {
		let authors = this.state.authors;
		authors[index] = e.target.value;
		this.setState({
			'authors': authors
		});
	}

	async handleChange(event) {
		let name = event.target.getAttribute('name');
		if( name == 'select_topic' ) {
			let topic_id = event.target.value;
			if( topic_id == 0 ) {
				return;
			}

			let topic_r = this.state.selected_topics;

			if( this.state.selected_topics.length >= 2 ) {
				return;
			}

			let topic = this.props.topics.find(element => element.term_id == topic_id);
			let index = topic_r.findIndex(term_id => term_id == topic_id);
		  if (index === -1) {
				topic_r.push(topic.term_id);
				this.setState({
					'selected_topics': topic_r
				});
			}

			let select = document.querySelector('select[name="select_topic"]');
			select.selectedIndex = 0;

		} else if( name == 'select_tag' ) {
			let tag_id = event.target.value;
			if( tag_id == 0 ) {
				return;
			}

			let tag_r = this.state.selected_tags;

			if( this.state.selected_tags.length >= 5 ) {
				return;
			}

			let tag = this.props.tags.find(element => element.term_id == tag_id);

			let index = tag_r.findIndex(term_id => term_id == tag_id);
		  if (index === -1) {
				tag_r.push(tag.term_id);
				this.setState({
					'selected_tags': tag_r
				});
			}

			let select = document.querySelector('select[name="select_tag"]');
			select.selectedIndex = 0;

		} else if( name == 'agreed' ) {
			this.setState({
				[name]: !this.state.agreed
			});
		} else if ( name == 'content_link' ) {
			if( this.isURL(event.target.value) || event.target.value == '' ) {
				this.setState({
					attachment_id: '',
					attachment_filename: '',
					content_link: event.target.value
				});
			}
		} else if( name == 'agency_specific' ) {
			this.setState({
				[name]: !this.state.agency_specific
			});
		} else if( name == 'focus' ) {
			const agency_parent = event.target.value;
			let agencies;
			if( parseInt(agency_parent) == 0 ) {
				agencies = '';
			} else {
				const wordpress = new WordpressService
				agencies = await wordpress.fetchAgencies(agency_parent);
			}

			this.setState({
				agency_parent: agency_parent,
				available_agencies: agencies,
			});
		} else if( name == 'agency' ) {
			this.setState({
				agency_child: event.target.value
			});
		} else if ( name == 'relevant' ) {
			this.setState({
				[name]: !this.state.relevant
			});
		} else {
			this.setState({
				[name]: event.target.value
			},
			() => {

			});
		}
	}

	_saveDraft = () => {
		let component,
				json,
				url,
				publicationDateTimestamp;

		const token = this.props.user.access_token;
		component = this;

		if( !token ) {
			return false;
		}

		publicationDateTimestamp = Math.round((this.state.publication_date).getTime() / 1000);
		url = 'https://gwpadmin.codewrangler.io/api/gwp/v1/save-whitepaper-draft';
		json = JSON.stringify({
			"title": this.state.title,
			"ID": this.state.ID,
			"authors": this.state.authors,
			"format": parseInt(this.state.format),
			"attachment_id": this.state.attachment_id,
			"attachment_filename": this.state.attachment_filename,
			"content_link": this.state.content_link,
			"publication_date": publicationDateTimestamp,
			"description": this.state.description,
			"copyright_notice": this.state.copyright_notice,
			"image_id": this.state.image_id,
			"image_filename": this.state.image_filename,
			"image_url": this.state.image_url,

			"agency_specific": this.state.agency_specific,
			"agency_parent": this.state.agency_parent,
			"agency_child": this.state.agency_child,
			"available_agencies": this.state.available_agencies,
			"selected_topics": this.state.selected_topics,
			"selected_tags": this.state.selected_tags,
			"relevant": this.state.relevant,
			"first_name": this.state.first_name,
			"last_name": this.state.last_name,
			"email_address": this.state.email_address,
			"phone_number" : this.state.phone_number,

			"access_token": token
		});

		fetch(url, {
			method: 'post',
			body: json,
			headers: {
				"Content-Type": "application/json"
			},
		}).then(function(response) {
			return response.json();
		}).then(function(data) {
			let flat = JSON.stringify(data);
			if( flat.includes('error') ) {
				alert('Something went wrong');
				window.location.reload();
				return false;
			}

			component.setState({
				ID: data.ID,
			});

		});
	}

	_handlePublish = () => {
		event.preventDefault();
		let button,
				component,
				json,
				url,
				login,
				firstNameField,
				lastNameField,
				emailAddressField,
				jobTitleField;

		button = document.querySelector('.js-publish');
		component = this;

		if( this.state.first_name.length < 1 ) {
			var inputFirstName = document.querySelector('input[name="first_name"]');
			this.setState({
				error: {
					first_name: 'Must include a first name',
				}
			});
			inputFirstName.scrollIntoView({
				behavior: "smooth",
				block: "end",
				inline: "nearest"
			});
			return false;
		}

		if( this.state.last_name.length < 1 ) {
			var inputLastName = document.querySelector('input[name="last_name"]');
			this.setState({
				error: {
					last_name: 'Must include a last name',
				}
			});
			inputLastName.scrollIntoView({
				behavior: "smooth",
				block: "end",
				inline: "nearest"
			});
			return false;
		}

		var inputEmail = document.querySelector('input[name="email_address"]');

		if( !inputEmail.checkValidity() ) {
			this.setState({
				error: {
					email_address: 'Must include your email',
				}
			});
			inputEmail.scrollIntoView({
				behavior: "smooth",
				block: "end",
				inline: "nearest"
			});
			return false;
		}

		if( this.state.phone_number.length < 1 ) {
			var inputPhone = document.querySelector('input[name="phone_number"]');
			this.setState({
				error: {
					phone_number: 'Must include a contact phone number',
				}
			});
			inputPhone.scrollIntoView({
				behavior: "smooth",
				block: "end",
				inline: "nearest"
			});
			return false;
		}

		const token = this.props.user.access_token;

		if( !token ) {
			return false;
		}
		var publicationDateTimestamp = Math.round((this.state.publication_date).getTime() / 1000);
		url = 'https://gwpadmin.codewrangler.io/api/gwp/v1/publish-whitepaper';
		json = JSON.stringify({
			"title": this.state.title,
			"ID": this.state.ID,
			"authors": this.state.authors,
			"format": parseInt(this.state.format),
			"attachment_id": this.state.attachment_id,
			"attachment_filename": this.state.attachment_filename,
			"content_link": this.state.content_link,
			"publication_date": publicationDateTimestamp,
			"description": this.state.description,
			"copyright_notice": this.state.copyright_notice,
			"image_id": this.state.image_id,
			"image_filename": this.state.image_filename,
			"image_url": this.state.image_url,

			"agency_specific": this.state.agency_specific,
			"agency_parent": this.state.agency_parent,
			"agency_child": this.state.agency_child,
			"available_agencies": this.state.available_agencies,
			"selected_topics": this.state.selected_topics,
			"selected_tags": this.state.selected_tags,
			"relevant": this.state.relevant,

			"first_name": this.state.first_name,
			"last_name": this.state.last_name,
			"email_address": this.state.email_address,
			"phone_number" : this.state.phone_number,

			"access_token": token
		});

		button.disabled = true;

		component.setState({
			working: true
		});

		fetch(url, {
			method: 'post',
			body: json,
			headers: {
				"Content-Type": "application/json"
			},
		}).then(function(response) {
			return response.json();
		}).then(function(data) {
			setTimeout( function(e) {
				button.disabled = false;
				let flat = JSON.stringify(data);

				if( flat.includes('error') ) {
					component.setState({
						error: data.message,
						working: false
					});

					return false;
				}

				component.setState({
					active_tab: 1,
					ID: '',
					title: '',
					authors: [""],
					format: '',
					publication_date: new Date(),
					attachment_id: '',
					attachment_filename: '',
					content_link: '',
					agreed: false,
					description: '',
					copyright_notice: '',
					image_id: '',
					image_filename: '',
					image_url: '',
					agency_specific: true,
					agency_parent: 0,
					agency_child: 0,
					available_agencies: [],
					selected_topics: [],
					selected_tags: [],
					relevant: false,

					first_name: '',
					last_name: '',
					email_address: '',
					phone_number : '',
					working: false,
					error: false
				},
				() => {
					// Redirect to profile
					Router.push('/profile')
				});

			}, 1000 );
		});
	}

	_renderTabClass = (tab) => {
		const {active_tab} = this.state;
		if( active_tab == tab  ) {
			return `${postStyles.tab} ${postStyles.open}`;
		} else {
			return `${postStyles.tab}`
		}
	}

	_renderRadioClass = (bool) => {
		const {agency_specific} = this.state;
		if( agency_specific == bool ) {
			return `${postStyles.active}`;
		} else {
			return '';
		}
	}

	_renderAgencySelectorClass = () => {
		const {agency_specific} = this.state;
		if( agency_specific == true ) {
			return `${postStyles.agencySelector} ${postStyles.active}`;
		} else {
			return `${postStyles.agencySelector}`;
		}
	}

	_renderAgencySelector = () => {
		if( this.state.available_agencies.length < 1 ) {
			return;
		}

		return(
			<div className={`${postStyles.agencySelector} ${postStyles.active}`}>
				<label>Select Agency {this._renderError('agency')}
					<select onChange={this.handleChange} name="agency">
						<option value="0">All Agencies</option>
						{this.state.available_agencies.map(agency =>
							<option key={agency.term_id} value={agency.term_id}>{agency.name}</option>
						)}
					</select>
				</label>
			</div>
		);
	}

	// _renderAgencyWrapClass = () => {
	// 	const {agency_parent} = this.state;
	// 	if( agency_parent != 0 ) {
	// 		return `${postStyles.agencyWrap} ${postStyles.active}`;
	// 	} else {
	// 		return `${postStyles.agencyWrap}`;
	// 	}
	// }

	_renderControlIcon = (tab) => {
		const {active_tab} = this.state;
		if( active_tab == tab  ) {
			return <img src="/images/tab-active.svg" />;
		} else {
			if( active_tab > tab ) {
				return <img src="/images/tab-complete.svg" />
			} else {
				return <img src="/images/tab-inactive.svg" />
			}

		}
	}

	_modalShowClass = () => {
		return this.state.modal_open;
	}

	_toggleTab = (tab) => {
		var controls = document.querySelector('#controls');
		event.preventDefault();
		if( tab == 2 ) {
			if( this.state.title.length < 10 ) {
				var inputTitle = document.querySelector('input[name="title"]');
				this.setState({
					error: {
						title: 'must be at least 60 characters',
					}
				});
				inputTitle.scrollIntoView({
					behavior: "smooth",
					block: "end",
					inline: "nearest"
				});
				return false;
			}
			if( this.state.title.length > 100 ) {
				var inputTitle = document.querySelector('input[name="title"]');
				this.setState({
					error: {
						title: 'The title can be no more than 100 characters.',
					}
				});
				inputTitle.scrollIntoView({
					behavior: "smooth",
					block: "end",
					inline: "nearest"
				});
				return false;
			}

			if( !this.state.format ) {
				var selectFormat = document.querySelector('select[name="format"]');
				this.setState({
					error: {
						format: 'Please select a format',
					}
				});
				selectFormat.scrollIntoView({
					behavior: "smooth",
					block: "end",
					inline: "nearest"
				});
				return;
			}

			if( this.state.authors.length < 1 ) {
				var inputAuthor = document.querySelector('input[name="author"]');
				this.setState({
					error: {
						authors: 'Please input at least one author',
					}
				});
				inputAuthor.scrollIntoView({
					behavior: "smooth",
					block: "end",
					inline: "nearest"
				});
				return;
			}

			if( !this.state.publication_date ) {
				var inputPubDate = document.querySelector('input[name="publication_date"]');
				this.setState({
					error: {
						publication_date: 'Please select a publication date',
					}
				});
				inputPubDate.scrollIntoView({
					behavior: "smooth",
					block: "end",
					inline: "nearest"
				});
				return;
			}

			if( !this.state.agreed ) {
				this.setState({
					error: {
						agreed: 'You must agree to the terms to continue',
					}
				});
				return;
			}

			if( !this.state.attachment_id ) {
				if( !this.state.content_link ) {
					this.setState({
						error: {
							file: 'You must upload a file or add a link to your content',
						}
					});
					return;
				}
			}
		}

		if( tab == 3 ) {
			if( this.state.description.length < 100 ) {
				var inputDescription = document.querySelector('textarea[name="description"]');
				this.setState({
					error: {
						description: 'must be at least 100 characters',
					}
				});
				inputDescription.scrollIntoView({
					behavior: "smooth",
					block: "end",
					inline: "nearest"
				});
				return false;
			}
		}

		if( tab == 4 ) {

			if( this.state.selected_topics.length < 1 ) {
				var inputTopic = document.querySelector('select[name="selected_topics"]');
				this.setState({
					error: {
						topic: 'Please select a topic.',
					}
				});
				inputTopic.scrollIntoView({
					behavior: "smooth",
					block: "end",
					inline: "nearest"
				});
				return false;
			}

		}

		this._saveDraft();

		this.setState(state => ({
			active_tab: tab,
			error: false,
		}));

		controls.scrollIntoView({
			behavior: "smooth",
			block: "end",
			inline: "nearest"
		});
	};

	_renderError(field) {
		if( this.state.error ) {
			let flat = JSON.stringify(this.state.error);

			if( flat.includes('title') ) {
				if( field == 'title' ) {
					return <span className={`${postStyles.errorText}`}>{this.state.error.title}</span>
				}
			}

			if( flat.includes('format') ) {
				if( field == 'format' ) {
					return <span className={`${postStyles.errorText}`}>{this.state.error.format}</span>
				}
			}

			if( flat.includes('authors') ) {
				if( field == 'authors' ) {
					return <span className={`${postStyles.errorText}`}>{this.state.error.authors}</span>
				}
			}

			if( flat.includes('publication_date') ) {
				if( field == 'publication_date' ) {
					return <span className={`${postStyles.errorText}`}>{this.state.error.publication_date}</span>
				}
			}

			if( flat.includes('file') ) {
				if( field == 'file' ) {
					return <span className={`${postStyles.errorText}`}>{this.state.error.file}</span>
				}
			}

			if( flat.includes('description') ) {
				if( field == 'description' ) {
					return <span className={`${postStyles.errorText}`}>{this.state.error.description}</span>
				}
			}

			if( flat.includes('agreed') ) {
				if( field == 'agreed' ) {
					return <><br /><span className={`${postStyles.errorText}`}>{this.state.error.agreed}</span></>
				}
			}

			if( flat.includes('image') ) {
				if( field == 'image' ) {
					return <span className={`${postStyles.errorText}`}>{this.state.error.image}</span>
				}
			}

			if( flat.includes('topic') ) {
				if( field == 'topic' ) {
					return <><span className={`${postStyles.errorText}`}>{this.state.error.topic}</span></>
				}
			}

			if( flat.includes('first_name') ) {
				if( field == 'first_name' ) {
					return <><span className={`${postStyles.errorText}`}>{this.state.error.first_name}</span></>
				}
			}

			if( flat.includes('last_name') ) {
				if( field == 'last_name' ) {
					return <><span className={`${postStyles.errorText}`}>{this.state.error.last_name}</span></>
				}
			}

			if( flat.includes('email_address') ) {
				if( field == 'email_address' ) {
					return <><span className={`${postStyles.errorText}`}>{this.state.error.email_address}</span></>
				}
			}

			if( flat.includes('phone_number') ) {
				if( field == 'phone_number' ) {
					return <><span className={`${postStyles.errorText}`}>{this.state.error.phone_number}</span></>
				}
			}

		}
	}

	_renderAttachmentFilename() {
		if( this.state.attachment_filename != '' ) {
			return <span className={`${postStyles.attachmentFilename}`}>{this.state.attachment_filename}</span>
		}
	}

	_renderImageFilename() {
		if( this.state.image_filename != '' ) {
			return <span className={`${postStyles.attachmentFilename}`}>{this.state.image_filename}</span>
		}
	}

	_renderImagePreview() {
		if( this.state.image_url != '' ) {
			return <img src={this.state.image_url} />
		}
	}

	_renderAuthorsBlock = () => {
		const {authors} = this.state;
		if( authors.length < 1 ) {
			return(
				<div key="0" className={postStyles.authorWrap}>
				<input onChange={this.handleChange} name="author" ref={this.input} type="text" placeholder="Type author name" />
				<span onClick={() => {this._deleteAuthor(0)}} className={postStyles.deleteAuthor}>
					<img src="/images/trash.svg" />
				</span>
				</div>
			);
		} else {
			return(
				<>
				{authors.map((name,index) =>
					<div data-index={this.state.authors[index]} key={index} className={postStyles.authorWrap}>
					<input onChange={(e) => this.setAuthors(index, e)} name="author" value={this.state.authors[index]} type="text" placeholder="Type author name" />
					<span onClick={() => {this._deleteAuthor(index)}} className={postStyles.deleteAuthor}>
						<img src="/images/trash.svg" />
					</span>
					</div>
				)}
				</>
			);
		}
	}

	_addAuthor = () => {
		let authors_r = this.state.authors;

		if( this.state.authors.length >= 10 ) {
			this.setState({
				error: {
					authors: 'Maximum of 10 authors',
				}
			});
			return;
		}

		authors_r.push("");
		this.setState({
			'authors': authors_r
		});
	}

	_getTaxonomyName = (term_type, term_id) => {
		// console.log('get tax name');
		// console.log(term_type);
		// console.log(term_id);
		// return "Name";
		let term = this.props[term_type].find(element => element.term_id == term_id);
		return decodeHTML(term.name);
	}

	_renderSelectedTopics = () => {
		const {selected_topics} = this.state;
		if( selected_topics.length < 1 ) {
			return null;
		} else {
			return(
				<>
				{selected_topics.map(term_id =>
					<div
						key={term_id}
						className={postStyles.selectedTopic}>
						{this._getTaxonomyName('topics', term_id)}
						<span
							onClick={() => {
								this.removeTopic(term_id);
								// this.setState(state => ({
								// 	// organization_id: '',
								// 	// organization_name: '',
								// }));
							}}
							className={postStyles.close}
						>
							<img src="/images/close-blue.svg" alt="" />
						</span>
					</div>
				)}
				</>
			);
		}
	}

	_renderSelectedTags = () => {
		const {selected_tags} = this.state;
		if( selected_tags.length < 1 ) {
			return null;
		} else {
			return(
				<>
				{selected_tags.map(term_id =>
					<div
						key={term_id}
						className={postStyles.selectedTag}>
						{this._getTaxonomyName('tags', term_id)}
						<span
							onClick={() => {
								this.removeTag(term_id);
							}}
							className={postStyles.close}
						>
							<img src="/images/close-blue.svg" alt="" />
						</span>
					</div>
				)}
				</>
			);
		}
	}

	removeTopic = (id) => {
		let selected_topics = this.state.selected_topics;
		let index = selected_topics.findIndex(topic => topic == id);
		if (index !== -1) {
			selected_topics.splice(index, 1)
			this.setState({
				'selected_topics': selected_topics
			});
		}
	}

	removeTag = (id) => {
		let selected_tags = this.state.selected_tags;
		let index = selected_tags.findIndex(tag => tag == id);
		if (index !== -1) {
			selected_tags.splice(index, 1)
			this.setState({
				'selected_tags': selected_tags
			});
		}
	}

	_deleteAuthor = (index) => {
		let authors = this.state.authors;
		authors.splice(index, 1)
		this.setState({
			'authors': authors
		});
	}

	render() {
		const display_name = this.props.display_name;
		const {user} = this.props
		const {formats} = this.props;
		const {agencies} = this.props;
		const {available_agencies} = this.state.available_agencies;
		const {topics} = this.props;
		const {tags} = this.props;
		const title = 'Edit Whitepaper';

		return(
			<>
				<Head>
					<title key="page-title">{title}</title>
					<meta charset="utf-8"/>
					<link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
					<link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
					<link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
					<meta name="msapplication-TileImage" content="/favicon-270x270.png" />
					<meta name="msapplication-TileColor" content="#ffffff" />
					<link rel="manifest" href="/site.webmanifest" />
				</Head>
				<Header {...user} display_name={display_name} />
				<div className={`row ${postStyles.pageHeader} text-center`}>
					<div className="small-12 columns">
						<h1>Edit Whitepaper</h1>
						<img className={postStyles.hr} src="/images/sep.svg" alt="" />
					</div>
				</div>
				<div className={`row ${postStyles.pageContent}`}>
					<div className={`small-12 columns`}>
						<div id="controls" className={postStyles.controls}>
							<ul>
								<li
									className={postStyles.active}
									onClick={() => {
										this._toggleTab(1)
									}}
									>
									<div className={postStyles.icon}>
										{this._renderControlIcon(1)}
									</div>
									<span>Main</span>
								</li>
								<li
									onClick={() => {
										this._toggleTab(2)
									}}
									>
									<div className={postStyles.icon}>
										{this._renderControlIcon(2)}
									</div>
									<span>Description</span>
								</li>
								<li
									onClick={() => {
										this._toggleTab(3)
									}}
									>
									<div className={postStyles.icon}>
										{this._renderControlIcon(3)}
									</div>
									<span>Information</span>
								</li>
								<li
									onClick={() => {
										this._toggleTab(4)
									}}
									>
									<div className={postStyles.icon}>
										{this._renderControlIcon(4)}
									</div>
									<span>Publication</span>
								</li>
							</ul>
						</div>

						<div className={postStyles.tabs}>
							<div className={this._renderTabClass(1)}>
								<div className={`${postStyles.form}`}>
									<div className={`row ${postStyles.row}`}>
										<div className="small-12 columns">
											<label>Title{this._renderError('title')}
												<input onChange={this.handleChange} name="title" value={this.state.title} type="text" placeholder="Type your title of your content" />
											</label>
											<label>Format{this._renderError('format')}
												<select value={this.state.format} onChange={this.handleChange} name="format">
													<option>Select Format</option>
													{formats.map(format =>
														<option key={format.term_id} value={format.term_id}>{format.name}</option>
													)}
												</select>
											</label>
											<label>Authors{this._renderError('authors')}
												<span className={postStyles.subLabel}>
												<span className={postStyles.dot}>&middot;</span> up to 10</span>
												<div className={postStyles.authorBlock}>
													{this._renderAuthorsBlock()}
												</div>

											</label>

											<div onClick={() => {this._addAuthor()}} className={postStyles.addAuthor}>
												<span><img src="/images/add-author.svg" /></span><h5>Add Author</h5>
											</div>

											<label>Publish Date <img className={postStyles.question} src="/images/question.png" /> {this._renderError('publication_date')}
												<div className={postStyles.dateBlock}>
													<DatePicker
														selected={this.state.publication_date}
														//onChange={this.setPublicationDate}
														onChange={date => {
															this.setPublicationDate(date)
														}}
													/>
													<span className={postStyles.cal}>
														<img src="/images/calendar.svg" />
													</span>
												</div>
											</label>
											<label>Upload Your File {this._renderError('file')}
												<div className={postStyles.addFile}>
													<form
														id="pdf-upload"
														action="https://gwpadmin.codewrangler.io/api/gwp/v1/upload-pdf"
														onSubmit={ (e) => this.uploadPDFSubmit(e) }
														method="post"
														encType="multipart/form-data">
														<input onChange={this.triggerFileUpload} name="pdf_file" type="file" accept="application/pdf" />
														<span><img src="/images/upload.svg" /></span><h5>Upload Content</h5>
													</form>
													{this._renderAttachmentFilename()}
												</div>
											</label>

											<div className={postStyles.agree}>
												<label className={postStyles.label}> I give GovWhitePapers permission to post this content.
													<input type="checkbox" onChange={this.handleChange} name="agreed" checked={this.state.agreed} value={this.state.agreed} />
												  <span className={postStyles.checkmark}></span>
													{this._renderError('agreed')}
												</label>
											</div>

											<div className={postStyles.externalLink}>
												<div className={postStyles.line}>
													<hr />
													<span>or add external link</span>
												</div>
												<label>Link to Content
													<input type="url" onChange={this.handleChange} name="content_link" checked={this.state.content_link} value={this.state.content_link} placeholder="External Link" />
												</label>
											</div>

											<div className={postStyles.nav}>
												<button
													onClick={() => {
														this._toggleTab(2)
													}}
													className={`button ${postStyles.button}`}>Save and Continue
												</button>
											</div>

										</div>
									</div>
								</div>
							</div>
							<div className={this._renderTabClass(2)}>
							<div className={`${postStyles.form}`}>
								<div className={`row ${postStyles.row}`}>
									<div className="small-12 columns">
										<label>Description {this._renderError('description')}
											<textarea
												onChange={this.handleChange}
												name="description" value={this.state.description}
												placeholder="Add a description..."
												rows="5">
											</textarea>
										</label>

										<label>Copyright Notice
											<span className={postStyles.subLabel}>
												<span className={postStyles.dot}>&middot;</span> optional
											</span>
											<div className={postStyles.copyright}>
												<input onChange={this.handleChange}
												name="copyright_notice" value={this.state.copyright_notice} type="text" placeholder="Copyright text" />
												<span>
													&copy;
												</span>
											</div>
										</label>

										<label>
											<div className={postStyles.addPhoto}>
											<form
												id="image-upload"
												action="https://gwpadmin.codewrangler.io/api/gwp/v1/upload-whitepaper-image"
												onSubmit={ (e) => this.uploadImageSubmit(e) }
												method="post"
												encType="multipart/form-data">
												<input onChange={this.triggerImageUpload} name="image_file" type="file" accept="image/jpeg,image/png" />
												<span><img src="/images/upload-large.svg" /></span>
												<h3>Upload Photo</h3>
												<p>Max size 10MB; minimum 300 pixels. Recommended size: 600x500 pixels</p>
											</form>
											{this._renderImageFilename()}
											{this._renderError('image')}
											</div>
										</label>

										<div className={postStyles.imagePreview}>
											{this._renderImagePreview()}
										</div>

										<div className={postStyles.nav}>
											<button
												onClick={() => {
													this._toggleTab(3)
												}}
												className={`button ${postStyles.button}`}>Save and Continue
											</button>
										</div>
									</div>
								</div>
							</div>
							</div>
							<div className={this._renderTabClass(3)}>
								<div className={`${postStyles.form}`}>
									<div className={`row ${postStyles.row}`}>
										<div className="small-12 columns">
											<div className={postStyles.agency}>
												<p>Is your content government agency or state and local specific?</p>
												<ul className={postStyles.agencyTypeSelector}>
													<li className={this._renderRadioClass(true)}>
														<label className={`button ${postStyles.button}`}>
															<input onChange={this.handleChange} type="radio" value="1" name="agency_specific" checked={this.state.agency_specific === true} />Yes, it's specific
														</label>
													</li>
													<li className={this._renderRadioClass(false)}>
														<label className={`button ${postStyles.button}`}>
															<input onChange={this.handleChange} type="radio" value="0" name="agency_specific" checked={this.state.agency_specific === false} />No, it's not specific
														</label>
													</li>
												</ul>

												<div className={this._renderAgencySelectorClass()}>

													<label>Audience Focus {this._renderError('focus')}
														<select onChange={this.handleChange} name="focus">
															<option value="0">Select Focus</option>
															{agencies.map(agency =>
																<option key={agency.term_id} value={agency.term_id}>{decodeHTML(agency.name)}</option>
															)}
														</select>
													</label>

													{this._renderAgencySelector()}

												</div>
											</div>

											<div className={postStyles.topics}>
												<label>Topics {this._renderError('topic')}
												<span className={postStyles.subLabel}>
													<span className={postStyles.dot}>&middot;</span> up to 2</span>
													<select onChange={this.handleChange} name="select_topic">
														<option value="0">Select Interests</option>
														{topics.map(topic =>
															<option key={topic.term_id} value={topic.term_id}>{decodeHTML(topic.name)}</option>
														)}
													</select>
												</label>

												{this._renderSelectedTopics()}

											</div>

											<div className={postStyles.tags}>
												<label>Tags {this._renderError('tag')}
												<span className={postStyles.subLabel}>
													<span className={postStyles.dot}>&middot;</span> up to 5</span>
													<select onChange={this.handleChange} name="select_tag">
														<option value="0">Select Tags</option>
														{tags.map(tag =>
															<option key={tag.term_id} value={tag.term_id}>{decodeHTML(tag.name)}</option>
														)}
													</select>
												</label>

												{this._renderSelectedTags()}
											</div>

											<div className={postStyles.relevant}>
												<label className={postStyles.label}> This content is relevant to the government/military community.
													<input type="checkbox" onChange={this.handleChange} name="relevant" checked={this.state.relevant} value={this.state.relevant} />
												  <span className={postStyles.checkmark}></span>
													{this._renderError('relevant')}
												</label>
											</div>

											<div className={postStyles.nav}>
												<button
													onClick={() => {
														this._toggleTab(4)
													}}
													className={`button ${postStyles.button}`}>Save and Continue
												</button>
											</div>
										</div>
									</div>
								</div>
							</div>
							<div className={this._renderTabClass(4)}>
								<div className={`${postStyles.form}`}>
									<div className={`row ${postStyles.row}`}>
										<div className="small-12 columns">
											<div className={postStyles.publication}>

											<label>First Name {this._renderError('first_name')}
												<input onChange={this.handleChange} name="first_name" value={this.state.first_name} type="text" placeholder="" />
											</label>

											<label>Last Name {this._renderError('last_name')}
												<input onChange={this.handleChange} name="last_name" value={this.state.last_name} type="text" placeholder="" />
											</label>

											<label>Email {this._renderError('email_address')}
												<input onChange={this.handleChange} name="email_address" value={this.state.email_address} type="email" placeholder="" />
											</label>

											<label>Phone {this._renderError('phone_number')}
												<input onChange={this.handleChange} name="phone_number" value={this.state.phone_number} type="text" placeholder="" />
											</label>

											</div>
											<div className={postStyles.nav}>
												<button
													onClick={this._handlePublish}
													className={`js-publish button ${postStyles.button}`}>Publish
												</button>
											</div>
										</div>
									</div>
								</div>

							</div>
						</div>
					</div>
				</div>
				<Footer/>
			</>
		);
	}
}

export default withRouter(Edit);
