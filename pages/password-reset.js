import React from 'react';
import Header from '../components/Header';
import Head from 'next/head'
import Router from 'next/router';
import {decodeHTML} from 'entities'
import WordpressService from '../services/wordpress'
import Footer from '../components/Footer';
import passwordResetStyles from '../public/styles/modules/passwordreset.module.css';

class PasswordReset extends React.Component {

	constructor(props) {
		super(props);
		this.state = {
			email_address: '',
			working: false,
			confirmation: false,
			new_password: '',
			new_password_confirm: ''
		}

		this.handleChange = this.handleChange.bind(this);
	}

	componentDidMount() {

	}

	static async getInitialProps(ctx) {
		let token = false
		if( ctx.query.token ) {
			token = ctx.query.token;
		}
		return {
			token
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

	componentDidUpdate() {
		const {working} = this.state;
		let html = document.querySelector('html');

		if( working ) {
			html.classList.add('working');
		} else {
			html.classList.remove('working');
		}
	}

	_processSubmission = () => {
		event.preventDefault();
		var emailAddressField,
				url,
				json,
				button,
				component;

		component = this;

		emailAddressField = document.querySelector('input[name="email_address"]');

		if (!emailAddressField.checkValidity()) {
			emailAddressField.classList.add('invalid');
			return false;
		} else {
			emailAddressField.classList.remove('invalid');
		}

		button = document.querySelector('.js-submit');

		url = 'https://gwpadmin.codewrangler.io/api/gwp/v1/password-reset-request';
		json = JSON.stringify({
			"email_address": this.state.email_address,
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
					email_address: '',
					confirmation: 'Check your email to complete the process.',
					working: false,
				},
				() => {
					// Redirect to profile
					//Router.push('/dashboard')
				});

			}, 1000 );
		});
	}

	_processReset = () => {
		event.preventDefault();
		if( this.state.new_password.length < 12 ) {
			this.setState({
				error: {
					new_password: 'Minimum of 12 characters.',
				}
			});
			return;
		}

		if( this.state.new_password_confirm !== this.state.new_password ) {
			this.setState({
				error: {
					new_password_confirm: 'Passwords do not match.',
				}
			});
			return false;
		}

		var url,
				json,
				button,
				component;
		//
		component = this;
		button = document.querySelector('.js-reset');
		url = 'https://gwpadmin.codewrangler.io/api/gwp/v1/user-password-reset';
		json = JSON.stringify({
			"new_password": this.state.new_password,
			"new_password_confirm": this.state.new_password_confirm,
			"token": this.props.token,
		});
		//
		button.disabled = true;
		//
		component.setState({
			working: true
		});
		//
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
						error: {
							response: data.message
						},
						working: false
					});

					return false;
				}

				component.setState({
					email_address: '',
					confirmation: 'Your password has been reset.',
					working: false,
				},
				() => {
					setTimeout( function(e) {
						Router.push('/');
					}, 1000 );
				});

			}, 1000 );
		});
	}

	_renderError(field) {
		if( this.state.error ) {
			let flat = JSON.stringify(this.state.error);

			if( flat.includes('new_password') ) {
				if( field == 'new_password' ) {
					return <><span className={`${passwordResetStyles.errorText}`}>{this.state.error.new_password}</span></>
				}
			}

			if( flat.includes('new_password_confirm') ) {
				if( field == 'new_password_confirm' ) {
					return <><span className={`${passwordResetStyles.errorText}`}>{this.state.error.new_password_confirm}</span></>
				}
			}

			if( flat.includes('response') ) {
				if( field == 'response' ) {
					return <><p><span className={`${passwordResetStyles.errorText}`}>{this.state.error.response}</span></p></>
				}
			}

		}
	}

	_renderContent() {
		if( this.props.token == false ) {
			return this._renderForm();
		} else {
			return this._renderPasswordForm();
		}
	}

	_renderForm() {
		if( this.state.confirmation == false ) {
			return(
				<>
				<div className={`row ${passwordResetStyles.pageHeader} text-center`}>
					<div className="small-12 columns">
						<h1>Reset Your Password</h1>
						<img className={passwordResetStyles.hr} src="/images/sep.svg" alt="" />
					</div>
				</div>
				<div className={`row ${passwordResetStyles.pageContent}`}>
					<div className="small-12 columns">
						<form className={passwordResetStyles.form}>
							<div className={`input-group ${passwordResetStyles.reset}`}>
								<input className={`input-group-field ${passwordResetStyles.emailField}`} onChange={this.handleChange} name="email_address" value={this.state.email_address} type="email" placeholder="Email Address" required />
								<div className="input-group-button">
									<input onClick={this._processSubmission} type="submit" className={`js-submit button ${passwordResetStyles.searchButton}`} value="Send" />
								</div>
							</div>
						</form>
					</div>
				</div>
				</>
			);
		} else {
			return(
				<>
				<div className={`row ${passwordResetStyles.pageHeader} text-center`}>
					<div className="small-12 columns">
						<h1>Reset Your Password</h1>
						<img className={passwordResetStyles.hr} src="/images/sep.svg" alt="" />
						<p>Submit your email address below and we will send you a confirmation email to reset your password. </p>
					</div>
				</div>
				<div className={`row ${passwordResetStyles.pageContent}`}>
					<div className="small-12 columns">
						<div className={passwordResetStyles.form}><h5 className="text-center">{this.state.confirmation}</h5></div>
					</div>
				</div>
				</>
			);
		}
	}

	_renderPasswordForm() {
		if( this.state.confirmation == false ) {
			return(
				<>
				<div className={`row ${passwordResetStyles.pageHeader} text-center`}>
					<div className="small-12 columns">
						<h1>Reset Your Password</h1>
						<img className={passwordResetStyles.hr} src="/images/sep.svg" alt="" />
						<p>Set your new password using the form below.</p>
					</div>
				</div>
				<div className={`row ${passwordResetStyles.pageContent}`}>
					<div className="small-12 columns">
						<form className={passwordResetStyles.form}>
							<div className={`${passwordResetStyles.reset}`}>
								<label>New Password {this._renderError('new_password')}
								<span className={passwordResetStyles.subLabel}>
								<span className={passwordResetStyles.dot}>&middot;</span> minimum of 10 characters</span>
									<input onChange={this.handleChange} name="new_password" value={this.state.new_password} type="password" placeholder="Type your password" required />
								</label>

								<label>Confim New Password {this._renderError('new_password_confirm')}
									<input onChange={this.handleChange} name="new_password_confirm" value={this.state.new_password_confirm} type="password" placeholder="Verify your password" required />
								</label>
								<div className={`text-right ${passwordResetStyles.send}`}>
									{this._renderError('response')}
									<input onClick={this._processReset} type="submit" className="text-right js-reset button" value="Reset Password" />
								</div>

							</div>
						</form>
					</div>
				</div>
				</>
			);
		} else {
			return(
				<>
				<div className={`row ${passwordResetStyles.pageHeader} text-center`}>
					<div className="small-12 columns">
						<h1>Reset Your Password</h1>
						<img className={passwordResetStyles.hr} src="/images/sep.svg" alt="" />
						<p>Set your new password using the form below.</p>
					</div>
				</div>
				<div className={`row ${passwordResetStyles.pageContent}`}>
					<div className="small-12 columns">
						<div className={passwordResetStyles.form}><h5 className="text-center">{this.state.confirmation}</h5></div>
					</div>
				</div>
				</>
			);
		}
	}

	render() {
		const display_name = this.props.display_name;
		const {user} = this.props
		return(
			<>
			<Head>
				<title key="page-title">Reset Password</title>
				<meta charset="utf-8"/>
				<link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
				<link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
				<link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
				<meta name="msapplication-TileImage" content="/favicon-270x270.png" />
				<meta name="msapplication-TileColor" content="#ffffff" />
				<link rel="manifest" href="/site.webmanifest" />
			</Head>
			<Header {...user} display_name={display_name} />
				{this._renderContent()}
			<Footer/>
			</>
		);
	}

}

export default PasswordReset
