import ContactPublisherModalStyles from '../public/styles/modules/components/contactpublishermodalstyles.module.css';
import Link from 'next/link';

class ContactPublisherModal extends React.Component {

	constructor(props) {
		super(props);
		this.state = {
			first_name: '',
			last_name: '',
			email_address: '',
			phone_number: '',
			message: '',
			organization: '',
			message: '',
			confirmation: false,
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

	_processSubmission = () => {
		event.preventDefault();
		var firstNameField,
				lastNameField,
				emailAddressField,
				messageField,
				url,
				json,
				button,
				component;

		component = this;

		firstNameField = document.querySelector('input[name="first_name"]');
		lastNameField = document.querySelector('input[name="last_name"]');
		emailAddressField = document.querySelector('input[name="email_address"]');
		messageField = document.querySelector('textarea[name="message"]');

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

		if (!messageField.checkValidity()) {
			messageField.classList.add('invalid');
			return false;
		} else {
			messageField.classList.remove('invalid');
		}

		button = document.querySelector('.js-submit');

		url = 'https://gwpadmin.codewrangler.io/api/gwp/v1/publisher-contact';
		json = JSON.stringify({
			"first_name": this.state.first_name,
			"last_name": this.state.last_name,
			"email_address": this.state.email_address,
			"organization": this.state.organization,
			"phone_number": this.state.phone_number,
			"message": this.state.message,
			"whitepaper_id" : this.props.whitepaper_id,
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
					first_name: '',
					last_name: '',
					email_address: '',
					phone_number: '',
					organization: '',
					message: '',
					working: false,
					confirmation: 'Your message has been sent.',
				},
				() => {
					// Redirect to profile
					//Router.push('/dashboard')
				});

			}, 1000 );
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
			return `${ContactPublisherModalStyles.wrap} ${ContactPublisherModalStyles.open}`;
		} else {
			return `${ContactPublisherModalStyles.wrap}`
		}
	}

	_renderForm() {
		if( this.state.confirmation == false ) {
			return(
				<form>
					<label>First Name
						<input onChange={this.handleChange} name="first_name" value={this.state.first_name} type="text" placeholder="First Name" required />
					</label>
					<label>Last Name
						<input onChange={this.handleChange} name="last_name" value={this.state.last_name} type="text" placeholder="Last Name" required />
					</label>
					<label>Email
						<input onChange={this.handleChange} name="email_address" value={this.state.email_address} type="email" placeholder="Email Address" required />
					</label>
					<label>Phone
						<input onChange={this.handleChange} name="phone_number" value={this.state.phone_number} type="tel" placeholder="e.g. 323-555-0124" />
					</label>
					<label>Agency/Organization
						<input onChange={this.handleChange} name="organization" value={this.state.organization} type="text" placeholder="Organization name" required />
					</label>

					<label>Message
						<textarea
							onChange={this.handleChange}
							value={this.state.message}
							name="message"
							placeholder="Type your message..."
							rows="5">
						</textarea>
					</label>

					<div className={`row ${ContactPublisherModalStyles.signin}`}>
						<div className="small-12 columns text-center">
							<input onClick={this._processSubmission} type="submit" className="js-submit button" value="Send" />
						</div>
					</div>

				</form>
			);

		} else {
			return(
				<h5 className="text-center">{this.state.confirmation}</h5>
			);
		}
	}

	render() {
		const {email,pass,error} = this.state;
		return(
			<>
			<div className={this._renderModalClass()}>

				<div className={`row ${ContactPublisherModalStyles.header}`}>
					<div className="small-6 columns">
						<img className={ContactPublisherModalStyles.logo} src="/images/logo.svg" alt="" />
					</div>

					<div className="small-6 columns text-right">
						<button
							className={ContactPublisherModalStyles.close}
							onClick={e => {
								this.props.toggle();
							}}
						>
							<img src="/images/close.svg" alt="" />
						</button>
					</div>
				</div>
				<div className="text-center">
					<div className="small-12 columns">
						<h2>Contact Publisher</h2>
						<img className={ContactPublisherModalStyles.hr} src="/images/sep.svg" alt="" />
					</div>
				</div>
				<div className={`${ContactPublisherModalStyles.form}`}>
					<div className="row">
						<div className="small-12 columns">
							{this._renderForm()}
						</div>
					</div>
				</div>
			</div>
			</>
		);
	}

}

export default ContactPublisherModal;
