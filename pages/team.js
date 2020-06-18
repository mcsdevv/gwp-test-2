import React from 'react';
import Head from 'next/head'
import {decodeHTML} from 'entities'
import WordpressService from '../services/wordpress'
import fetch from 'isomorphic-unfetch';
import Link from 'next/link';
import Header from '../components/Header';
import TeamCard from '../components/TeamCard';
import Footer from '../components/Footer';
import teamStyles from '../public/styles/modules/team.module.css';

class Team extends React.Component {

	constructor(props) {
		super(props);
	}

	async componentDidMount() {
		const {user} = this.props;
	}

	modalShowClass = () => {
		return true;
	}

	render() {
		const display_name = this.props.display_name;
		const {user} = this.props;
		const {page} = this.props;
		const {team} = this.props;

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
				<div className={`row ${teamStyles.pageHeader} text-center`}>
					<div className="small-12 columns">
						<h1>Our Team</h1>
						<img className={teamStyles.hr} src="/images/sep.svg" alt="" />
						<p>The GovWhitePapers team is committed to creating an online space for the government community to come together, share, and collaborate. We admire the dedication of the government community to fulfilling agency missions and are thankful to be able to facilitate the learning and communication that leads to innovative solutions.</p>
					</div>
				</div>

				<div className={`row small-up-1 medium-up-2 large-up-3 teamRow`}>

				{team.map(member =>
					<div key={member.ID} className={`column column-block`}>
						<TeamCard
							id={member.ID}
							slug={member.slug}
							position={decodeHTML(member.position)}
							title={decodeHTML(member.title)}
							featured_media={member.featured_media}
							content={decodeHTML(member.content)}
							excerpt={decodeHTML(member.excerpt)}
							description={decodeHTML(member.description)}
							fun_fact={decodeHTML(member.fun_fact)}
						/>
					</div>
				)}

				</div>

				<div className={`${teamStyles.contact}`}>
					<div className="row">
						<div className="small-12 columns text-center">
							<h2>Get in Touch</h2>
							<img className={teamStyles.hr} src="/images/sep.svg" alt="" />
							<p>Drop us a line and a member of our team will be in touch to answer any questions you may have.</p>
							<Link href="/contact">
								<a className={`button ${teamStyles.button}`}>Contact Us</a>
							</Link>
						</div>
					</div>
				</div>

				<Footer/>
			</>
		);
	}
}

export default Team;

export async function getStaticProps(ctx) {
	const wordpress = new WordpressService
	const page = await wordpress.fetchPage('team');
	const team = await wordpress.fetchTeam();
	return {
		props: {
			page,
			team
		}
	}
}
