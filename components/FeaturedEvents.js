import featuredEventsStyles from '../public/styles/modules/components/featuredevents.module.css';
import Link from 'next/link';

function FeaturedEvents() {
	return (
		<>
		<div className={`${featuredEventsStyles.featuredEvents}`}>
			<div className="row">
				<div className={`small-12 columns text-center ${featuredEventsStyles.heading}`}>
					<h2>Featured Events</h2>
					<img className={featuredEventsStyles.hr} src="/images/sep.svg" alt="" />
					<p>Our sister site, GovEvents, is your one-stop-shop for all government-related conferences, expos, hiring events, webinars, and more. GovEvents is a great resource for planning your professional development and training. </p>
				</div>
			</div>
			<div className="row">
				<div className={`${featuredEventsStyles.content}`}>
					<div className={`small-12 medium-6 columns ${featuredEventsStyles.text}`}>
						<h4>Experience every moment.</h4>
						<p>Find conferences, expos, hiring events, luncheons, webinars and more all in one place. GovEvents is a great resource for planning professional development and training as well as mapping out event-based marketing plans.</p>
						<Link href="/find">
							<a className={featuredEventsStyles.all}>All Events <img className={featuredEventsStyles.linkArrow} src="/images/right-arrow-blue.svg" alt="" /></a>
						</Link>
					</div>
					<div className={`small-12 medium-6 columns text-right ${featuredEventsStyles.image}`}>
						<broadstreet-zone zone-id="80369"></broadstreet-zone>
						{/* <img src="/images/about-pentagon.jpg" alt="" /> */}
					</div>
				</div>
			</div>
		</div>
		</>
	);
}

export default FeaturedEvents;
