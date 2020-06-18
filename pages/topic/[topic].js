import React from 'react';
import fetch from 'isomorphic-unfetch';
import Router from 'next/router';
import Head from 'next/head';
import Link from 'next/link';
import DatePicker from "react-datepicker";
import subDays from "date-fns/subDays";
import addDays from "date-fns/addDays";
import {decodeHTML} from 'entities'
import WordpressService from '../../services/wordpress'
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import Breadcrumbs from '../../components/Breadcrumbs';
import WhitePaperCard from '../../components/WhitePaperCard';
import topicStyles from '../../public/styles/modules/topic.module.css';

class Topic extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			whitepapers: [],
			filter_open: false,
			selected_topics: [],
			selected_tags: [],
			selected_agencies: [],
			selected_format: '',
			start_date: '',
			end_date: '',
			search_term: '',
			sort_by: 'relevance',
			per_page: 15,
			reached_end: false,
			show_ad: false,
			working: false,
		}

		this.handleChange = this.handleChange.bind(this);
	}

	static async getInitialProps(ctx) {

		const wordpress = new WordpressService
		const query = ctx;
		const topic = await wordpress.fetchTopic(ctx.query.topic)
		let items = 15;
		let sort_by = 'relevance';
		let offset = 0;
		let selected_topics = [topic.id];
		let selected_tags = [];
		let selected_agencies = [];
		let format = '';
		let search = ''
		let start_date = ''
		let end_date = ''

		//selected_topics = Array.prototype.map.call(selected_topics, s => s.term_id).toString();

		const whitepapers = await wordpress.fetchWhitepapers(items,offset,selected_topics,selected_tags,format,selected_agencies,search,start_date,end_date,sort_by);
		const topics = await wordpress.fetchTopics();
		const tags = await wordpress.fetchTags();
		const formats = await wordpress.fetchFormats();
		const agencies = await wordpress.fetchAgencies('');
		return {
			topic,
			whitepapers,
			topics,
			tags,
			formats,
			agencies
		}
	}

	async componentDidMount() {
		const {topic} = this.props;
		this.setState(state => ({
			selected_topics: [topic.id],
			whitepapers: this.props.whitepapers
		}));

		// if( process.browser ) {
		//
		// 	window.broadstreet = window.broadstreet || { run: [] };
		// 	window.broadstreet.run.push(function() {
		// 		window.broadstreet.refreshAll();
		// 	});
		//
		// } else {
		// 	this.setState(state => ({
		// 		whitepapers: this.props.whitepapers
		// 	}));
		// }

		(function matchHeight() {
			setTimeout( function(e) {
				var getDivs = document.getElementsByClassName('match-height');
				var arrayLength = getDivs.length;
				var heights = [];
				for (var i = 0; i < arrayLength; i++) {
					heights.push(getDivs[i].offsetHeight);
				}

				function getHighest() {
					return Math.max(...heights);
				}

				var tallest = getHighest();

				for(var i = 0; i < getDivs.length; i++) {
						getDivs[i].style.minHeight = tallest + "px";
				}
			}, 750);
		})();
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

	async _loadMore() {
		this.setState({
			working: true
		});
		const wordpress = new WordpressService
		let items = this.state.per_page;
		let sort_by = this.state.sort_by;
		let offset = this.state.whitepapers.length;
		let topics = this.state.selected_topics;
		let tags = this.state.selected_tags;
		let agencies = this.state.selected_tags;
		let format = this.state.selected_format;
		let search = this.state.search_term;
		let start_date = this.state.start_date;
		let end_date = this.state.end_date;

		topics = Array.prototype.map.call(topics, s => s.term_id).toString();
		tags = Array.prototype.map.call(tags, s => s.term_id).toString();
		agencies = Array.prototype.map.call(agencies, s => s.term_id).toString();

		const whitepapers = await wordpress.fetchWhitepapers(items,offset,topics,tags,format,agencies,search,start_date,end_date,sort_by);

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

	async handleChange(event) {
		let name = event.target.getAttribute('name');
		if( name == 'select_topic' ) {
			let topic_id = event.target.value;
			if( topic_id == 0 ) {
				return;
			}

			let topic_r = this.state.selected_topics;

			if( this.state.selected_topics.length >= 5 ) {
				return;
			}

			let topic = this.props.topics.find(element => element.term_id == topic_id);
			let index = topic_r.findIndex(term_id => term_id == topic_id);
		  if (index === -1) {
				topic_r.push(topic.term_id);
				this.setState({
					'selected_topics': topic_r
				});
			}

			let select = document.querySelector('select[name="select_topic"]');
			select.selectedIndex = 0;

		} else if( name == 'select_tag' ) {
			let tag_id = event.target.value;
			if( tag_id == 0 ) {
				return;
			}

			let tag_r = this.state.selected_tags;

			if( this.state.selected_tags.length >= 5 ) {
				return;
			}

			let tag = this.props.tags.find(element => element.term_id == tag_id);

			let index = tag_r.findIndex(term_id => term_id == tag_id);
		  if (index === -1) {
				tag_r.push(tag.term_id);
				this.setState({
					'selected_tags': tag_r
				});
			}

			let select = document.querySelector('select[name="select_tag"]');
			select.selectedIndex = 0;

		} else if( name == 'select_agency' ) {
			let agency_id = event.target.value;
			if( agency_id == 0 ) {
				return;
			}

			let agency_r = this.state.selected_agencies;

			if( this.state.selected_agencies.length >= 5 ) {
				return;
			}

			let agency = this.props.agencies.find(element => element.term_id == agency_id);
			let index = agency_r.findIndex(term_id => term_id == agency_id);
		  if (index === -1) {
				agency_r.push(agency.term_id);
				this.setState({
					'selected_agencies': agency_r
				});
			}

			let select = document.querySelector('select[name="select_agency"]');
			select.selectedIndex = 0;

		} else if( name == 'select_format' ) {
			let format_id = event.target.value;
			if( format_id == 0 || format_id == '0' ) {
				this.setState({
					'selected_format': ''
				});
			} else {
				this.setState({
					'selected_format': format_id
				});
			}

		} else if( name == 'sort_by' ) {

			this.setState({
				[name]: event.target.value
			},
			() => {
				this._fetchWhitepapers();
			});

		} else if( name == 'per_page' ) {

			this.setState({
				[name]: event.target.value
			},
			() => {
				this._fetchWhitepapers();
			});

		} else {
			this.setState({
				[name]: event.target.value
			},
			() => {

			});
		}
	}

	removeTopic = (id) => {
		let selected_topics = this.state.selected_topics;
		let index = selected_topics.findIndex(topic => topic == id);
		if (index !== -1) {
			selected_topics.splice(index, 1)
			this.setState({
				'selected_topics': selected_topics
			});
		}
	}

	removeTag = (id) => {
		let selected_tags = this.state.selected_tags;
		let index = selected_tags.findIndex(tag => tag == id);
		if (index !== -1) {
			selected_tags.splice(index, 1)
			this.setState({
				'selected_tags': selected_tags
			});
		}
	}

	removeAgency = (id) => {
		let selected_agencies = this.state.selected_agencies;
		let index = selected_agencies.findIndex(agency => agency == id);
		if (index !== -1) {
			selected_agencies.splice(index, 1)
			this.setState({
				'selected_agencies': selected_agencies
			});
		}
	}

	_processSearch = () => {
		this.setState({
			show_ad: false
		});

		this._fetchWhitepapers();
	}

	async _fetchWhitepapers() {

		this.setState({
			working: true
		});

		const wordpress = new WordpressService
		let items = this.state.per_page;
		let sort_by = this.state.sort_by;
		let offset = 0;
		let topics = this.state.selected_topics;
		let tags = this.state.selected_tags;
		let agencies = this.state.selected_tags;
		let format = this.state.selected_format;
		let search = this.state.search_term;
		let start_date = this.state.start_date;
		let end_date = this.state.end_date;


		if( start_date ) {
			start_date = new Date(start_date).getTime() / 1000;
		}

		if( end_date ) {
			end_date = new Date(end_date).getTime() / 1000;
		}

		topics = Array.prototype.map.call(topics, s => s.term_id).toString();
		tags = Array.prototype.map.call(tags, s => s.term_id).toString();
		agencies = Array.prototype.map.call(agencies, s => s.term_id).toString();

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
			sort_by
		);

		if( whitepapers.length < items ) {
			this.setState({
				reached_end: true,
			})
		}

		this.setState({
			whitepapers: [...whitepapers],
			working: false
		})
	}

	setDate = (type,date) => {
		if( type == 'start' ) {
			this.setState({
				start_date: date
			});
		} else if ( type == 'end' ) {
			this.setState({
				end_date: date
			});
		}
	}

	_toggleFilterPanel = () => {
		this.setState(state => ({
			filter_open: !state.filter_open
		}));
	}

	_clearFilters = () => {
		this.setState({
			selected_topics: [],
			selected_tags: [],
			selected_agencies: [],
			selected_format: '',
			start_date: '',
			end_date: '',
			reached_end: false,
		},
		() => {
			this._fetchWhitepapers();
		});
	}

	_saveSearch = () => {
		event.preventDefault();
		let button,
				component,
				json,
				url,
				login;

		button = document.querySelector('.js-save-search');
		component = this;

		if( this.state.search_term == '' ) {
			this.setState({
				error: {
					save_search: 'You must include a search term.',
				}
			});

			return false;
		}

		const token = this.props.user.access_token;

		if( !token ) {
			return false;
		}

		url = 'https://gwpadmin.codewrangler.io/api/gwp/v1/save-search';
		json = JSON.stringify({
			"search_term": this.state.search_term,
			"selected_topics": this.state.selected_topics,
			"selected_tags": this.state.selected_tags,
			"selected_agencies": this.state.selected_agencies,
			"selected_format": this.state.selected_format,
			"start_date": this.state.start_date,
			"end_date": this.state.end_date,
			"access_token": token
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
					working: false,
					error: false
				});

			}, 1000 );
		});
	}

	_renderLoadMoreClass = () => {
		if( this.state.reached_end == true ) {
			return `${topicStyles.nav} hide`;
		} else {
			return `${topicStyles.nav}`
		}
	}

	_getTaxonomyName = (term_type, term_id) => {
		let term = this.props[term_type].find(element => element.term_id == term_id);
		return decodeHTML(term.name);
	}

	_renderSelectedTopics = () => {
		const {selected_topics} = this.state;
		if( selected_topics.length < 1 ) {
			return null;
		} else {
			return(
				<>
				{selected_topics.map(term_id =>
					<div
						key={term_id}
						className={topicStyles.selectedTopic}>
						{this._getTaxonomyName('topics', term_id)}
						<span
							onClick={() => {
								this.removeTopic(term_id);
								// this.setState(state => ({
								// 	// organization_id: '',
								// 	// organization_name: '',
								// }));
							}}
							className={topicStyles.close}
						>
							<img src="/images/close-blue.svg" alt="" />
						</span>
					</div>
				)}
				</>
			);
		}
	}

	_renderSelectedTags = () => {
		const {selected_tags} = this.state;
		if( selected_tags.length < 1 ) {
			return null;
		} else {
			return(
				<>
				{selected_tags.map(term_id =>
					<div
						key={term_id}
						className={topicStyles.selectedTag}>
						{this._getTaxonomyName('tags', term_id)}
						<span
							onClick={() => {
								this.removeTag(term_id);
								// this.setState(state => ({
								// 	// organization_id: '',
								// 	// organization_name: '',
								// }));
							}}
							className={topicStyles.close}
						>
							<img src="/images/close-blue.svg" alt="" />
						</span>
					</div>
				)}
				</>
			);
		}
	}

	_renderSelectedAgencies = () => {
		const {selected_agencies} = this.state;
		if( selected_agencies.length < 1 ) {
			return null;
		} else {
			return(
				<>
				{selected_agencies.map(term_id =>
					<div
						key={term_id}
						className={topicStyles.selectedAgency}>
						{this._getTaxonomyName('agencies', term_id)}
						<span
							onClick={() => {
								this.removeAgency(term_id);
								// this.setState(state => ({
								// 	// organization_id: '',
								// 	// organization_name: '',
								// }));
							}}
							className={topicStyles.close}
						>
							<img src="/images/close-blue.svg" alt="" />
						</span>
					</div>
				)}
				</>
			);
		}
	}

	_renderActiveFilters = () => {
		let count = 0;
		if( this.state.selected_topics.length > 0 ) {
			count++;
		}
		if( this.state.selected_tags.length > 0 ) {
			count++;
		}
		if( this.state.selected_agencies.length > 0 ) {
			count++;
		}
		if( this.state.selected_format !== '' ) {
			count++;
		}

		if( count == 0 ) {
			return null;
		} else {
			return <span className={topicStyles.activeFilter}>
				{count}
			</span>
		}
	}

	_renderNoResults = () => {
		const {whitepapers} = this.state;
		if( this.state.whitepapers.length < 1 ) {
			return <div className={topicStyles.noResults}><h3 className="text-center">No results</h3></div>
		} else {
			return null;
		}
	}

	_renderAdRow = () => {
		if( this.state.show_ad ) {
			return(
				<div className="row">
					<broadstreet-zone zone-id="80367"></broadstreet-zone>
				</div>
			)
		} else {
			return null;
		}
	}

	_renderSaveSearchButton = () => {
		const {user} = this.props;
		if( user ) {
			return <button onClick={() => { this._saveSearch() }} className={`js-save-search button ${topicStyles.saveSearchButton}`}>Save Search</button>
		} else {
			return null;
		}
	}

	_renderFilterPanel = () => {
		const {topics} = this.props;
		const {tags} = this.props;
		const {formats} = this.props;
		const {agencies} = this.props;
		if( this.state.filter_open == true ) {
			return(
				<section className={`clearfix ${topicStyles.filterPanel}`}>
					<header>
						<h5>Search Filter</h5>
						<div
							onClick={() => { this._clearFilters() }}
							className={`${topicStyles.clearFilters}`}>
							<div>
								<img src="/images/trash.svg" alt="" />
								<span>Clear filters</span>
							</div>
						</div>
					</header>
					<div className={`small-up-1 medium-up-2`}>
						<div className="column column-block">
							<div className={topicStyles.topics}>
								<label>Topics
									<select onChange={this.handleChange} name="select_topic">
										<option value="0">Select Interests</option>
										{topics.map(topic =>
											<option key={topic.term_id} value={topic.term_id}>{decodeHTML(topic.name)}</option>
										)}
									</select>
								</label>
								{this._renderSelectedTopics()}
							</div>
						</div>

						<div className="column column-block">
							<div className={topicStyles.tags}>
								<label>Tags
									<select onChange={this.handleChange} name="select_tag">
										<option value="0">Select Tags</option>
										{tags.map(tag =>
											<option key={tag.term_id} value={tag.term_id}>{decodeHTML(tag.name)}</option>
										)}
									</select>
								</label>
								{this._renderSelectedTags()}
							</div>
						</div>

						<div className="column column-block">
							<div className={`row collapse ${topicStyles.dateRow}`}>
								<div className="small-12 medium-6 columns">
									<label>Date Range
										<div className={topicStyles.dateBlock}>
											<DatePicker
												selectsStart
												startDate={this.state.start_date}
												endDate={this.state.end_date}
												placeholderText="Start Date"
												selected={this.state.start_date}
												//onChange={this.setPublicationDate}
												onChange={date => {
													this.setDate('start', date)
												}}
												minDate={subDays(new Date(), 730)}
												maxDate={addDays(new Date(), 0)}
											/>
											<span className={topicStyles.cal}>
												<img src="/images/calendar.svg" />
											</span>
										</div>
									</label>
								</div>

								<div className="small-12 medium-6 columns">
									<label><span className={topicStyles.hiddenLabel}>Date Range</span>
										<div className={topicStyles.dateBlock}>
											<DatePicker
												placeholderText="End Date"
												selectsEnd
												startDate={this.state.start_date}
												endDate={this.state.end_date}
												minDate={this.state.start_date}
												maxDate={addDays(new Date(), 0)}
												selected={this.state.end_date}
												//onChange={this.setPublicationDate}
												onChange={date => {
													this.setDate('end', date)
												}}
											/>
											<span className={topicStyles.cal}>
												<img src="/images/calendar.svg" />
											</span>
										</div>
									</label>
								</div>
							</div>

						</div>

						<div className="column column-block">
							<label>Format
								<select onChange={this.handleChange} name="select_format">
									<option value="0">All</option>
									{formats.map(format =>
										<option key={format.term_id} value={format.term_id}>{format.name}</option>
									)}
								</select>
							</label>
						</div>

						<div className="column column-block">
							<div className={topicStyles.agencies}>
								<label>Audience Focus
									<select onChange={this.handleChange} name="select_agency">
										<option value="0">Select Audience</option>
										{agencies.map(agency =>
											<option key={agency.term_id} value={agency.term_id}>{decodeHTML(agency.name)}</option>
										)}
									</select>
								</label>
								{this._renderSelectedAgencies()}
							</div>
						</div>

					</div>

					<div className="small-12 columns text-center">
						<div className={topicStyles.searchAction}>
							{this._renderSaveSearchButton()}
							<button
								onClick={() => { this._processSearch() }}
								className={`button ${topicStyles.searchButton}`}>Search
							</button>
						</div>
						{this._renderError('save_search')}
					</div>

				</section>
			);
		} else {
			return null;
		}
	}

	_renderError(field) {
		if( this.state.error ) {
			let flat = JSON.stringify(this.state.error);
			if( flat.includes('save_search') ) {
				if( field == 'save_search' ) {
					return <span className={`${topicStyles.errorText}`}>{this.state.error.save_search}</span>
				}
			}

		}
	}

	render() {
		const {user} = this.props;
		const display_name = this.props.display_name;
		const {whitepapers} = this.state;
		// console.log('state');
		// console.log(this.state);
		// console.log(whitepapers);
		const {topic} = this.props;
		//const title = 'Test';
		const title = decodeHTML(topic.title);
		return(
			<>
				<Head>
					<title key="page-title">{title}</title>
					<meta charset="utf-8"/>
					<link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
					<link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
					<link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
					<meta name="msapplication-TileImage" content="/favicon-270x270.png" />
					<meta name="msapplication-TileColor" content="#ffffff" />
					<link rel="manifest" href="/site.webmanifest" />
				</Head>
				<Header {...user} display_name={display_name} />
				<div className={`row ${topicStyles.pageHeader}`}>
					<div className={`row ${topicStyles.breadcrumbRow}`}>
						<div className="small-12 columns text-center">
							<Breadcrumbs
								base_path={'/find'}
								base_name={'Find'}
								name={title}
							/>
						</div>
					</div>
				</div>

				<div className={`row ${topicStyles.searchPanel}`}>
					<div className={`small-12 columns`}>
						<div className={`input-group ${topicStyles.search}`}>
							<span className={`input-group-label ${topicStyles.icon}`}><img src="/images/find-search.svg" /></span>
							<input className={`input-group-field ${topicStyles.searchField}`} placeholder="Search White Papers" type="search" name="search_term" value={this.state.search_term} onChange={this.handleChange}  />
							<div className="input-group-button">
								<button className={`button ${topicStyles.filterButton}`}
									onClick={() => { this._toggleFilterPanel() }}
									>
									<img src="/images/filter-icon.svg" />Filter
									{this._renderActiveFilters()}
								</button>
								<button
									onClick={() => { this._processSearch() }}
									className={`button ${topicStyles.searchButton}`}>Search
								</button>
							</div>
						</div>

						{this._renderFilterPanel()}
					</div>
				</div>

				<div className={`row ${topicStyles.orderPanel}`}>

					<div className={`small-12 columns text-right`}>
						<h4 className={topicStyles.topicTitle}>{title} content</h4>
						<label>Sort by
							<select onChange={this.handleChange} name="sort_by">
								<option value="relevance">Relevance</option>
								<option value="newest">Newest</option>
								<option value="oldest">Oldest</option>
								<option value="az">Title: A-Z</option>
								<option value="za">Title: Z-A</option>
							</select>
						</label>

						<label>Results per page
							<select onChange={this.handleChange} name="per_page">
								<option value="15">15</option>
								<option value="30">30</option>
								<option value="60">60</option>
							</select>
						</label>
					</div>

				</div>

				{this._renderAdRow()}

				<div className={`row small-up-1 medium-up-2 large-up-3`}>
					{this._renderNoResults()}
					{whitepapers.map(whitepaper =>
						<div key={whitepaper.ID} className={`column column-block`}>
							<WhitePaperCard
								id={whitepaper.ID}
								slug={whitepaper.slug}
								title={decodeHTML(whitepaper.title)}
								featured_media={whitepaper.featured_media}
								excerpt={decodeHTML(whitepaper.excerpt)}
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
						className={`button ${topicStyles.button}`}>Load More
					</button>
				</div>

				<Footer/>
			</>
		);
	}
}

export default Topic;
