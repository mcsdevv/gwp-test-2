import React from 'react';
import Head from 'next/head'
import WordpressService from '../services/wordpress'
import {decodeHTML} from 'entities'
import fetch from 'isomorphic-unfetch';
import Link from 'next/link';
import Header from '../components/Header';
import Footer from '../components/Footer';
import CategoriesBlock from '../components/CategoriesBlock';
import FeaturedEvents from '../components/FeaturedEvents';
import HomeSlides from '../components/HomeSlides';
import What from '../components/What';
import Subscribe from '../components/Subscribe';
import indexStyles from '../public/styles/modules/index.module.css';

class Home extends React.Component {

	constructor(props) {
		super(props);
	}

	componentDidMount() {
		if (process.browser) {
			window.broadstreet = window.broadstreet || { run: [] };
			window.broadstreet.run.push(function() {
				window.broadstreet.refreshAll();
			});
		}
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

	render() {
		const display_name = this.props.display_name;
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
					<meta charSet="utf-8"/>
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
				<Header {...this.props.user} display_name={display_name} />

				<HomeSlides
					slides={this.props.slides}
				 />

				<div className={`row small-up-1 large-up-3 ${indexStyles.actionRow}`}>
					<div className={`column column-block ${indexStyles.columnBlock} ${indexStyles.find}`}>
						<div className={`${indexStyles.actionBlock}`}>
							<img src="/images/home-find-icon.svg" className={indexStyles.blockIcon} alt="" />
							<Link href="/find">
								<h3>
									<a>Find</a>
								</h3>
							</Link>
							<p className="match-height">Search thousands of white papers, case studies, eBooks & more to discover the best practices government and industry are sharing.</p>
							<Link href="/find">
								<h5>
									<a>Find Content  <img className={indexStyles.linkArrow} src="/images/right-arrow-white.svg" alt="" /></a>
								</h5>
							</Link>
						</div>
					</div>
					<div className={`column column-block ${indexStyles.columnBlock} ${indexStyles.post}`}>
						<div className={`${indexStyles.actionBlock}`}>
							<img src="/images/home-post-icon.svg" className={indexStyles.blockIcon} alt="" />
							<Link href="/post">
								<h3>
									<a>Post</a>
								</h3>
							</Link>
							<p className="match-height">Post your content to expand its reach to thousands of government professionals.</p>
							<Link href="/post">
								<h5>
									<a>Post Content  <img className={indexStyles.linkArrow} src="/images/right-arrow-black.svg" alt="" /></a>
								</h5>
							</Link>
						</div>
					</div>
					<div className={`column column-block ${indexStyles.columnBlock} ${indexStyles.promote}`}>
						<div className={`${indexStyles.actionBlock}`}>
							<img src="/images/home-promote-icon.svg" className={indexStyles.blockIcon} alt="" />
							<Link href="/promote">
								<h3>
									<a>Promote</a>
								</h3>
							</Link>
							<p className="match-height">Learn how we can help promote your content across multiple digital channels</p>
							<Link href="/promote">
								<h5>
									<a>Promote Content <img className={indexStyles.linkArrow} src="/images/right-arrow-black.svg" alt="" /></a>
								</h5>
							</Link>
						</div>
					</div>
				</div>
				<What />
				<div className={`${indexStyles.featuredContent}`}>
					<div className="row">
						<div className="small-12 columns text-center">
							<h2>Featured Content</h2>
							<img className={indexStyles.hr} src="/images/sep.svg" alt="" />
							<p>Take a look at our latest featured content to stay up to date on the most current trends, news and knowledge the government community has to offer.</p>
							<broadstreet-zone zone-id="80365"></broadstreet-zone>

							<p className="text-center">If you'd like to feature your content here, check out our promotional options. <Link href="/find"><a>Promote <img className={indexStyles.linkArrow} src="/images/right-arrow-blue.svg" alt="" /></a></Link></p>
						</div>
					</div>

					<broadstreet-zone zone-id="80366"></broadstreet-zone>

					<div className="row">
						<div className="small-12 columns text-center">
							<p className="text-center">Where Government Knowledge Gathers. Become a member for free and start browsing and posting content today! <Link href="/find"><a>Get started <img className={indexStyles.linkArrow} src="/images/right-arrow-blue.svg" alt="" /></a></Link></p>
						</div>
					</div>
				</div>

				<CategoriesBlock />

				<FeaturedEvents />

				<Subscribe alt="true"/>

				<Footer />
			</>
		);
	}
}

export default Home

export async function getStaticProps(ctx) {
	const wordpress = new WordpressService
	const page = await wordpress.fetchPage('home');
	const slides = await wordpress.fetchSlides();
	return {
		props: {
			page,
			slides
		}
	}
}
