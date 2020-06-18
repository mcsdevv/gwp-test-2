import React from 'react';
import Header from '../components/Header';
import Head from 'next/head'
import {decodeHTML} from 'entities'
import WordpressService from '../services/wordpress'
import Footer from '../components/Footer';
import NewsletterForm from '../components/NewsletterForm';
import contactStyles from '../public/styles/modules/contact.module.css';

class Newsletter extends React.Component {

	constructor(props) {
		super(props);
	}

	componentDidMount() {

	}

	render() {
		const display_name = this.props.display_name;
		const {user} = this.props
		const {page} = this.props;
		const seo_title = decodeHTML(page.seo_title);
		const open_graph_title = decodeHTML(page.open_graph_title);
		const twitter_title = decodeHTML(page.twitter_title);

		const seo_desc = decodeHTML(page.seo_desc);
		const open_graph_desc = decodeHTML(page.open_graph_desc);
		const twitter_desc = decodeHTML(page.twitter_desc);

		const open_graph_image_url = decodeHTML(page.open_graph_image_url);
		const twitter_image_url = decodeHTML(page.twitter_image_url);
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
				<meta property="og:url" content={page.permalink} key="og-url" />
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
			<div className={`row ${contactStyles.pageHeader} text-center`}>
				<div className="small-12 columns">
					<h1>Newsletter Subscription</h1>
					<img className={contactStyles.hr} src="/images/sep.svg" alt="" />
				</div>
			</div>
			<div className={`row ${contactStyles.pageContent}`}>
				<div className="small-12 columns">
					<NewsletterForm />
				</div>
			</div>
			<Footer/>
			</>
		);
	}

}

export default Newsletter;

export async function getStaticProps(ctx) {
	const wordpress = new WordpressService
	const page = await wordpress.fetchPage('newsletter');
	return {
		props: {
			page
		}
	}
}
