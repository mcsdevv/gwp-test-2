import React from 'react';
import WordpressService from '../services/wordpress'
import Link from 'next/link';
import Head from 'next/head'
import Header from '../components/Header';
import Footer from '../components/Footer';
import ProfileSidebar from '../components/ProfileSidebar';
import profileStyles from '../public/styles/modules/profile.module.css';
import SavedSearchCard from '../components/SavedSearchCard';

class SavedSearches extends React.Component {

	constructor(props) {
		super(props);
		this.state = {
			saved_searches: [],
			topics: [],
			tags: [],
			formats: [],
			agencies: [],
			working: false,
			no_results: false,
		}
	}

	async componentDidMount() {
		if( !this.props.user ) {
			Router.push('/login')
			return false;
		}

		const {user} = this.props;
		const wordpress = new WordpressService
		const {access_token} = this.props.user;
		const user_id = this.props.user.user.ID;
		const saved_searches = await wordpress.fetchSavedSearches( user_id, access_token );
		const topics = await wordpress.fetchTopics();
		const tags = await wordpress.fetchTags();
		const formats = await wordpress.fetchFormats();
		const agencies = await wordpress.fetchAgencies('');
		this.setState({
			saved_searches: saved_searches,
			topics: topics,
			tags: tags,
			formats: formats,
			agencies: agencies
		},
		() => {
			if( this.state.saved_searches.length < 1 ) {
				this.setState(state => ({
					no_results: true
				}));
			}
		});
	}

	componentDidUpdate() {
		//console.log(this.state);
	}

	_renderNoResults = () => {
		if( this.state.no_results) {
			return <div className={profileStyles.noResults}><h4 className="text-center">No saved searches.</h4></div>
		} else {
			return null;
		}
	}

	render() {
		const display_name = this.props.display_name;
		const {user} = this.props;
		const {saved_searches} = this.state;
		const {topics} = this.state;
		const {tags} = this.state;
		const {formats} = this.state;
		const {agencies} = this.state;

		return(
			<>
				<Head>
					<title key="page-title">Saved Searches</title>
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
					<div className={`small-12 medium-4 xlarge-3 columns`}>
						<ProfileSidebar
							organization_id={this.props.organization_id}
							organization_email_mismatch={this.props.organization_email_mismatch}
							organization_email_verified={this.props.organization_email_verified}
						/>
					</div>
					<div className={`small-12 medium-8 xlarge-9 columns ${profileStyles.content}`}>
						<div className={profileStyles.heading}>
							<h2>Saved Searches</h2>
						</div>
						<div className="small-up-1 clearfix">
							{this._renderNoResults()}
							{saved_searches.map((search,index) =>
								<div key={index} className={`column column-block`}>
									<SavedSearchCard
										access_token={this.props.user.access_token}
										id={search.ID}
										name={search.name}
										topics={topics}
										tags={tags}
										formats={formats}
										agencies={agencies}
										selected_topics={search.selected_topics}
										selected_tags={search.selected_tags}
										selected_format={search.selected_format}
										selected_agencies={search.selected_agencies}
										start_date={search.start_date}
										end_date={search.end_date}
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

export default SavedSearches;
