import React from 'react';
import Router from 'next/router'
import Head from 'next/head'
import fetch from 'isomorphic-unfetch';
import Link from 'next/link';
import {decodeHTML} from 'entities'
import WordpressService from '../services/wordpress'
import Header from '../components/Header';
import Footer from '../components/Footer';
import registerStyles from '../public/styles/modules/register.module.css';
import DatePicker from "react-datepicker";

class Register extends React.Component {

	constructor(props) {
		super(props);
		this.state = {
			active_tab: 1,
			email_address: '',
			phone_number: '',
			password: '',
			password_confirm: '',
			first_name: '',
			last_name: '',
			address: '',
			address_line_two: '',
			city: '',
			state: '',
			zip: '',
			country: 'United States',
			available_states: this._getStates('United States'),
			works_for: '',
			job_title: '',
			selected_topics: [],
			organizations: [],
			organization_id: '',
			organization_name: '',
			new_organization: '',
			organization_email: '',
			new_organization_email: '',
			personal_email: '',
			work_email: '',
			working: false,
			error: false
		}

		this.handleChange = this.handleChange.bind(this);
	}

	async componentDidMount() {
		if( this.props.user ) {
			Router.push('/profile');
			return false;
		}
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

	generateRandomString() {
		return Math.random().toString(15).substring(2, 11) + Math.random().toString(10).substring(2, 10);
	}

	isURL(url) {
		var regexp = /(http|https):\/\/(\w+:{0,1}\w*@)?(\S+)(:[0-9]+)?(\/|\/([\w#!:.?+=&%@!\-\/]))?/
		return regexp.test(url);
	}


	_openLogin = () => {
		let login = document.querySelector('.js-login');
		login.click();
	}

	async handleChange(event) {
		let name = event.target.getAttribute('name');

		if( name == 'email_address' ) {
			this.setState({
				[name]: event.target.value
			});
		} else if( name == 'phone_number' ) {
			this.setState({
				[name]: event.target.value
			});
		} else if( name == 'password' ) {
			this.setState({
				[name]: event.target.value
			});
		} else if( name == 'password_confirm' ) {
			this.setState({
				[name]: event.target.value
			});
		} else if( name == 'first_name' ) {
			this.setState({
				[name]: event.target.value
			});
		} else if( name == 'last_name' ) {
			this.setState({
				[name]: event.target.value
			});
		} else if( name == 'country' ) {
			this.setState({
				'available_states': this._getStates(event.target.value)
			});
		} else if( name == 'state' ) {
			this.setState({
				[name]: event.target.value
			});
		} else if( name == 'works_for' ) {
			this.setState({
				[name]: event.target.value
			});
		} else if( name == 'job_title' ) {
			this.setState({
				[name]: event.target.value
			});
		} else if( name == 'organization_name' ) {
			if( event.target.value.length >= 3 ) {
				const wordpress = new WordpressService
				const organizations = await wordpress.searchOrganizations(event.target.value, 10);
				this.setState(state => ({
					organizations: organizations,
				}));
			} else {
				this.setState(state => ({
					organizations: [],
				}));
			}
		} else if ( name == 'new_organization' ){
			this.setState({
				[name]: event.target.value
			},
			() => {
				this.setState({
					organization_id: '',
					organization_email: '',
				});
			});
		} else if ( name == 'new_organization_email' ) {
			this.setState({
				[name]: event.target.value
			},
			() => {
				this.setState({
					organization_id: '',
					organization_email: '',
				});
			});
		} else if( name == 'select_topic' ) {
			let topic_id = event.target.value;
			if( topic_id == 0 ) {
				return;
			}

			let topic_r = this.state.selected_topics;

			if( this.state.selected_topics.length >= 5 ) {
				return;
			}

			let topic = this.props.topics.find(element => element.term_id == topic_id);
			let index = topic_r.findIndex(x => x == topic_id);
		  if (index === -1) {
				topic_r.push(topic);
				this.setState({
					'selected_topics': topic_r
				});

				let select = document.querySelector('select[name="select_topic"]');
				select.selectedIndex = 0;
			}

		} else {
			this.setState({
				[name]: event.target.value
			},
			() => {

			});
		}
	}

	removeTopic = (id) => {
		let selected_topics = this.state.selected_topics;
		let index = selected_topics.findIndex(topic => topic.term_id == id);
		if (index !== -1) {
			selected_topics.splice(index, 1)
			this.setState({
				'selected_topics': selected_topics
			});

			let select = document.querySelector('select[name="select_topic"]');
			select.selectedIndex = 0;
		}
	}

	_renderSelectedTopics = () => {
		const {selected_topics} = this.state;
		if( selected_topics.length < 1 ) {
			return null;
		} else {
			return(
				<>
				{selected_topics.map(topic =>
					<div
						key={topic.term_id}
						className={registerStyles.selectedTopic}>
						{decodeHTML(topic.name)}
						<span
							onClick={() => {
								this.removeTopic(topic.term_id);
							}}
							className={registerStyles.close}
						>
							<img src="/images/close-blue.svg" alt="" />
						</span>
					</div>
				)}
				</>
			);
		}
	}

	_renderOrganizationSelect = () => {
		const {agencies} = this.props;
		const {works_for} = this.state;
		if( works_for == '' ) {
			return null;
		}
		if( works_for == 'private_industry' || works_for == 'government_contractor' ) {
			return(
				<>
				<form autoComplete="off">
					<div className={registerStyles.findOrganization}>
						<label>Find Organization {this._renderError('organization_name')}
							<input onChange={this.handleChange} name="organization_name" type="search" autoComplete={this.generateRandomString()} placeholder="Start typing your organization's name" />
							{this._renderOrganizationsResult()}
						</label>
						{this._renderSelectedOrganization()}

						<label>Organization Email {this._renderError('organization_email')}
							<input onChange={this.handleChange} name="organization_email" autoComplete={this.generateRandomString()} value={this.state.organization_email} type="email" placeholder="To verify your affiliation" />
						</label>
					</div>

					<div className={registerStyles.addDivider}>
						<hr />
						<span>or add new</span>
					</div>

					<div className={registerStyles.addOrganization}>
						<label>Add Organization {this._renderError('new_organization')}
							<input onChange={this.handleChange} autoComplete={this.generateRandomString()} name="new_organization" type="text" placeholder="Type organization name" />
						</label>
					</div>

					<label>Organization Email {this._renderError('new_organization_email')}
						<input onChange={this.handleChange} name="new_organization_email" value={this.state.new_organization_email} autoComplete={this.generateRandomString()} type="email" placeholder="To verify your affiliation" />
					</label>

				</form>
			</>
			);
		} else {
			return(
				<>
				<label>Personal Email {this._renderError('personal_email')}
					<span className={registerStyles.subLabel}>
						<span className={registerStyles.dot}>&middot;</span> optional</span>
					<input onChange={this.handleChange} name="personal_email" value={this.state.personal_email} type="email" placeholder="Add your personal email" />
				</label>

				<label>Work Email {this._renderError('work_email')}
					<span className={registerStyles.subLabel}>
						<span className={registerStyles.dot}>&middot;</span> optional</span>
					<input onChange={this.handleChange} name="work_email" value={this.state.work_email} type="email" placeholder="Add your work email" />
				</label>
				</>
			)
		}
	}

	_setOrganization = (id,name) => {
		let searchInput = document.querySelector('input[name="organization_name"]');
		searchInput.value = '';
		this.setState(state => ({
			organization_id: id,
			organization_name: name,
			organizations: [],
		}));
	}

	_renderSelectedOrganization = () => {
		const {organization_id} = this.state;
		if( organization_id ) {
			return(
				<div className={registerStyles.selectedOrganization}>
					{this.state.organization_name}
					<span
						onClick={() => {
							this.setState(state => ({
								organization_id: '',
								organization_name: '',
							}));
						}}
						className={registerStyles.close}
					>
						<img src="/images/close-blue.svg" alt="" />
					</span>
				</div>
			);
		} else {
			return null;
		}
	}

	_renderOrganizationsResult = () => {
		const {organizations} = this.state;
		if( organizations.length < 1 ) {
			return null;
		} else {
			return(
				<div className={registerStyles.results}>
					<ul>
					{organizations.map(org =>
						<li
							key={org.ID}
							data-id={org.ID}
							onClick={() => {
								this._setOrganization(org.ID, org.name)
							}}
						>{decodeHTML(org.name)}</li>
					)}
					</ul>
				</div>
			);
		}
	}

	_renderTabClass = (tab) => {
		const {active_tab} = this.state;
		if( active_tab == tab  ) {
			return `${registerStyles.tab} ${registerStyles.open}`;
		} else {
			return `${registerStyles.tab}`
		}
	}

	_renderSocialWrapClass = () => {
		const {active_tab} = this.state;
		if( active_tab == 1  ) {
			return `${registerStyles.socialWrap}`;
		} else {
			return `${registerStyles.socialWrap} ${registerStyles.hide}`
		}
	}

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

	_handleRegistration = () => {
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

		button = document.querySelector('.js-register');
		component = this;

		if( !this.state.works_for ) {
			var selectFormat = document.querySelector('select[name="works_for"]');
			this.setState({
				error: {
					works_for: 'Please select your industry.',
				}
			});
			selectFormat.scrollIntoView({
				behavior: "smooth",
				block: "end",
				inline: "nearest"
			});
			return;
		}

		if( this.state.job_title.length < 2 ) {
			var inputJobTitle = document.querySelector('input[name="job_title"]');
			this.setState({
				error: {
					job_title: 'Invalid job title',
				}
			});
			inputJobTitle.scrollIntoView({
				behavior: "smooth",
				block: "end",
				inline: "nearest"
			});
			return false;
		}

		url = 'https://gwpadmin.codewrangler.io/api/gwp/v1/register-user';
		json = JSON.stringify({
			"email_address": this.state.email_address,
			"phone_number": this.state.phone_number,
			"password": this.state.password,
			"password_confirm": parseInt(this.state.password_confirm),
			"first_name": this.state.first_name,
			"last_name": this.state.last_name,
			"job_title": this.state.job_title,
			"works_for": this.state.works_for,
			"selected_topics": this.state.selected_topics,
			"organization_id": this.state.organization_id,
			"new_organization": this.state.new_organization,
			"organization_email": this.state.organization_email,
			"new_organization_email": this.state.new_organization_email,
			"personal_email": this.state.personal_email,
			"work_email": this.state.work_email,
			"address": this.state.address,
			"address_line_two": this.state.address_line_two,
			"city": this.state.city,
			"state": this.state.state,
			"country": this.state.country,
			"zip": this.state.zip,
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
					active_tab: '1',
					email_address: '',
					phone_number: '',
					password: '',
					password_confirm: '',
					first_name: '',
					last_name: '',
					works_for: '',
					job_title: '',
					selected_topics: [],
					organizations: [],
					organization_id: '',
					organization_name: '',
					new_organization: '',
					organization_email: '',
					new_organization_email: '',
					personal_email: '',
					work_email: '',
					working: false,
					error: false
				},
				() => {
					// Redirect to profile
					//Router.push('/');
					let login = document.querySelector('.js-login');
					login.click();
					return false;
				});

			}, 1000 );
		});
	}

	_toggleTab = (tab) => {
		var controls = document.querySelector('#controls');
		event.preventDefault();
		if( tab == 2 ) {
			var inputEmail = document.querySelector('input[name="email_address"]');

			if( !inputEmail.checkValidity() ) {
				this.setState({
					error: {
						email_address: 'Please add a valid email address.',
					}
				});
				inputEmail.scrollIntoView({
					behavior: "smooth",
					block: "end",
					inline: "nearest"
				});
				return false;
			}

			if( this.state.password.length < 10 ) {
				var inputPassword = document.querySelector('input[name="password"]');
				this.setState({
					error: {
						password: 'Minimum of 10 characters.',
					}
				});
				inputPassword.scrollIntoView({
					behavior: "smooth",
					block: "end",
					inline: "nearest"
				});
				return;
			}

			if( this.state.password_confirm !== this.state.password ) {
				this.setState({
					error: {
						password_confirm: 'Passwords do not match.',
					}
				});
				return false;
			}

			// Verify that email doesn't exist
			let component = this;

			let url = 'https://gwpadmin.codewrangler.io/api/gwp/v1/check-email';
			let json = JSON.stringify({
				"email_address": this.state.email_address,
			});

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
				let flat = JSON.stringify(data);

				if( flat.includes('error') ) {
					component.setState({
						error: data.message,
						error: {
							email_address: data.message
						},
						working: false
					});

					inputEmail.scrollIntoView({
						behavior: "smooth",
						block: "end",
						inline: "nearest"
					});
					return false;
				} else {
					component.setState(state => ({
						active_tab: tab,
						error: false,
						working: false,
					}));

					controls.scrollIntoView({
						behavior: "smooth",
						block: "end",
						inline: "nearest"
					});
				}
			});

		}
		//
		if( tab == 3 ) {
			if( this.state.first_name.length < 2 ) {
				var inputFirstName = document.querySelector('input[name="first_name"]');
				this.setState({
					error: {
						first_name: 'Invalid first name',
					}
				});
				inputFirstName.scrollIntoView({
					behavior: "smooth",
					block: "end",
					inline: "nearest"
				});
				return false;
			}

			if( this.state.last_name.length < 2 ) {
				var inputLastName = document.querySelector('input[name="last_name"]');
				this.setState({
					error: {
						last_name: 'Invalid last name',
					}
				});
				inputLastName.scrollIntoView({
					behavior: "smooth",
					block: "end",
					inline: "nearest"
				});
				return false;
			}

			if( this.state.phone_number.length < 7 ) {
				var inputPhoneNumber = document.querySelector('input[name="phone_number"]');
				this.setState({
					error: {
						phone_number: 'Invalid phone number',
					}
				});
				inputPhoneNumber.scrollIntoView({
					behavior: "smooth",
					block: "end",
					inline: "nearest"
				});
				return false;
			}

			if( this.state.country.length < 2 ) {
				var countryField = document.querySelector('select[name="country"]');
				this.setState({
					error: {
						country: 'Select your country.',
					}
				});
				countryField.scrollIntoView({
					behavior: "smooth",
					block: "end",
					inline: "nearest"
				});
				return false;
			}

			if( this.state.address.length < 2 ) {
				var addressField = document.querySelector('input[name="address"]');
				this.setState({
					error: {
						address: 'Include your address',
					}
				});
				addressField.scrollIntoView({
					behavior: "smooth",
					block: "end",
					inline: "nearest"
				});
				return false;
			}

			if( this.state.state == '' || this.state.state == 0 || this.state.state == "0" ) {
				//var stateField = document.querySelector('select[name="state"]');
				this.setState({
					error: {
						state: 'Select your state.',
					}
				});
				// stateField.scrollIntoView({
				// 	behavior: "smooth",
				// 	block: "end",
				// 	inline: "nearest"
				// });
				return false;
			}

			if( this.state.zip.length < 2 ) {
				var zipField = document.querySelector('input[name="zip"]');
				this.setState({
					error: {
						zip: 'Include your zip code.',
					}
				});
				zipField.scrollIntoView({
					behavior: "smooth",
					block: "end",
					inline: "nearest"
				});
				return false;
			}

			if( this.state.selected_topics.length < 1 ) {
				this.setState({
					error: {
						selected_topics: 'Please select at least one area of interest.',
					}
				});
				return;
			}

			if( this.state.email_address.includes('.gov') || this.state.email_address.includes('.edu') ||
			this.state.email_address.includes('.mil') ||
			this.state.email_address.includes('.us')) {
				this.setState({
					work_email: this.state.email_address
				});
			}

			this.setState(state => ({
				active_tab: tab,
				error: false,
			}));

			controls.scrollIntoView({
				behavior: "smooth",
				block: "end",
				inline: "nearest"
			});

		}

	};

	_renderError(field) {
		if( this.state.error ) {
			let flat = JSON.stringify(this.state.error);

			if( flat.includes('email_address') ) {
				if( field == 'email_address' ) {
					return <><span className={`${registerStyles.errorText}`}>{this.state.error.email_address}</span></>
				}
			}

			if( flat.includes('phone_number') ) {
				if( field == 'phone_number' ) {
					return <><span className={`${registerStyles.errorText}`}>{this.state.error.phone_number}</span></>
				}
			}

			if( flat.includes('password') ) {
				if( field == 'password' ) {
					return <span className={`${registerStyles.errorText}`}>{this.state.error.password}</span>
				}
			}

			if( flat.includes('password_confirm') ) {
				if( field == 'password_confirm' ) {
					return <span className={`${registerStyles.errorText}`}>{this.state.error.password_confirm}</span>
				}
			}

			if( flat.includes('first_name') ) {
				if( field == 'first_name' ) {
					return <span className={`${registerStyles.errorText}`}>{this.state.error.first_name}</span>
				}
			}

			if( flat.includes('last_name') ) {
				if( field == 'last_name' ) {
					return <span className={`${registerStyles.errorText}`}>{this.state.error.last_name}</span>
				}
			}

			if( flat.includes('address') ) {
				if( field == 'address' ) {
					return <span className={`${registerStyles.errorText}`}>{this.state.error.address}</span>
				}
			}

			if( flat.includes('country') ) {
				if( field == 'country' ) {
					return <span className={`${registerStyles.errorText}`}>{this.state.error.country}</span>
				}
			}

			if( flat.includes('state') ) {
				if( field == 'state' ) {
					return <span className={`${registerStyles.errorText}`}>{this.state.error.state}</span>
				}
			}

			if( flat.includes('zip') ) {
				if( field == 'zip' ) {
					return <span className={`${registerStyles.errorText}`}>{this.state.error.zip}</span>
				}
			}

			if( flat.includes('job_title') ) {
				if( field == 'job_title' ) {
					return <span className={`${registerStyles.errorText}`}>{this.state.error.job_title}</span>
				}
			}

			if( flat.includes('works_for') ) {
				if( field == 'works_for' ) {
					return <span className={`${registerStyles.errorText}`}>{this.state.error.works_for}</span>
				}
			}

			if( flat.includes('selected_topics') ) {
				if( field == 'selected_topics' ) {
					return <span className={`${registerStyles.errorText}`}>{this.state.error.selected_topics}</span>
				}
			}

			if( flat.includes('registration_error') ) {
				if( field == 'registration' ) {
					return <span className={`${registerStyles.errorText}`}>{this.state.error.selected_topics}</span>
				}
			}

		}
	}

	_getStates(name) {
		let {countries} = require('../components/countries.json');
		let index = countries.findIndex(country => country.country == name);
		return countries[index].states;
	}

	render() {
		const display_name = this.props.display_name;
		const {user} = this.props
		const {topics} = this.props;
		let {countries} = require('../components/countries.json');
		return(
			<>
				<Head>
					<title key="page-title">Register</title>
					<meta charset="utf-8"/>
					<link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
					<link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
					<link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
					<meta name="msapplication-TileImage" content="/favicon-270x270.png" />
					<meta name="msapplication-TileColor" content="#ffffff" />
					<link rel="manifest" href="/site.webmanifest" />
					<meta property="og:title" content="Register" key="og-title" />
					<meta name="description" content="" key="description" />
					<meta property="og:locale" content="en_US" key="og-locale" />
					<meta property="og:title" content="Register" key="og-title" />
					<meta property="og:description" content="" key="og-description" />
					<meta property="og:site_name" content="GovWhitePapers" />
				</Head>
				<Header {...user} display_name={display_name} />
				<div className={`row ${registerStyles.pageHeader} text-center`}>
					<div className="small-12 columns">
						<h1>Welcome</h1>
						<img className={registerStyles.hr} src="/images/sep.svg" alt="" />
						<p>Enter your information below or log in with a social account.</p>
					</div>
				</div>

				<div className={`row ${registerStyles.pageContent}`}>
					<div className={`small-12 columns`}>
						<div id="controls" className={registerStyles.controls}>
							<ul>
								<li
									className={registerStyles.active}
									onClick={() => {
										this._toggleTab(1)
									}}
									>
									<div className={registerStyles.icon}>
										{this._renderControlIcon(1)}
									</div>
									<span>Account</span>
								</li>
								<li
									onClick={() => {
										this._toggleTab(2)
									}}
									>
									<div className={registerStyles.icon}>
										{this._renderControlIcon(2)}
									</div>
									<span>Personal</span>
								</li>
								<li
									onClick={() => {
										this._toggleTab(3)
									}}
									>
									<div className={registerStyles.icon}>
										{this._renderControlIcon(3)}
									</div>
									<span>Organization</span>
								</li>
							</ul>
						</div>

						<div className={registerStyles.tabs}>

						<div className={this._renderTabClass(1)}>
							<div className={`${registerStyles.form}`}>
								<div className={`row ${registerStyles.row}`}>
									<div className="small-12 columns">

										{/* Start Tab 1 */}

										<div className={registerStyles.account}>
											<label>Email {this._renderError('email_address')}
												<input onChange={this.handleChange} name="email_address" value={this.state.email_address} type="email" placeholder="Type your email address" required />
											</label>

											<label>Password {this._renderError('password')}
											<span className={registerStyles.subLabel}>
												<span className={registerStyles.dot}>&middot;</span> minimum of 10 characters</span>
												<input onChange={this.handleChange} name="password" value={this.state.password} type="password" placeholder="Type your password" required />
											</label>

											<label>Confim Password {this._renderError('password_confirm')}
												<input onChange={this.handleChange} name="password_confirm" value={this.state.password_confirm} type="password" placeholder="Verify your password" required />
											</label>
										</div>
										<div className={registerStyles.nav}>
											<button
												onClick={() => {
													this._toggleTab(2)
												}}
												className={`button ${registerStyles.button}`}>Continue
											</button>
										</div>

										<div className={this._renderSocialWrapClass()}>
											<div className={registerStyles.sep}>
												<img src="/images/continue-with.png" alt="" />
											</div>

											<div className={`${registerStyles.socialBlock}`}>
												<div className="small-12 columns text-center">
													<ul>
														<li>
															<a data-close-modal className={registerStyles.google}>
																<img data-close-modal className={registerStyles.social} src="/images/login-google.png" alt="" />
															</a>
														</li>
														<li>
															<a data-close-modal className={registerStyles.fb}>
																<img data-close-modal className={registerStyles.social} src="/images/login-fb.png" alt="" />
															</a>
														</li>
														<li>
															<a data-close-modal className={registerStyles.linkedin}>
																<img data-close-modal className={registerStyles.social} src="/images/login-linkedin.png" alt="" />
															</a>
														</li>
													</ul>
												</div>
											</div>
										</div>

										<div className={`${registerStyles.signUp}`}>
											<div className="small-12 columns text-center">
												<h5>
													<a
														onClick={() => {
															this._openLogin();
														}}
													>
														<span data-close-modal>Already have an account?</span> Log In <img className={registerStyles.linkArrow} data-close-modal src="/images/right-arrow-blue.svg" alt="" />
													</a>
												</h5>
											</div>
										</div>

										{/* End Tab 1 */}

									</div>
								</div>
							</div>
						</div>

						<div className={this._renderTabClass(2)}>
							<div className={`${registerStyles.form}`}>
								<div className={`row ${registerStyles.row}`}>
									<div className="small-12 columns">
										<div className={registerStyles.personal}>
											<label>First Name {this._renderError('first_name')}
												<input onChange={this.handleChange} name="first_name" value={this.state.first_name} type="text" placeholder="Type your first name" />
											</label>

											<label>Last Name {this._renderError('last_name')}
												<input onChange={this.handleChange} name="last_name" value={this.state.last_name} type="text" placeholder="Type your last name" />
											</label>

											<label>Phone {this._renderError('phone_number')}
												<input onChange={this.handleChange} name="phone_number" value={this.state.phone_number} type="tel" placeholder="Type your phone number" required />
											</label>

											<div className={registerStyles.country}>
												<label>Country {this._renderError('country')}
													<select onChange={this.handleChange} autoComplete={this.generateRandomString()} name="country">
														<option value="United States">United States</option>
														{countries.map(country =>
															<option key={country.country} value={country.country}>{decodeHTML(country.country)}</option>
														)}
													</select>
												</label>
											</div>

											<label>Address {this._renderError('address')}
												<input onChange={this.handleChange} name="address" value={this.state.address} type="text" placeholder="Type your street address" />
											</label>

											<label>Address Line 2 {this._renderError('address_line_two')}
												<input onChange={this.handleChange} name="address_line_two" value={this.state.address_line_two} type="text" placeholder="(optional)" />
											</label>

											<label>City {this._renderError('city')}
												<input onChange={this.handleChange} name="city" value={this.state.city} type="text" placeholder="City" />
											</label>

											<div className={registerStyles.state}>
												<label>State {this._renderError('state')}
													<select onChange={this.handleChange} autoComplete={this.generateRandomString()} name="state">
														<option value="0">Select Your State</option>
														{this.state.available_states.map(state =>
															<option key={state} value={state}>{decodeHTML(state)}</option>
														)}
													</select>
												</label>
											</div>

											<label>Zip {this._renderError('zip')}
												<input onChange={this.handleChange} name="zip" value={this.state.zip} type="text" placeholder="Zip Code" />
											</label>


											<div className={registerStyles.topics}>
												<label>Areas of Interest {this._renderError('selected_topics')}
												<span className={registerStyles.subLabel}>
													<span className={registerStyles.dot}>&middot;</span> up to 5</span>
													<select onChange={this.handleChange} name="select_topic">
														<option value="0">Select Interests</option>
														{topics.map(topic =>
															<option key={topic.term_id} value={topic.term_id}>{decodeHTML(topic.name)}</option>
														)}
													</select>
												</label>
												{this._renderSelectedTopics()}
											</div>

										</div>
										<div className={registerStyles.nav}>
											<button
												onClick={() => {
													this._toggleTab(3)
												}}
												className={`button ${registerStyles.button}`}>Continue
											</button>
										</div>

									</div>
								</div>
							</div>
						</div>

						<div className={this._renderTabClass(3)}>
							<div className={`${registerStyles.form}`}>
								<div className={`row ${registerStyles.row}`}>
									<div className="small-12 columns">

										<div className={registerStyles.worksFor}>
											<label>I work for {this._renderError('works_for')}
												<select onChange={this.handleChange} autoComplete={this.generateRandomString()}  name="works_for">
													<option value="0">Select who you work for</option>
													<option value="federal_government">Federal Government</option>
													<option value="military">Military</option>
													<option value="state_and_local">State and Local Government</option>
													<option value="education">Education</option>
													<option value="government_contractor">Government Contractor</option>
													<option value="private_industry">Private Industry</option>
												</select>
											</label>

										</div>

										<label>Job Title {this._renderError('job_title')}
											<input onChange={this.handleChange} name="job_title" value={this.state.job_title} type="text" placeholder="Type your job title" />
										</label>

										<div className={registerStyles.organization}>
											{this._renderOrganizationSelect()}
										</div>

										<div className={registerStyles.nav}>
											<button
												onClick={() => {
													this._handleRegistration()
												}}
												className={`button js-register ${registerStyles.button}`}>Complete Registration
											</button>
										</div>

										{this._renderError('registration')}

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

export default Register;

export async function getStaticProps(ctx) {
	const wordpress = new WordpressService
	const topics = await wordpress.fetchTopics();
	const page = await wordpress.fetchPage('register');
	return {
		props: {
			topics,
			page,
		}
	}
}
