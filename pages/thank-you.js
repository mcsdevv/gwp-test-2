import React from 'react';
import Link from 'next/link';
import Head from 'next/head'
import WordpressService from '../services/wordpress'
import {decodeHTML} from 'entities'
import Header from '../components/Header';
import Footer from '../components/Footer';
import thankYouStyles from '../public/styles/modules/thankyou.module.css';

class Promote extends React.Component {

	constructor(props) {
		super(props);
	}

	componentDidMount() {

	}

	render() {
		const display_name = this.props.display_name;
		const {user} = this.props;
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
				<div className={`row ${thankYouStyles.pageHeader} text-center`}>
					<div className="small-12 columns">
						<h1>Thank you for your submission!</h1>
						<img className={thankYouStyles.hr} src="/images/sep.svg" alt="" />
						<p>Your content is being reviewed by a member of our team and you will be notified once it is live. </p>
					</div>
				</div>
				<div className={`row ${thankYouStyles.pageContent}`}>
				<div className={`small-12 medium-6 columns ${thankYouStyles.text}`}>
					<h3>Promote Your Content</h3>
					<p>If you’d like to expand the reach of your content further, click the button below to learn about our promotional options, including:</p>
					<ul className="styledList">
						<li>Featured display ad placements on GovWhitePapers’ home page, search page and content pages</li>
						<li>Gated content option including lead delivery, plus special introductory bulk pricing</li>
						<li>Dedicated emails to your target audience</li>
						<li>Inclusion in GovEvents' weekly eNewsletter to 80K+ subscribers</li>
						<li>Display ad placements on GovEvents.com, our events-focused sister site</li>
						<li>Social media promotion across relevant audiences on LinkedIn, Twitter and Facebook</li>
						<li>Remove ads from your content pages</li>
					</ul>
					<Link href="/contact">
						<a className={`button ${thankYouStyles.button}`}>Learn More</a>
					</Link>
				</div>
					<div className={`small-12 medium-6 columns text-right ${thankYouStyles.image}`}>
						<img src="/images/promote-img.jpg" alt="" />
					</div>
				</div>
				<Footer/>
			</>
		);
	}
}

export default Promote;

export async function getStaticProps(ctx) {
	const wordpress = new WordpressService
	const page = await wordpress.fetchPage('promote');
	return {
		props: {
			page,
		}
	}
}
