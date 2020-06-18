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

class MyContent extends React.Component {

	constructor(props) {
		super(props);
		this.state = {
			whitepapers: [],
			working: false,
			no_results: false,
			reached_end: false
		}
	}

	async componentDidMount() {
		if( !this.props.user ) {
			Router.push('/login')
			return false;
		}
		const wordpress = new WordpressService
		const {access_token} = this.props.user;
		const user_id = this.props.user.user.ID;
		let items = 4;
		let offset = 0;
		let topics = [];
		let tags = [];
		let format = '';
		let agencies = [];
		let search = [];
		let start_date = '';
		let end_date = '';
		let sort_by = 'relevance';
		const whitepapers = await wordpress.fetchWhitepapers(
				items,
				offset,
				topics,
				tags,
				format,
				agencies,
				search,
				start_date,
				end_date,
				sort_by,
				user_id
			);
		this.setState({
			whitepapers: this.state.whitepapers,
		},
		() => {
			if( this.state.whitepapers.length < 1 ) {
				this.setState(state => ({
					no_results: true
				}));
			}
		});
	}

	async _loadMore() {
		this.setState({
			working: true
		});
		const wordpress = new WordpressService
		const user_id = this.props.user.user.ID;
		let items = 4;
		let offset = this.state.whitepapers.length;
		let topics = [];
		let tags = [];
		let format = '';
		let agencies = [];
		let search = [];
		let start_date = '';
		let end_date = '';
		let sort_by = 'relevance';
		const whitepapers = await wordpress.fetchWhitepapers(
				items,
				offset,
				topics,
				tags,
				format,
				agencies,
				search,
				start_date,
				end_date,
				sort_by,
				user_id
			);

		if( whitepapers.length < items ) {
			this.setState({
				reached_end: true,
			})
		}

		this.setState({
			whitepapers: [...this.state.whitepapers, ...whitepapers],
			working: false
		})

	}

	_renderNoResults = () => {
		if( this.state.no_results) {
			return <div className={profileStyles.noResults}><h4 className="text-center">No published content.</h4></div>
		} else {
			return null;
		}
	}

	_renderLoadMoreClass = () => {
		if( this.state.reached_end == true  || this.state.whitepapers.length < 4 ) {
			return `${profileStyles.nav} hide`;
		} else {
			return `${profileStyles.nav}`
		}
	}

	render() {
		const display_name = this.props.display_name;
		const {user} = this.props;
		const {whitepapers} = this.state;
		return(
			<>
				<Head>
					<title key="page-title">My Content</title>
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
							<h2>My Content</h2>
						</div>
						<div className="small-up-1 large-up-2 clearfix">
							{this._renderNoResults()}
							{whitepapers.map(whitepaper =>
								<div key={whitepaper.ID} className={`column column-block`}>
									<WhitePaperCard
										hide_image={true}
										id={whitepaper.ID}
										slug={whitepaper.slug}
										title={decodeHTML(whitepaper.title)}
										featured_media={whitepaper.featured_media}
										excerpt={''}
										topics={whitepaper.topics}
										show_edit={true}
									/>
								</div>
							)}
						</div>

						<div className={this._renderLoadMoreClass()}>
							<button
								onClick={() => {
									this._loadMore()
								}}
								className={`button ${profileStyles.button}`}>Load More
							</button>
						</div>

					</div>
				</div>
				<Footer/>
			</>
		);
	}
}

export default MyContent;
