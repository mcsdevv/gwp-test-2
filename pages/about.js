import React from 'react';
import fetch from 'isomorphic-unfetch';
import Head from 'next/head'
import {decodeHTML} from 'entities'
import Link from 'next/link';
import WordpressService from '../services/wordpress'
import Header from '../components/Header';
import Footer from '../components/Footer';
import Stats from '../components/Stats';
import How from '../components/How';
import What from '../components/What';
import ActionFunnel from '../components/ActionFunnel';
import aboutStyles from '../public/styles/modules/about.module.css';

class About extends React.Component {

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
				<div className={`row ${aboutStyles.pageContent}`}>
					<div className={`small-12 medium-6 columns ${aboutStyles.text}`}>
						<h1>About Us</h1>
						<p>Learn more about our goal to make educational and thought leadership content easy to find and engaging for the government community.</p>
					</div>
					<div className={`small-12 medium-6 columns text-right ${aboutStyles.image}`}>
						<img src="/images/about-img.jpg" alt="" />
					</div>
				</div>
				<Stats
					whitepaper_count={this.props.stats.whitepaper_count}
					user_count={this.props.stats.user_count}
					years_active={this.props.stats.years_active}
				/>
				<div className={aboutStyles.ourStory}>
					<div className="row">
						<div className="small-12 columns text-center">
							<h2>Our Story</h2>
						</div>
					</div>
					<div className={`row ${aboutStyles.flex}`}>
						<div className={`small-12 medium-6 columns text-right ${aboutStyles.image}`}>
							<img src="/images/about-lincoln.jpg" alt="" />
						</div>
						<div className={`small-12 medium-6 columns ${aboutStyles.text}`}>
							<p>GovWhitePapers was designed as a central hub for government and supporting industry to find the information they need to understand the government market’s trends and offer solutions to its challenges. Our goal is to make finding educational and thought leadership content less tedious, allowing the government community to:</p>
							<ul className="styledList">
								<li>Learn how emerging technologies can be applied to their current challenges</li>
								<li>Read about best practices and successes within other agencies</li>
								<li>Stay up to date on the latest technologies, processes, and tactics being used in the government and commercial markets</li>
							</ul>
						</div>
					</div>
					<div className={`row ${aboutStyles.flex}`}>
						<div className={`small-12 medium-6 columns ${aboutStyles.text}`}>
							<p>With GovWhitePapers, we’ve done the hard work, locating relevant materials and providing detailed summaries to ensure you’ll get the information you're seeking. For content creators, GovWhitePapers allows you to add your materials, making them available to a wider government audience at no cost.</p>
							<p>Our journey started in 2010 with the launch of our sister site, GovEvents, which has since grown to over 100,000 members. We’re thrilled to expand our gathering place for the government community to now include a rich base of content in addition to thousands of events to help make government service easier.</p>
						</div>
						<div className={`small-12 medium-6 columns text-right ${aboutStyles.image}`}>
							<img src="/images/about-pentagon.jpg" alt="" />
						</div>
					</div>
				</div>
				<How />
				<What />
				<ActionFunnel />

				<div className={`${aboutStyles.insight}`}>
					<div className="row">
						<div className="small-12 columns text-center">
							<h2>Insight Discovered</h2>
							<img className={aboutStyles.hr} src="/images/sep.svg" alt="" />
							<p>GovWhitePapers brings together the resources needed to learn about and plan for Government’s biggest challenges and solutions.</p>
							<Link href="/post">
								<a className={`button ${aboutStyles.button}`}>Get Started</a>
							</Link>
						</div>
					</div>
				</div>

				<Footer/>
			</>
		);
	}
}

export default About;

export async function getStaticProps(ctx) {
	const wordpress = new WordpressService
	const stats = await wordpress.fetchStats();
	const page = await wordpress.fetchPage('about');
	return {
		props: {
			page,
			stats
		}
	}
}
