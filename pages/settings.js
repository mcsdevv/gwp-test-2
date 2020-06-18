import React from 'react';
import WordpressService from '../services/wordpress'
import Link from 'next/link';
import Head from 'next/head'
import Header from '../components/Header';
import Footer from '../components/Footer';
import ProfileSidebar from '../components/ProfileSidebar';
import profileStyles from '../public/styles/modules/profile.module.css';

class Settings extends React.Component {

	constructor(props) {
		super(props);
		this.state = {
			current_password: '',
			new_password: '',
			unsubscribe_system_emails: false,
			working: false,
			error: false
		}

		this.handleChange = this.handleChange.bind(this);
	}

	async componentDidMount() {
		if( !this.props.user ) {
			Router.push('/login')
			return false;
		}
		const {user} = this.props;
		this.input = React.createRef();

		if( !this.props.user ) {
			let login = document.querySelector('.js-login');
			login.click();
			return false;
		}

		const access_token = this.props.user.access_token;
		if( !access_token ) {
			return false;
		}

		const wordpress = new WordpressService
		const u = await wordpress.getUser(access_token);
		this.setState(state => ({
			unsubscribe_system_emails: u.unsubscribe_system_emails,
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

	handleChange(event) {
		let name = event.target.getAttribute('name');
		this.setState({
			[name]: event.target.value
		},
		() => {

		});
	}

	_renderError(field) {
		if( this.state.error ) {
			let flat = JSON.stringify(this.state.error);
			if( flat.includes('current_password') ) {
				if( field == 'current_password' ) {
					return <span className={`${profileStyles.errorText}`}>{this.state.error.current_password}</span>
				}
			}

			if( flat.includes('new_password') ) {
				if( field == 'new_password' ) {
					return <span className={`${profileStyles.errorText}`}>{this.state.error.new_password}</span>
				}
			}

			if( flat.includes('Incorrect password') ) {
				if( field == 'current_password' ) {
					let response = 'Incorrect password.'
					return <span className={`${profileStyles.errorText}`}>{response}</span>
				}
			}

		}
	}

	_systemEmailsAction = () => {

		this.setState(
			() => ({
				unsubscribe_system_emails: !this.state.unsubscribe_system_emails
			}),
			() => {
				let component,
						json,
						url,
						login;

				component = this;

				component.setState({
					working: true
				});

				const access_token = this.props.user.access_token;

				url = 'https://gwpadmin.codewrangler.io/api/gwp/v1/user-settings';
				json = JSON.stringify({
					"unsubscribe_system_emails": this.state.unsubscribe_system_emails,
					"access_token": access_token
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
						let flat = JSON.stringify(data);
						component.setState({
							working: false,
						});

					}, 100 );
				});
			}
		);
	}

	_handleSave = () => {
		event.preventDefault();
		let button,
				component,
				json,
				url,
				login,
				newPasswordField,
				verifyNewPasswordField;

		button = document.querySelector('.js-save');
		component = this;
		button.disabled = true;

		component.setState({
			working: true
		});

		const access_token = this.props.user.access_token;

		if( this.state.current_password == '' ) {
			component.setState({
				error: {
					current_password: 'Enter your current password.',
				},
				working: false,
			});

			button.disabled = false;
			return false;
		}

		if( this.state.new_password.length < 10 ) {

			component.setState({
				error: {
					new_password: 'Must be at least 10 characters',
				},
				working: false,
			});

			button.disabled = false;
			return false;
		}

		url = 'https://gwpadmin.codewrangler.io/api/gwp/v1/user-settings';
		json = JSON.stringify({
			"current_password": this.state.current_password,
			"new_password": this.state.new_password,
			"access_token": access_token
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
			console.log(data);
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
					current_password: '',
					new_password: '',
					working: false
				});

			}, 1000 );
		});

	}

	render() {
		const display_name = this.props.display_name;
		const {user} = this.props;
		return(
			<>
				<Head>
					<title key="page-title">Settings</title>
					<meta charset="utf-8"/>
					<link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
					<link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
					<link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
					<meta name="msapplication-TileImage" content="/favicon-270x270.png" />
					<meta name="msapplication-TileColor" content="#ffffff" />
					<link rel="manifest" href="/site.webmanifest" />
				</Head>
				<Header {...user} display_name={display_name} />

				<div className={`row ${profileStyles.pageContent} ${profileStyles.settings}`}>
					<div className={`small-12 medium-4 xlarge-3 columns`}>
						<ProfileSidebar
							organization_id={this.props.organization_id}
							organization_email_mismatch={this.props.organization_email_mismatch}
							organization_email_verified={this.props.organization_email_verified}
						/>
					</div>
					<div className={`small-12 medium-8 xlarge-9 columns ${profileStyles.content}`}>
						<div className={profileStyles.heading}>
							<h2>Settings</h2>
						</div>
						<form method="POST" className={profileStyles.form}>
							<div className="small-12 columns">
								<label>Current Password {this._renderError('current_password')}
									<input onChange={this.handleChange} name="current_password" value={this.state.current_password} type="password" placeholder="Your current password" required />
								</label>
							</div>

							<div className="small-12 columns">
								<label>New Password {this._renderError('new_password')}
								<span className={profileStyles.subLabel}>
									<span className={profileStyles.dot}>&middot;</span> minimum of 10 characters</span>
									<input onChange={this.handleChange} name="new_password" value={this.state.new_password} type="password" placeholder="Your new password" required />
								</label>
							</div>

							<div className="small-12 columns text-center">
								<div className={`${profileStyles.save}`}>
									<input onClick={this._handleSave} type="submit" className="js-save button" value="Save Changes" />
								</div>
							</div>
						</form>

						<div className={`small-12 columns ${profileStyles.systemEmails}`}>
							<label className={profileStyles.label}> Unsubscribe from system emails
								<input
									type="checkbox"
									onClick={() => {
										this._systemEmailsAction()
									}}
									name="unsubscribe_system_emails"
									checked={this.state.unsubscribe_system_emails}
									value="1"
								/>
								<span className={profileStyles.checkmark}></span>
							</label>
						</div>

					</div>
				</div>
				<Footer/>
			</>
		);
	}
}

export default Settings;
