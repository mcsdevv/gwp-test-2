import React from 'react';
import Link from 'next/link';
import {decodeHTML} from 'entities'
import Head from 'next/head'
import {HTML} from '../services/util'
import WordpressService from '../services/wordpress'
import Header from '../components/Header';
import Footer from '../components/Footer';
import singleStyles from '../public/styles/modules/single.module.css';

class Page extends React.Component {

	constructor(props) {
		super(props);
	}

	static async getInitialProps(ctx) {
		console.log('page');
		console.log(ctx.query.page);
		const wordpress = new WordpressService
		const page = await wordpress.fetchPage(ctx.query.page)
		return {
			data: page
		}
	}

	componentDidMount() {
		console.log('mount');
		console.log(this.props);
	}

	render() {
		const display_name = this.props.display_name;
		const {data} = this.props;
		const {user} = this.props
		const title = decodeHTML(data.title)
		const content = decodeHTML(data.content)

		const seo_title = decodeHTML(data.seo_title);
		const open_graph_title = decodeHTML(data.open_graph_title);
		const twitter_title = decodeHTML(data.twitter_title);

		const seo_desc = decodeHTML(data.seo_desc);
		const open_graph_desc = decodeHTML(data.open_graph_desc);
		const twitter_desc = decodeHTML(data.twitter_desc);

		const open_graph_image_url = decodeHTML(data.open_graph_image_url);
		const twitter_image_url = decodeHTML(data.twitter_image_url);
		return(
			<>
				<Head>
					<title key="page-title">{seo_title}</title>
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
				<div className={`${singleStyles.pageContent}`}>
					<div className={`row ${singleStyles.pageHeader} text-center`}>
						<div className="small-12 columns">
							<h1>{title}</h1>
							<img className={singleStyles.hr} src="/images/sep.svg" alt="" />
						</div>
					</div>
					<div className={`row ${singleStyles.content}`}>
						<HTML html={content}/>
					</div>
				</div>
				<Footer />
			</>
		);
	}
}

export default Page;
