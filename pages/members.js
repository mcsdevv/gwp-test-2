import React from 'react';
import Link from 'next/link';
import Head from 'next/head'
import Header from '../components/Header';
import Footer from '../components/Footer';
import ProfileSidebar from '../components/ProfileSidebar';
import profileStyles from '../public/styles/modules/profile.module.css';

class Members extends React.Component {

	constructor(props) {
		super(props);
	}

	async componentDidMount() {
		if( !this.props.user ) {
			Router.push('/login')
			return false;
		}
	}

	render() {
		const display_name = this.props.display_name;
		const {user} = this.props;
		return(
			<>
				<Head>
					<title key="page-title">Members</title>
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
					<div className={`small-12 medium-4 columns`}>
						<ProfileSidebar
							organization_id={this.props.organization_id}
							organization_email_mismatch={this.props.organization_email_mismatch}
							organization_email_verified={this.props.organization_email_verified}
						/>
					</div>
					<div className={`small-12 medium-8 columns ${profileStyles.content}`}>
						<p>Members</p>
					</div>
				</div>
				<Footer/>
			</>
		);
	}
}

export default Members;
