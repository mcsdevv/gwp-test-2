import React from 'react';
import Link from 'next/link';
import Head from 'next/head'
import Router from 'next/router';
import WordpressService from '../services/wordpress'
import WhitePaperCard from '../components/WhitePaperCard';
import MemberCard from '../components/MemberCard';
import {decodeHTML} from 'entities'
import Header from '../components/Header';
import Footer from '../components/Footer';
import ProfileSidebar from '../components/ProfileSidebar';
import profileStyles from '../public/styles/modules/profile.module.css';

class Dashboard extends React.Component {

	constructor(props) {
		super(props);
		this.state = {
			active_tab: 1,
			whitepapers: [],
			no_results: false,
			members: [],
			organization: false,
			working: false,
			error: false,
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
		const user_id = '';
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
		let organization_id = this.props.organization_id;
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
				user_id,
				organization_id
			);
		const members = await wordpress.fetchOrganizationMembers(access_token);
		const organization = await wordpress.fetchOrganization(this.props.organization_id);
		this.setState({
			whitepapers: whitepapers,
			members: members,
			organization: organization
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
			return <div className={profileStyles.noResults}><h4 className="text-center">No active content.</h4></div>
		} else {
			return null;
		}
	}

	componentDidUpdate() {
		//console.log(this.state);
	}

	async _loadMore() {
		this.setState({
			working: true
		});
		const wordpress = new WordpressService
		const user_id = '';
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
		let organization_id = this.props.organization_id;
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
				user_id,
				organization_id
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

	_renderLoadMoreClass = () => {
		if( this.state.reached_end == true  || this.state.whitepapers.length < 4 ) {
			return `${profileStyles.nav} hide`;
		} else {
			return `${profileStyles.nav}`
		}
	}

	_renderTabClass = (tab) => {
		const {active_tab} = this.state;
		if( active_tab == tab  ) {
			return `${profileStyles.tab} ${profileStyles.open}`;
		} else {
			return `${profileStyles.tab}`
		}
	}

	_renderListClass = (tab) => {
		const {active_tab} = this.state;
		if( active_tab == tab  ) {
			return `${profileStyles.active}`;
		} else {
			return null;
		}
	}

	_toggleTab = (tab) => {
		var controls = document.querySelector('#controls');
		event.preventDefault();

		this.setState(state => ({
			active_tab: tab,
			error: false,
		}));

		controls.scrollIntoView({
			behavior: "smooth",
			block: "end",
			inline: "nearest"
		});
	};

	_renderOrganizationName() {
		if( this.state.organization ) {
			return this.state.organization.name;
		} else {
			return null;
		}
	}

	render() {
		const display_name = this.props.display_name;
		const {user} = this.props;
		const {whitepapers} = this.state;
		const {members} = this.state;
		return(
			<>
			<Head>
				<title key="page-title">Dashboard</title>
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

					<div>
						<h2>{this._renderOrganizationName()}</h2>
					</div>
					<p>Moving to a new organization?</p>
					<button
						onClick={() => {
							Router.push('/contact');
						}}
						className={`button ${profileStyles.button}`}>Change My Organization
					</button>

					<div id="controls" className={profileStyles.controls}>
						<ul>
							<li
								className={this._renderListClass(1)}
								onClick={() => {
									this._toggleTab(1)
								}}
								>
								<span>All Content</span>
							</li>
							<li
								className={this._renderListClass(2)}
								onClick={() => {
									this._toggleTab(2)
								}}
								>
								<span>Members</span>
							</li>
						</ul>
					</div>

					<div className={profileStyles.tabs}>

						<div className={this._renderTabClass(1)}>
							<div className={`${profileStyles.form}`}>
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

						<div className={this._renderTabClass(2)}>
							<div className={`${profileStyles.userContainer}`}>
							<div className={`small-12 columns ${profileStyles.userHeader}`}>
								<div className="small-6 columns">
									<span>Name</span>
								</div>
								<div className={`small-6 columns ${profileStyles.titleHeading}`}>
									<span>Title</span>
								</div>
							</div>
							<div className={`${profileStyles.userList}`}>
								{members.map(member =>
									<div key={member.ID} className={profileStyles.user}>
										<MemberCard
											id={member.ID}
											slug={member.first_name}
											first_name={member.first_name}
											last_name={member.last_name}
											job_title={member.job_title}
											featured_media={member.featured_media}
											//hide_image={true}
											//excerpt={decodeHTML(whitepaper.excerpt)}
										/>
									</div>
								)}
							</div>

						</div>
					</div>

					</div>

				</div>
			</div>
			<Footer/>
			</>
		);
	}
}

export default Dashboard;
