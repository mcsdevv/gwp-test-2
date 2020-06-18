import React from 'react';
import WordpressService from '../services/wordpress'
import WhitePaperCard from '../components/WhitePaperCard';
import {decodeHTML} from 'entities'
import Link from 'next/link';
import Head from 'next/head'
import Header from '../components/Header';
import Footer from '../components/Footer';
import ProfileSidebar from '../components/ProfileSidebar';
import profileStyles from '../public/styles/modules/profile.module.css';

class Favorites extends React.Component {

	constructor(props) {
		super(props);
		this.state = {
			whitepapers: []
		}
	}

	async componentDidMount() {
		if( !this.props.user ) {
			Router.push('/login')
			return false;
		}
		const wordpress = new WordpressService
		const {access_token} = this.props.user;
		let items = 100;
		let offset = 0;
		const whitepapers = await wordpress.fetchFavorites(access_token, items, offset);
		this.setState({
			whitepapers: whitepapers
		},
		() => {
			if( this.state.whitepapers.length < 1 ) {
				this.setState(state => ({
					no_results: true
				}));
			}
		});
	}

	_renderNoResults = () => {
		if( this.state.no_results) {
			return <div className={profileStyles.noResults}><h4 className="text-center">No favorites added.</h4></div>
		} else {
			return null;
		}
	}

	render() {
		const display_name = this.props.display_name;
		const {user} = this.props;
		const {whitepapers} = this.state;
		return(
			<>
				<Head>
					<title key="page-title">Favorites</title>
					<meta charset="utf-8"/>
					<link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
					<link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
					<link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
					<meta name="msapplication-TileImage" content="/favicon-270x270.png" />
					<meta name="msapplication-TileColor" content="#ffffff" />
					<link rel="manifest" href="/site.webmanifest" />
				</Head>
				<Header {...user} display_name={display_name} />
				<div className={`row ${profileStyles.pageContent} ${profileStyles.favorites}`}>
					<div className={`small-12 medium-4 xlarge-3 columns`}>
						<ProfileSidebar
							organization_id={this.props.organization_id}
							organization_email_mismatch={this.props.organization_email_mismatch}
							organization_email_verified={this.props.organization_email_verified}
						/>
					</div>
					<div className={`small-12 medium-8 xlarge-9 columns ${profileStyles.content}`}>
						<div className={profileStyles.heading}>
							<h2>Saved Favorites</h2>
						</div>
						<div className="small-up-1 large-up-2 clearfix">
							{this._renderNoResults()}
							{whitepapers.map(whitepaper =>
								<div key={whitepaper.ID} className={`column column-block`}>
									<WhitePaperCard
										id={whitepaper.ID}
										slug={whitepaper.slug}
										title={decodeHTML(whitepaper.title)}
										featured_media={whitepaper.featured_media}
										hide_image={true}
										excerpt={decodeHTML(whitepaper.excerpt)}
										topics={whitepaper.topics}
									/>
								</div>
							)}
						</div>
					</div>
				</div>
				<Footer/>
			</>
		);
	}
}

export default Favorites;
