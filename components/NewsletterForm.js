import contactFormStyles from '../public/styles/modules/components/contactform.module.css';
import Link from 'next/link';

class NewsletterForm extends React.Component {

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
			working: false,
			confirmation: false,
		}

		this.handleChange = this.handleChange.bind(this);
	}

	componentDidMount() {

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

	_processSubmission = () => {
		event.preventDefault();
		var firstNameField,
				lastNameField,
				emailAddressField,
				url,
				json,
				button,
				component;

		component = this;

		firstNameField = document.querySelector('input[name="first_name"]');
		lastNameField = document.querySelector('input[name="last_name"]');
		emailAddressField = document.querySelector('input[name="email_address"]');

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

		button = document.querySelector('.js-submit');

		url = 'https://gwpadmin.codewrangler.io/api/gwp/v1/newsletter-subscription';
		json = JSON.stringify({
			"first_name": this.state.first_name,
			"last_name": this.state.last_name,
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
					first_name: '',
					last_name: '',
					email_address: '',
					working: false,
					confirmation: 'Your request has been sent.',
				},
				() => {
					// Redirect to profile
					//Router.push('/dashboard')
				});

			}, 1000 );
		});
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

					<div className={`row ${contactFormStyles.signin}`}>
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

		return(
			<>
			<div className={contactFormStyles.wrap}>
				<div className={`${contactFormStyles.contact}`}>
					<div className={`${contactFormStyles.form}`}>
						<div className={`row ${contactFormStyles.row}`}>
							<div className="small-12 columns">
								{this._renderForm()}
							</div>
						</div>
					</div>

				</div>
			</div>
			</>
		);
	}

}

export default NewsletterForm;
