import React from 'react';
import Header from '../components/Header';
import Head from 'next/head'
import Router from 'next/router';
import {decodeHTML} from 'entities'
import WordpressService from '../services/wordpress'
import Footer from '../components/Footer';
import verifyOrganizationStyles from '../public/styles/modules/verifyorganization.module.css';

class PasswordReset extends React.Component {

	constructor(props) {
		super(props);
		this.state = {
			complete: false,
			error: false
			// working: false,
			// confirmation: false,
			// new_password: '',
			// new_password_confirm: ''
		}

	}

	componentDidMount() {
		console.log('token');
		console.log(this.props.token);
		if( this.props.token ) {
			this._verifyOrganization();
		}
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


	componentDidUpdate() {
	}

	_verifyOrganization = () => {
		let component,
				json,
				url;

		component = this;

		url = 'https://gwpadmin.codewrangler.io/api/gwp/v1/verify-organization';
		json = JSON.stringify({
			"token": this.props.token,
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

				if( flat.includes('error') ) {
					console.log(data);
					component.setState({
						error: data.message,
						complete: true
					});

					return false;
				}

				component.setState({
					error: false,
					complete: true
				});

			}, 1000 );
		});
	}

	_renderContent() {
		if( this.props.token == false ) {
			return(
				<div className={`row ${verifyOrganizationStyles.pageHeader} text-center`}>
					<div className="small-12 columns">
					<h1>Missing Token</h1>
					</div>
				</div>
			);
		} else {
			if( this.state.complete == true ) {
				if( this.state.error == false ) {
					return(
						<div className={`row ${verifyOrganizationStyles.pageHeader} text-center`}>
							<div className="small-12 columns">
							<h1>Successfully verified</h1>
							<img className={verifyOrganizationStyles.hr} src="/images/sep.svg" alt="" />
							<p>Your email has been verified and your affiliation with this organization has been approved.</p>
							</div>
						</div>
					);
				} else {
					if( this.state.error == 'Domain mismatch' ) {
						return(
							<>
							<div className={`row ${verifyOrganizationStyles.pageHeader} text-center`}>
								<div className="small-12 columns">
								<h1>Pending further verification</h1>
								<img className={verifyOrganizationStyles.hr} src="/images/sep.svg" alt="" />
								<p>Your email has been verified, however, your affiliation with this organization could not be automatically approved. A team admin will review and approve your inclusion within this organization in the next 24 to 48 hours.</p>
								<p>You may use the site as normal, however, you will not have access to organizational content until your account can be verified.</p>
								</div>
							</div>
							</>
						);
					}
				}
			} else {
				return(
					<>
					<div className={`row ${verifyOrganizationStyles.pageHeader} text-center`}>
						<div className="small-12 columns">
							<h1>Verifying your organization</h1>
							<img className={verifyOrganizationStyles.hr} src="/images/sep.svg" alt="" />
						</div>
					</div>
					<div className={verifyOrganizationStyles.loader}></div>
					</>
				);
			}
		}
	}

	render() {
		const display_name = this.props.display_name;
		const {user} = this.props;
		return(
			<>
			<Head>
				<title key="page-title">Verify Organization</title>
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
			<Footer fixed={true} />
			</>
		);
	}

}

export default PasswordReset
