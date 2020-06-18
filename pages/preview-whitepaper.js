import {decodeHTML} from 'entities'
import Head from 'next/head'
import {HTML} from '../services/util'
import Router from 'next/router'
import { withRouter } from 'next/router'
import React, {Component} from 'react'
import WordpressService from '../services/wordpress'
import Link from 'next/link';
import Header from '../components/Header';
import Breadcrumbs from '../components/Breadcrumbs';
import Footer from '../components/Footer';
import ContactPublisherModal from '../components/ContactPublisherModal';
import ClaimContentModal from '../components/ClaimContentModal';
import previewWhitePaperStyles from '../public/styles/modules/previewwhitepaper.module.css';

class PreviewWhitePaper extends React.Component {

	constructor(props) {
		super(props);
		this.state = {
			contact_publisher_open: false,
			claim_content_open: false,
			working: false,
			is_favorite: false,
			show_content: false,
		}
	}

	static async getInitialProps(ctx) {
		const wordpress = new WordpressService
		const whitepaper = await wordpress.fetchWhitepaper(ctx.query.id)
		return {
			data: whitepaper
		}
	}

	_toggleModal = () => {
		this.setState(state => ({
			contact_publisher_open: !state.contact_publisher_open
		}));
	};

	_toggleClaimModal = () => {
		this.setState(state => ({
			claim_content_open: !state.claim_content_open
		}));
	};

	async componentDidMount() {
		const {data} = this.props;
		let html = document.querySelector('html');
		const {user} = this.props;
		if( !user ) {
			Router.push('/login');
		}

		if( user.user.id != data.user_id ) {
			Router.push('/');
		} else {
			this.setState(state => ({
				show_content: true
			}));
		}
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

	_handleEdit = () => {
		Router.push({
			pathname: '/edit',
			query: { id: this.props.data.id }
		})
	}

	_handlePublish = () => {
		event.preventDefault();
		let button,
				component,
				json,
				url,
				login;

		button = document.querySelector('.js-publish');
		component = this;

		const token = this.props.user.access_token;

		if( !token ) {
			return false;
		}

		url = 'https://gwpadmin.codewrangler.io/api/gwp/v1/publish-whitepaper';
		json = JSON.stringify({
			"ID": this.props.data.ID,
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

				Router.push('/thank-you')

			}, 1000 );
		});
	}

	_renderUserBlock = () => {
		const {user} = this.props;
		if( !user ) {
			return(
				<>
				<div className={previewWhitePaperStyles.userBlock}>
					<div className={previewWhitePaperStyles.gradient}>
					</div>
					<div className={previewWhitePaperStyles.content}>
						<div className="row">
							<div className="small-12 columns text-center">
								<h2>Join or Log In to Read More</h2>
								<img className={previewWhitePaperStyles.hr} src="/images/sep.svg" alt="" />
								<p>Create your free account or log in to continue reading.</p>
								<Link href="/register">
									<a className={`button ${previewWhitePaperStyles.button}`}>Sign Up</a>
								</Link>
							</div>
						</div>
					</div>
				</div>
				</>
			);
		} else {
			return(
				<div></div>
			);
		}
	}

	_downloadWhitepaper = (event) => {
		event.preventDefault();
		const {user} = this.props;
		if( user != undefined ) {
			const props = this.props;
			const button = event.target;
			const component = this;
			button.disabled = true;
			component.setState({
				working: true
			});
			setTimeout( function() {
				const {slug} = props.data;
				const {ID} = props.data;
				const {file_url} = props.data;
				const {content_link} = props.data;
				let anchor = window.document.createElement('a');
				window.document.body.appendChild(anchor);

				if( props.data.type == 'external' ) {
					anchor.setAttribute('href', content_link);
				} else {
					anchor.setAttribute('href', file_url);
					anchor.setAttribute('download', slug);
				}

				anchor.setAttribute('target', '_blank');
				anchor.click();
				window.document.body.removeChild(anchor);
				button.disabled = false;
				component.setState({
					working: false
				});
			}, 1000 );
		}
		//
	}

	_likePaper = () => {
		if( this.props.user != undefined ) {
			this.setState(state => ({
				is_favorite: !state.is_favorite
			}));
			let url,
					json;
			const {ID} = this.props.data;
			const token = this.props.user.access_token;

			if( !token ) {
				return false;
			}

			url = 'https://gwpadmin.codewrangler.io/api/gwp/v1/favorite-whitepaper';
			json = JSON.stringify({
				"ID": ID,
				"access_token": token,
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
				// setTimeout( function(e) {
				// 	let flat = JSON.stringify(data);
				//
				// 	if( flat.includes('error') ) {
				// 		return false;
				// 	}
				// }, 300 );
			});
		}
	}

	_renderClaimButton = () => {
		const {data} = this.props;
		const user_id = this.props.user ? this.props.user.user.ID : false;
		if( data.user_id == user_id ) {
			return null;
		} else {
			return(
				<button
					onClick={() => this._toggleClaimModal()}
					className={`button ${previewWhitePaperStyles.claim}`}>
					Is this your content?
				</button>
			);
		}
	}

	_renderImage() {
			if( this.props.data.featured_media == false ) {
				return <img src="/images/blog-card.jpg" />;
			} else {
				if( this.props.data.featured_media.sizes.hasOwnProperty('blog_card') ) {
					return <img src={this.props.data.featured_media.sizes.blog_card.file} />;
				} else {
					return <img src={this.props.data.featured_media.file} />;
				}
			}
	}

	_renderInfoTable() {
		const {data} = this.props;
		return(
			<table className={`stack ${previewWhitePaperStyles.info}`}>
				<tbody>
				<tr>
					<td className={previewWhitePaperStyles.label}>Topics:</td>
					<td>
					<ul>
						{this.props.data.topics.map((tag, index) =>
							<li key={index}>
								<a>
									{tag.name}
								</a>
							</li>
						)}
					</ul>
					</td>
				</tr>
				<tr>
					<td className={previewWhitePaperStyles.label}>Tags:</td>
					<td>
						<ul>
							{this.props.data.tags.map((tag, index) =>
								<li key={index}>
									<a>
										{tag.name}
									</a>
								</li>
							)}
						</ul>
					</td>
				</tr>
				<tr>
					<td className={previewWhitePaperStyles.label}>Website:</td>
					<td><a href="https://govwhitepapers.com">https://govwhitepapers.com</a></td>
				</tr>
				<tr>
					<td className={previewWhitePaperStyles.label}>Date:</td>
					<td>{data.publication_date_display}</td>
				</tr>
				<tr>
					<td className={previewWhitePaperStyles.label}>Copyright:</td>
					<td>&copy; {data.copyright_notice}</td>
				</tr>
				</tbody>
			</table>
		);
	}

	render() {
		const {data} = this.props;
		const {user} = this.props
		const {authors} = data.authors;
		const display_name = this.props.display_name;
		const title = decodeHTML(data.title);
		const description = decodeHTML(data.description);

		const seo_title = decodeHTML(data.seo_title);
		const open_graph_title = decodeHTML(data.open_graph_title);
		const twitter_title = decodeHTML(data.twitter_title);

		const seo_desc = decodeHTML(data.seo_desc);
		const open_graph_desc = decodeHTML(data.open_graph_desc);
		const twitter_desc = decodeHTML(data.twitter_desc);

		const open_graph_image_url = decodeHTML(data.open_graph_image_url);
		const twitter_image_url = decodeHTML(data.twitter_image_url);

		let like_icon;
		if( this.state.is_favorite == true ) {
			like_icon = <img src="/images/liked.png" alt="" />;
		} else {
			like_icon = <img src="/images/like.svg" alt="" />;
		}

		if( !this.state.show_content ) return null;
		return(
			<>
				<Head>
					<title key="whitepaper-title">{seo_title}</title>
					<meta charset="utf-8"/>
					<link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
					<link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
					<link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
					<meta name="msapplication-TileImage" content="/favicon-270x270.png" />
					<meta name="msapplication-TileColor" content="#ffffff" />
					<link rel="manifest" href="/site.webmanifest" />
					<meta property="og:title" content={seo_title} key="og-title" />
					<meta name="description" content={seo_desc} key="description" />
					<meta property="og:locale" content="en_US" key="og-locale" />
					<meta property="og:title" content={open_graph_title} key="og-title" />
					<meta property="og:description" content={open_graph_desc} key="og-description" />
					<meta property="og:url" content={this.props.data.permalink} key="og-url" />
					<meta property="og:site_name" content="GovWhitePapers" />

					<meta property="og:image" content={open_graph_image_url} key="og-image" />
					<meta property="og:image:secure_url" content={open_graph_image_url} key="og-image-secure" />
					<meta name="twitter:card" content="summary_large_image" key="twitter-card" />
					<meta name="twitter:description" content={twitter_desc} key="twitter-description" />
					<meta name="twitter:title" content={twitter_title} key="twitter-title" />
					<meta name="twitter:site" content="@GovEventsGroup" key="twitter-site" />
					<meta name="twitter:image" content={twitter_image_url} key="twitter-image" />
					<meta name="twitter:creator" content="@GovEventsGroup" key="twitter-creator" />
				</Head>
				<Header {...user} display_name={display_name} />
				<div className={`${previewWhitePaperStyles.pageContent}`}>
					{this._renderUserBlock()}
					<div className={`row ${previewWhitePaperStyles.breadcrumbRow}`}>
						<div className="small-12 columns text-center">
							<Breadcrumbs
								base_path={'/post'}
								base_name={'Post your content'}
								name={'Preview'}
							/>
						</div>
					</div>

					<div className="small-12 columns text-center">
						<div className={previewWhitePaperStyles.publishAction}>
							<button
								onClick={() => { this._handleEdit() }}
								className={`button ${previewWhitePaperStyles.editButton}`}>Edit</button>
							<button
								onClick={() => { this._handlePublish() }}
								className={`js-publish button ${previewWhitePaperStyles.publishButton}`}>Publish
							</button>
						</div>
					</div>

					<div className={`row ${previewWhitePaperStyles.content}`}>

						<div className="small-12 medium-7 xxlarge-8 columns">
							<div className={`${previewWhitePaperStyles.preview}`}>
								<h1>{title}</h1>
								<ul className={previewWhitePaperStyles.authors}>
									<li className={previewWhitePaperStyles.label}>Author(s):</li>
									{data.authors.map((author, index) =>
										<li key={index}>
											{author}
										</li>
									)}
								</ul>
								<HTML html={description}/>
							</div>
						</div>

						<div className="small-12 medium-5 xxlarge-4 columns">
							<div className={`${previewWhitePaperStyles.download}`}>
								<div className={`${previewWhitePaperStyles.image}`}>
									{this._renderImage()}
								</div>
								<button onClick={(event) => {this._downloadWhitepaper(event)}} className={`button ${previewWhitePaperStyles.downloadButton}`}>
									<img src="/images/download-icon.png" />Download
								</button>
								<button onClick={() => {this._likePaper()}} className={`clearfix button ${previewWhitePaperStyles.like}`}>
									{like_icon}
								</button>

								{this._renderInfoTable()}

								{this._renderClaimButton()}

								<button
									onClick={() => this._toggleModal()}
									className={`button ${previewWhitePaperStyles.contact}`}>
									Contact Publisher
								</button>
							</div>
						</div>
						<ContactPublisherModal
							open={this.state.contact_publisher_open}
							toggle={() => this._toggleModal()}
							whitepaper_id={data.id}
						/>
						<ClaimContentModal
							open={this.state.claim_content_open}
							toggle={() => this._toggleClaimModal()}
							whitepaper_id={data.id}
							whitepaper_title={data.title}
						/>
					</div>

				</div>
				<Footer />
			</>
		);
	}
}

export default withRouter(PreviewWhitePaper);
