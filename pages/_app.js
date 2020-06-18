import '../public/styles/fonts.css';
import '../public/styles/foundation.css';
import '../public/styles/global.css';
import '../public/styles/datepicker.css';
import '../public/styles/ads.css';
import Cookies from 'js-cookie'
import App from "next/app";
import WordpressService from '../services/wordpress'

class GWP extends App {
	constructor(props) {
		super(props);

		this.state = {
			user: this._fetchToken(),
			display_name: '',
			organization_id: false,
		}

		this.checkIE();
	}

	checkIE() {
		if( process.browser ) {
			var ua = window.navigator.userAgent;
			var isIE = /MSIE|Edge|Trident/.test(ua);

			if ( isIE ) {
				document.querySelector('#ie-killa').classList.add('show');
				document.querySelector('html').classList.add('ie-killa');
			}
		}
	}

	componentDidUpdate() {

	}

	async componentDidMount() {
		const access_token = this._fetchToken();
		if( access_token ) {
			const wordpress = new WordpressService
			const user = await wordpress.getUser(access_token.access_token);
			console.log('app user');
			console.log(user);
			this.setState(state => ({
				display_name: user.first_name + ' ' + user.last_name,
				organization_id: user.organization_id,
				organization_email_verified: user.organization_email_verified,
				organization_email_mismatch: user.organization_email_mismatch
			}));
		}
	}



	 _fetchToken() {
		let c = Cookies.get('user');
		if( c ) {
			let d = c.replace('path=/', '');
			const token = JSON.parse(d);
			return token;
		}

		// if (process.browser) {
		// 	const token = await window.localStorage.getItem('user');
		// 	return token;
		// } else {
		// 	return false;
		// }
	}

	render() {
		const { Component, pageProps } = this.props;
		return (
			<Component {...pageProps} {...this.state} />
		);
	}
}
// This default export is required in a new `pages/_app.js` file.
export default GWP;
