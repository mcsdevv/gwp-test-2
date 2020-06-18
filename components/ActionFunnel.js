import actionFunnelStyles from '../public/styles/modules/components/actionfunnel.module.css';
import Link from 'next/link';

function ActionFunnel() {
	return (
		<>
		<div className={actionFunnelStyles.what}>
			<div className={`row ${actionFunnelStyles.flex}`}>
				<div className={`small-12 medium-5 columns ${actionFunnelStyles.text}`}>
					<h3>Find Content</h3>
					<p>Search thousands of government white papers, case studies, eBooks, infographics and data sheets for free. Our search engine allows you to search by government agency, topic, format, or by federal, state and local content. All content on GovWhitepapers was published within the last two years, giving you access to the most relevant information.</p>
					<p>Also, we’ve provided detailed summaries of any information located behind gated pages so you have a clearer idea of what you're getting once you provide your contact information for full download.</p>
					<Link href="/find">
						<a className={`button ${actionFunnelStyles.button}`}>Search</a>
					</Link>
				</div>
				<div className={`small-12 medium-7 columns text-right ${actionFunnelStyles.image}`}>
					<img src="/images/what-find.jpg" alt="" />
				</div>
			</div>
			<div className={`row ${actionFunnelStyles.flex}`}>
				<div className={`small-12 medium-7 columns text-right ${actionFunnelStyles.image}`}>
					<img src="/images/what-post.jpg" alt="" />
				</div>
				<div className={`small-12 medium-5 columns ${actionFunnelStyles.text}`}>
					<h3>Post Content</h3>
					<p>Reach more people with your content. Add your government-related white papers, case studies, eBooks, infographics and data sheets for free, and get included in daily searches on content topic and relevant agencies.</p>
					<Link href="/post">
						<a className={`button ${actionFunnelStyles.button}`}>Post</a>
					</Link>
				</div>
			</div>

			<div className={`row ${actionFunnelStyles.flex}`}>
				<div className={`small-12 medium-5 columns ${actionFunnelStyles.text}`}>
					<h3>Promote Content</h3>
					<p>Get your government content seen. Work with our team to expand the reach of your content with promotion options including featured content as well as social media and email marketing.</p>
					<Link href="/promote">
						<a className={`button ${actionFunnelStyles.button}`}>Promote</a>
					</Link>
				</div>
				<div className={`small-12 medium-7 columns text-right ${actionFunnelStyles.image}`}>
					<img src="/images/what-promote.jpg" alt="" />
				</div>
			</div>

		</div>
		</>
	);
}

export default ActionFunnel
