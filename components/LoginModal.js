import loginModalStyles from '../public/styles/modules/components/loginmodal.module.css';
import Link from 'next/link';
import Cookies from 'js-cookie'

class LoginModal extends React.Component {

	constructor(props) {
		super(props);
		this.state = {
			email: '',
			pass: '',
			error: '',
			working: false,
		}

		this.handleChange = this.handleChange.bind(this);
	}

	handleChange(event) {
		let name = event.target.getAttribute('name');
		this.setState({
			[name]: event.target.value
		});
	}

	_handleEscape = (e) => {
		if (e.which == 27) {
			this.props.toggle();
		}
	}

	_handleClick = (e) => {
		e.preventDefault();
		if( e.target.hasAttribute('data-close-modal') ) {
			this.props.toggle();
		}
	}

	_forgotPassword = () => {
		this.props.toggle();
	}

	_processLogin = () => {
		let button,
				govButton,
				json,
				url,
				login,
				emailField,
				passField;

		emailField = document.querySelector('input[name="email"]');
		passField = document.querySelector('input[name="pass"]');
		if (!emailField.checkValidity()) {
			emailField.classList.add('invalid');
			return false;
		} else {
			emailField.classList.remove('invalid');
		}

		if (!passField.checkValidity()) {
			passField.classList.add('invalid');
			return false;
		} else {
			passField.classList.remove('invalid');
		}

		button = document.querySelector('.js-login');
		govButton = document.querySelector('.js-login-govevents');
		login = this;
		url = 'https://gwpadmin.codewrangler.io/api/gwp/v1/manual-user-login';
		json = JSON.stringify({
			"email": this.state.email,
			"pass": this.state.pass,
		});

		button.disabled = true;
		govButton.disabled = true;

		login.setState({
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
				govButton.disabled = false;
				let flat = JSON.stringify(data);

				if( flat.includes('error') ) {
					login.setState({
						error: data.message,
						working: false
					});

					return false;
				}

				Cookies.set('user', JSON.stringify(data));

				login.setState(
					() => ({
						error: '',
						working: false,
						email: '',
						pass: ''
					}),
					() => {
						login.props.toggle();
						window.location.reload();
					}
				);
			}, 1000 );
		});
	}

	_processGovEventsLogin = () => {
		let button,
				govButton,
				json,
				url,
				login,
				emailField,
				passField;

		emailField = document.querySelector('input[name="email"]');
		passField = document.querySelector('input[name="pass"]');
		if (!emailField.checkValidity()) {
			emailField.classList.add('invalid');
			return false;
		} else {
			emailField.classList.remove('invalid');
		}

		if (!passField.checkValidity()) {
			passField.classList.add('invalid');
			return false;
		} else {
			passField.classList.remove('invalid');
		}

		button = document.querySelector('.js-login');
		govButton = document.querySelector('.js-login-govevents');
		login = this;
		url = 'https://gwpadmin.codewrangler.io/api/gwp/v1/govevents-user-login';
		json = JSON.stringify({
			"email": this.state.email,
			"pass": this.state.pass,
		});

		button.disabled = true;
		govButton.disabled = true;
		login.setState({
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
			console.log(data);
			setTimeout( function(e) {
				button.disabled = false;
				govButton.disabled = false;
				let flat = JSON.stringify(data);

				if( flat.includes('error') ) {
					login.setState({
						error: data.message,
						working: false
					});

					return false;
				}

				Cookies.set('user', JSON.stringify(data));

				login.setState(
					() => ({
						error: '',
						working: false,
						email: '',
						pass: ''
					}),
					() => {
						login.props.toggle();
						window.location.reload();
					}
				);
			}, 1000 );
		});
	}

	componentDidUpdate() {
		const {open} = this.props;
		const {working} = this.state;
		let html = document.querySelector('html');
		if( open ) {
			window.addEventListener('keydown', this._handleEscape );
			window.addEventListener('click', this._handleClick );
			html.classList.add('active-modal');
		} else {
			window.removeEventListener('keydown', this._handleEscape );
			window.removeEventListener('click', this._handleClick );
			html.classList.remove('active-modal');
		}

		if( working ) {
			html.classList.add('working');
		} else {
			html.classList.remove('working');
		}

	}

	_renderModalClass = () => {
		const {open} = this.props;
		if( open ) {
			return `${loginModalStyles.wrap} ${loginModalStyles.open}`;
		} else {
			return `${loginModalStyles.wrap}`
		}
	}

	render() {
		const {email,pass,error} = this.state;
		return(
			<>
			<div className={this._renderModalClass()}>

				<div className={`row ${loginModalStyles.header}`}>
					<div className="small-6 columns">
						<img className={loginModalStyles.logo} src="/images/logo.svg" alt="" />
					</div>

					<div className="small-6 columns text-right">
						<button
							className={loginModalStyles.close}
							onClick={e => {
								this.props.toggle();
							}}
						>
							<img src="/images/close.svg" alt="" />
						</button>
					</div>
				</div>

				<div className={`${loginModalStyles.login}`}>
					<div className="row text-center">
						<div className="small-12 columns">
							<h2>Welcome</h2>
							<img className={loginModalStyles.hr} src="/images/sep.svg" alt="" />
							<p>Sign in to access GovWhitePapers.</p>
						</div>
					</div>

					<div className={`${loginModalStyles.form}`}>
						<div className="row">
							<div className="small-12 columns">
								<form>
									<label>Email Address
										<input type="email" name="email" value={this.state.email} onChange={this.handleChange} placeholder="Type your email" required />
									</label>
									<label>Password
										<input type="password" name="pass" onChange={this.handleChange} value={this.state.pass} placeholder="Type your password" required />
									</label>
									<div className={loginModalStyles.error}>
										<span>{this.state.error}</span>
									</div>
									<Link href="/password-reset">
										<a onClick={this._forgotPassword} className={loginModalStyles.forgot}>Forgot password?</a>
									</Link>

									<div className={`row ${loginModalStyles.signin}`}>
										<div className="small-12 columns text-center">
											<input onClick={this._processLogin} type="submit" className="js-login button" value="Log In" />
										</div>
									</div>

									<div className={`row ${loginModalStyles.signinGovEvents}`}>
										<div className="small-12 columns text-center">
											<button onClick={this._processGovEventsLogin} type="submit" className="js-login-govevents button"><img src="/images/govevents-logo.png" alt="" /> <span>Log In with GovEvents</span></button>
										</div>
									</div>

								</form>
							</div>
						</div>
					</div>

					<div className={`row ${loginModalStyles.sep}`}>
						<div className="small-12 columns text-center">
							<img src="/images/continue-with.png" alt="" />
						</div>
					</div>

					<div className={`row ${loginModalStyles.socialBlock}`}>
						<div className="small-12 columns text-center">
							<ul>
								<li>
									<a data-close-modal className={loginModalStyles.google}>
										<img data-close-modal className={loginModalStyles.social} src="/images/login-google.png" alt="" />
									</a>
								</li>
								<li>
									<a data-close-modal className={loginModalStyles.fb}>
										<img data-close-modal className={loginModalStyles.social} src="/images/login-fb.png" alt="" />
									</a>
								</li>
								<li>
									<a data-close-modal className={loginModalStyles.linkedin}>
										<img data-close-modal className={loginModalStyles.social} src="/images/login-linkedin.png" alt="" />
									</a>
								</li>
							</ul>
						</div>
					</div>

					<div className={`row ${loginModalStyles.signUp}`}>
						<div className="small-12 columns text-center">
							<Link href="/register">
								<h5>
									<a data-close-modal>
										<span data-close-modal>Don't have an account?</span> Sign Up <img className={loginModalStyles.linkArrow} data-close-modal src="/images/right-arrow-blue.svg" alt="" />
									</a>
								</h5>
							</Link>
						</div>
					</div>

				</div>
			</div>
			</>
		);
	}

}

export default LoginModal;
