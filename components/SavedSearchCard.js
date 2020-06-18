import savedSearchCardStyles from '../public/styles/modules/components/savedsearchcard.module.css';
import Link from 'next/link';
import Router from 'next/router';
import DatePicker from "react-datepicker";
import { parseISO, format } from 'date-fns';
import subDays from "date-fns/subDays";
import addDays from "date-fns/addDays";
import {decodeHTML} from 'entities'

class SavedSearchCard extends React.Component {

	constructor(props) {
		super(props);
		this.state = {
			open: false,
			hide: false,
			id: this.props.id,
			selected_topics: this.props.selected_topics,
			selected_tags: this.props.selected_tags,
			selected_agencies: this.props.selected_agencies,
			selected_format: this.props.selected_format,
			start_date: this.processDate('start_date',this.props.start_date),
			end_date: this.processDate('end_date',this.props.end_date),
			search_term: this.props.search_term,
		}

		this.handleChange = this.handleChange.bind(this);
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
			let index = topic_r.findIndex(topic => topic == topic_id);
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
			let index = tag_r.findIndex(tag => tag == tag_id);
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
			let index = agency_r.findIndex(agency => agency == agency_id);
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

	_togglePanel = () => {
		this.setState(state => ({
			open: !state.open
		}));
	}

	_searchNow = () => {
		Router.push('/find?saved_search=' + this.props.id);
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
						className={savedSearchCardStyles.selectedTopic}>
						{this._getTaxonomyName('topics', term_id)}
						<span
							onClick={() => {
								this.removeTopic(term_id);
							}}
							className={savedSearchCardStyles.close}
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
						className={savedSearchCardStyles.selectedTag}>
						{this._getTaxonomyName('tags', term_id)}
						<span
							onClick={() => {
								this.removeTag(term_id);
							}}
							className={savedSearchCardStyles.close}
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
			return <span className={savedSearchCardStyles.activeFilter}>
				{count}
			</span>
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
						className={savedSearchCardStyles.selectedAgency}>
						{this._getTaxonomyName('agencies', term_id)}
						<span
							onClick={() => {
								this.removeAgency(term_id);
								// this.setState(state => ({
								// 	// organization_id: '',
								// 	// organization_name: '',
								// }));
							}}
							className={savedSearchCardStyles.close}
						>
							<img src="/images/close-blue.svg" alt="" />
						</span>
					</div>
				)}
				</>
			);
		}
	}

	processDate(type,date) {
		if( this.props[type] ) {
			return parseISO(date)
		} else {
			return '';
		}
	}

	_renderFilterPanel = () => {
		const {topics} = this.props;
		const {tags} = this.props;
		const {formats} = this.props;
		const {agencies} = this.props;
		const {start_date} = this.state;
		const {end_date} = this.state;
		if( this.state.open == true ) {
			return(
				<section className={`clearfix ${savedSearchCardStyles.filterPanel}`}>
				<button
					className={savedSearchCardStyles.closePanel}
					onClick={e => {
						this._togglePanel();
					}}
				>
					<img src="/images/close.svg" alt="" />
				</button>
					<div className={`small-up-1 xlarge-up-2`}>
						<div className="column column-block">
							<div className={savedSearchCardStyles.topics}>
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
							<div className={savedSearchCardStyles.tags}>
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
							<div className={`row collapse ${savedSearchCardStyles.dateRow}`}>
								<div className="small-12 xlarge-6 columns">
									<label>Date Range
										<div className={savedSearchCardStyles.dateBlock}>
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
											<span className={savedSearchCardStyles.cal}>
												<img src="/images/calendar.svg" />
											</span>
										</div>
									</label>
								</div>

								<div className="small-12 xlarge-6 columns">
									<label><span className={savedSearchCardStyles.hiddenLabel}>Date Range</span>
										<div className={savedSearchCardStyles.dateBlock}>
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
											<span className={savedSearchCardStyles.cal}>
												<img src="/images/calendar.svg" />
											</span>
										</div>
									</label>
								</div>
							</div>

						</div>

						<div className="column column-block">
							<label>Format
								<select value={this.state.selected_format} onChange={this.handleChange} name="select_format">
									<option value="0">All</option>
									{formats.map(format =>
										<option key={format.term_id} value={format.term_id}>{format.name}</option>
									)}
								</select>
							</label>
						</div>

						<div className="column column-block">
							<div className={savedSearchCardStyles.agencies}>
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

				</section>
			);
		} else {
			return null;
		}
	}

	_renderActionButtons = (id) => {
		if( this.state.open == true ) {
			return(
				<div className={savedSearchCardStyles.actions}>
					<button
						onClick={() => { this._deleteSavedSearch() }}
						className={`button ${savedSearchCardStyles.delete}`}>Delete</button>
					<button
					onClick={() => { this._saveSearch() }}
					className={`js-save-search button ${savedSearchCardStyles.saveChanges}`}>Save Changes</button>
				</div>
			);
		} else {
			return(
				<div className={savedSearchCardStyles.actions}>
					<button
						onClick={() => { this._togglePanel() }}
						className={`button ${savedSearchCardStyles.edit}`}>Edit</button>
					<button
					onClick={() => { this._searchNow() }}
					className={`button ${savedSearchCardStyles.searchNow}`}>Search Now</button>
				</div>
			);
		}
	}

	_renderCardClass = () => {
		if( this.state.hide == true ) {
			return `${savedSearchCardStyles.card} clearfix hide`;
		} else {
			return `${savedSearchCardStyles.card} clearfix`
		}
	}

	_deleteSavedSearch = () => {
		event.preventDefault();
		let button,
				component,
				json,
				url;

		component = this;

		const token = this.props.access_token;

		if( !token ) {
			return false;
		}

		url = 'https://gwpadmin.codewrangler.io/api/gwp/v1/delete-saved-search';
		json = JSON.stringify({
			"id": this.state.id,
			"access_token": token
		});

		fetch(url, {
			method: 'post',
			body: json,
			headers: {
				"Content-Type": "application/json"
			},
		}).then(function(response) {
			console.log(response);
			return response.json();
		}).then(function(data) {
			console.log(data);
			component.setState({
				hide: true,
			});
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

		const token = this.props.access_token;

		if( !token ) {
			return false;
		}

		url = 'https://gwpadmin.codewrangler.io/api/gwp/v1/edit-saved-search';
		json = JSON.stringify({
			"id": this.state.id,
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

	render() {

		return(
			<>
			<div
				className={this._renderCardClass()}>
				<div className={`${savedSearchCardStyles.control}`}>
					<div className={`small-12 medium-6 columns ${savedSearchCardStyles.block}`}>
						<h5
							onClick={() => { this._togglePanel() }}
						>Search "{this.props.name}"</h5>
					</div>
					<div className={`small-12 medium-6 columns ${savedSearchCardStyles.block}`}>
						{this._renderActionButtons(this.props.id)}
					</div>
				</div>
				{this._renderFilterPanel()}
			</div>
			</>
		);
	}

}

export default SavedSearchCard;
