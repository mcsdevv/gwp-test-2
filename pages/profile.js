import React from 'react';
import WordpressService from '../services/wordpress'
import Router from 'next/router'
import Head from 'next/head'
import Link from 'next/link';
import Header from '../components/Header';
import Footer from '../components/Footer';
import ProfileSidebar from '../components/ProfileSidebar';
import profileStyles from '../public/styles/modules/profile.module.css';

class Profile extends React.Component {

	constructor(props) {
		super(props);
		this.state = {
			first_name: '',
			last_name: '',
			email_address: '',
			job_title: '',
			featured_media: false,
			working: false,
			display_name: '',
		}

		this.handleChange = this.handleChange.bind(this);
	}

	handleChange(event) {
		let name = event.target.getAttribute('name');
		this.setState({
			[name]: event.target.value
		},
		() => {

		});
	}

	async componentDidMount() {
		if( !this.props.user ) {
			Router.push('/login')
			return false;
		}
		this.input = React.createRef();
		const access_token = this.props.user.access_token;
		if( !access_token ) {
			return false;
		}

		const wordpress = new WordpressService
		const user = await wordpress.getUser(access_token);
		this.setState(state => ({
			first_name: user.first_name,
			last_name: user.last_name,
			job_title: user.job_title,
			email_address: user.email_address,
			featured_media: user.featured_media,
			display_name: user.first_name + ' ' + user.last_name
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

	_handleSave = () => {
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

		firstNameField = document.querySelector('input[name="first_name"]');
		lastNameField = document.querySelector('input[name="last_name"]');
		emailAddressField = document.querySelector('input[name="email_address"]');
		jobTitleField = document.querySelector('input[name="job_title"]');

		if (!firstNameField.checkValidity()) {
			firstNameField.classList.add('invalid');
			return false;
		} else {
			firstNameField.classList.remove('invalid');
		}

		if (!lastNameField.checkValidity()) {
			lastNameField.classList.add('invalid');
			return false;
		} else {
			lastNameField.classList.remove('invalid');
		}

		if (!emailAddressField.checkValidity()) {
			emailAddressField.classList.add('invalid');
			return false;
		} else {
			emailAddressField.classList.remove('invalid');
		}

		button = document.querySelector('.js-save');
		component = this;

		const token = this.props.user.access_token;

		url = 'https://gwpadmin.codewrangler.io/api/gwp/v1/user-update';
		json = JSON.stringify({
			"email_address": this.state.email_address,
			"first_name": this.state.first_name,
			"last_name": this.state.last_name,
			"job_title": this.state.job_title,
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

				window.location.reload();
			}, 1000 );
		});
	}

	_editPhoto() {
		alert();
		//console.log(this);
		// this.setState(state => ({
		// 	featured_media: !this.state.featured_media,
		// }));
	}

	uploadPhotoSubmit(e) {
		//console.log('new image submitted');
		e.preventDefault();
		let formData = new FormData(e.target);
		const token = this.props.user.access_token;
		let component = this;
		let file = formData.get('image_file');
		formData.append("access_token", token);

		if( !token ) {
			return false;
		}

		if( file.size > 10048576  ) {
			this.setState({
				error: {
					photo: 'Selected file is larger than 10MB',
				}
			});
			return false;
		}

		var pattern = /image-*/;
		if (!file.type.match(pattern)) {
			this.setState({
				error: {
					photo: 'Unsupported file type. Please select a JPG or PNG.',
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
			console.log('response');
			console.log(response);
			return response.json();
		}).then(body => {
			console.log('body response');
			console.log(body);
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
					featured_media: body.featured_media,
					working: false
				});
			}
		})
	}

	triggerPhotoUpload = () => {
		document.querySelector('#photo-upload').dispatchEvent(new Event('submit'))
	}

	_renderProfileImage() {
		if( this.state.featured_media !== false && this.state.featured_media.hasOwnProperty('sizes') ) {
			let img_url;

			if( this.state.featured_media.sizes.hasOwnProperty('square') ) {
				img_url = this.state.featured_media.sizes.square.file;
			} else {
				img_url = this.state.featured_media.file;
			}

			return(
				<>
					<div
						className={profileStyles.profileAvatar}>
						<label>
						<form
							id="photo-upload"
							action="https://gwpadmin.codewrangler.io/api/gwp/v1/upload-profile-photo"
							onSubmit={ (e) => this.uploadPhotoSubmit(e) }
							method="post"
							encType="multipart/form-data">
							<input onChange={this.triggerPhotoUpload} name="image_file" type="file" accept="image/jpeg,image/png" />
							<img className={profileStyles.user} alt="" src={img_url} />
							<div className={profileStyles.editPhoto}>
								<img alt="" src="/images/edit-photo.svg" />
							</div>
						</form>
						</label>
					</div>
				</>
			);

		} else {
			return(
				<>
					<div
						className={profileStyles.defaultAvatar}>
						<label>
						<form
							id="photo-upload"
							action="https://gwpadmin.codewrangler.io/api/gwp/v1/upload-profile-photo"
							onSubmit={ (e) => this.uploadPhotoSubmit(e) }
							method="post"
							encType="multipart/form-data">
							<input onChange={this.triggerPhotoUpload} name="image_file" type="file" accept="image/jpeg,image/png" />
							<img className={profileStyles.user} alt="" src="/images/default-avatar.svg" />
							<div className={profileStyles.editPhoto}>
								<img alt="" src="/images/edit-photo.svg" />
							</div>
						</form>
						</label>
					</div>
				</>
			);
		}
	}

	_renderPanelClass() {
		if( this.state.first_name == '' ) {
			return `${profileStyles.form} blur`;
		} else {
			return `${profileStyles.form}`;
		}
	}

	render() {
		const {user} = this.props;
		const display_name = this.props.display_name;
		return(
			<>
				<Head>
					<title key="page-title">Edit Profile</title>
					<meta charset="utf-8"/>
					<link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
					<link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
					<link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
					<meta name="msapplication-TileImage" content="/favicon-270x270.png" />
					<meta name="msapplication-TileColor" content="#ffffff" />
					<link rel="manifest" href="/site.webmanifest" />
				</Head>
				<Header {...user} display_name={display_name} />
				<div className={`row ${profileStyles.pageContent}`}>
					<div className={`small-12 medium-4 xlarge-3 columns`}>
						<ProfileSidebar
							organization_id={this.props.organization_id}
							organization_email_mismatch={this.props.organization_email_mismatch}
							organization_email_verified={this.props.organization_email_verified}
						/>
					</div>
					<div className={`small-12 medium-8 xlarge-9 columns ${profileStyles.content}`}>
						<div className={this._renderPanelClass()}>
							<div className={`row ${profileStyles.row}`}>
								<div className={profileStyles.pageHeader}>
									{this._renderProfileImage()}
									<h3>{this.state.display_name}</h3>
								</div>
								<form method="POST">
									<div className="small-12 xlarge-6 columns">
										<label>First Name
											<input onChange={this.handleChange} name="first_name" value={this.state.first_name} type="text" placeholder="First Name" required />
										</label>
									</div>
									<div className="small-12 xlarge-6 columns">
										<label>Last Name
											<input onChange={this.handleChange} name="last_name" value={this.state.last_name} type="text" placeholder="Last Name" required />
										</label>
									</div>
									<div className="small-12 xlarge-6 columns">
										<label>Email
											<input onChange={this.handleChange} name="email_address" value={this.state.email_address} type="email" placeholder="Email Address" required />
										</label>
									</div>
									<div className="small-12 xlarge-6 columns">
										<label>Job Title
											<input onChange={this.handleChange} name="job_title" value={this.state.job_title} type="text" placeholder="Job Title" />
										</label>
									</div>
									<div className="small-12 columns text-center">
										<div className={`${profileStyles.save}`}>
											<input onClick={this._handleSave} type="submit" className="js-save button" value="Save Changes" />
										</div>
									</div>
								</form>
							</div>
						</div>
					</div>
				</div>
				<Footer/>
			</>
		);
	}
}

export default Profile;
