import {decodeHTML} from 'entities'
import Head from 'next/head'
import {HTML} from '../../services/util'
import React, {Component} from 'react'
import WordpressService from '../../services/wordpress'
import Link from 'next/link';
import Header from '../../components/Header';
import Breadcrumbs from '../../components/Breadcrumbs';
import Footer from '../../components/Footer';
import ContactPublisherModal from '../../components/ContactPublisherModal';
import ClaimContentModal from '../../components/ClaimContentModal';
import whitePaperStyles from '../../public/styles/modules/whitepaper.module.css';

class WhitePaper extends React.Component {

	constructor(props) {
		super(props);
		this.state = {
			contact_publisher_open: false,
			claim_content_open: false,
			working: false,
			is_favorite: false,
		}
	}

	static async getInitialProps(ctx) {
		const wordpress = new WordpressService
		const whitepaper = await wordpress.fetchWhitepaper(ctx.query.whitepaper)
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
		let html = document.querySelector('html');
		const {user} = this.props;
		if( !user ) {
			html.classList.add('no-scroll');
		} else {
			html.classList.remove('no-scroll');
		}
		const id = this.props.data.id;
		const token = this.props.user ? this.props.user.access_token : false;
		const wordpress = new WordpressService
		const is_favorite = await wordpress.checkFavorite(id,token);
		this.setState(state => ({
			is_favorite: is_favorite
		}));
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

	_renderUserBlock = () => {
		const {user} = this.props;
		if( !user ) {
			return(
				<>
				<div className={whitePaperStyles.userBlock}>
					<div className={whitePaperStyles.gradient}>
					</div>
					<div className={whitePaperStyles.content}>
						<div className="row">
							<div className="small-12 columns text-center">
								<h2>Join or Log In to Read More</h2>
								<img className={whitePaperStyles.hr} src="/images/sep.svg" alt="" />
								<p>Create your free account or log in to continue reading.</p>
								<Link href="/register">
									<a className={`button ${whitePaperStyles.button}`}>Get Started</a>
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
					className={`button ${whitePaperStyles.claim}`}>
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
			<table className={`stack ${whitePaperStyles.info}`}>
				<tbody>
				<tr>
					<td className={whitePaperStyles.label}>Topics:</td>
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
					<td className={whitePaperStyles.label}>Tags:</td>
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
					<td className={whitePaperStyles.label}>Website:</td>
					<td><a href="https://govwhitepapers.com">https://govwhitepapers.com</a></td>
				</tr>
				<tr>
					<td className={whitePaperStyles.label}>Date:</td>
					<td>{data.publication_date_display}</td>
				</tr>
				<tr>
					<td className={whitePaperStyles.label}>Copyright:</td>
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
				<div className={`${whitePaperStyles.pageContent}`}>
					{this._renderUserBlock()}
					<div className={`row ${whitePaperStyles.breadcrumbRow}`}>
						<div className="small-12 columns text-center">
							<Breadcrumbs
								base_path={'/find'}
								base_name={'Whitepapers'}
								name={title}
							/>
						</div>
					</div>

					<div className={`row ${whitePaperStyles.content}`}>

						<div className="small-12 medium-7 xxlarge-8 columns">
							<div className={`${whitePaperStyles.preview}`}>
								<h1>{title}</h1>
								<ul className={whitePaperStyles.authors}>
									<li className={whitePaperStyles.label}>Author(s):</li>
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
							<div className={`${whitePaperStyles.download}`}>
								<div className={`${whitePaperStyles.image}`}>
									{this._renderImage()}
								</div>
								<button onClick={(event) => {this._downloadWhitepaper(event)}} className={`button ${whitePaperStyles.downloadButton}`}>
									<img src="/images/download-icon.png" />Download
								</button>
								<button onClick={() => {this._likePaper()}} className={`clearfix button ${whitePaperStyles.like}`}>
									{like_icon}
								</button>

								{this._renderInfoTable()}

								{this._renderClaimButton()}

								<button
									onClick={() => this._toggleModal()}
									className={`button ${whitePaperStyles.contact}`}>
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

export default WhitePaper;
