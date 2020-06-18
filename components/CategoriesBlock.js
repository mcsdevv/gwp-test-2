import categoriesBlockStyles from '../public/styles/modules/components/categoriesblock.module.css';
import Link from 'next/link';

function CategoriesBlock() {
	return (
		<>
		<div className={`${categoriesBlockStyles.categories}`}>
			<div className="row">
				<div className={`small-12 columns text-center ${categoriesBlockStyles.heading}`}>
					<h2>Categories</h2>
					<img className={categoriesBlockStyles.hr} src="/images/sep.svg" alt="" />
					<p>We've looked at what you're reading and posting and created this list to make it easy to access content on the most popular topics. </p>
				</div>
			</div>

			<div className={`row small-up-1 medium-up-2 large-up-3`}>
				<div className={`column column-block`}>
					<div className={categoriesBlockStyles.block}>
						<Link href="/topic/education">
							<a>
								<img className={categoriesBlockStyles.icon} src="/images/education-icon.svg" alt="" />
							</a>
							</Link>
							<Link href="/topic/education">
								<a className={categoriesBlockStyles.headingLink}>
									<h3>Education</h3>
								</a>
							</Link>
						<p>Modernizing the way we present information and learn is happening from preschool to continuing professional development. Learn how virtual reality, artificial intelligence, and collaborative platforms are impacting education.</p>
						<Link href="/topic/education"><a className={categoriesBlockStyles.all}>View All <img className={categoriesBlockStyles.linkArrow} src="/images/right-arrow-blue.svg" alt="" /></a></Link>
					</div>
				</div>
				<div className={`column column-block`}>
					<div className={categoriesBlockStyles.block}>
						<Link href="/topic/security">
							<a>
								<img className={categoriesBlockStyles.icon} src="/images/security-icon.svg" alt="" />
							</a>
							</Link>
							<Link href="/topic/security">
								<a className={categoriesBlockStyles.headingLink}>
									<h3>Security</h3>
								</a>
							</Link>
						<p>Sometimes lost in the discussion of cybersecurity is the progress and innovation happening in physical security. From access control to facial recognition to predictive alerts, the options to secure physical locations are evolving daily.</p>
						<Link href="/topic/security"><a className={categoriesBlockStyles.all}>View All <img className={categoriesBlockStyles.linkArrow} src="/images/right-arrow-blue.svg" alt="" /></a></Link>
					</div>
				</div>

				<div className={`column column-block`}>
					<div className={categoriesBlockStyles.block}>
						<Link href="/topic/military">
							<a>
								<img className={categoriesBlockStyles.icon} src="/images/military-icon.svg" alt="" />
							</a>
							</Link>
							<Link href="/topic/military">
								<a className={categoriesBlockStyles.headingLink}>
									<h3>Military</h3>
								</a>
							</Link>
						<p>Sometimes lost in the discussion of cybersecurity is the progress and innovation happening in physical security. From access control to facial recognition to predictive alerts, the options to secure physical locations are evolving daily.</p>
						<Link href="/topic/military"><a className={categoriesBlockStyles.all}>View All <img className={categoriesBlockStyles.linkArrow} src="/images/right-arrow-blue.svg" alt="" /></a></Link>
					</div>
				</div>

				<div className={`column column-block`}>
					<div className={categoriesBlockStyles.block}>
						<Link href="/topic/it">
							<a>
								<img className={categoriesBlockStyles.icon} src="/images/it-icon.svg" alt="" />
							</a>
							</Link>
							<Link href="/topic/it">
								<a className={categoriesBlockStyles.headingLink}>
									<h3>IT</h3>
								</a>
							</Link>
						<p>The pace of technology change is not slowing down. Cloud, mobile, agile, as a service, and more are part of every agency’s IT mix. Stay up-to-date on the latest products, processes, and tactics from technology vendors and practitioners.</p>
						<Link href="/topic/it"><a className={categoriesBlockStyles.all}>View All <img className={categoriesBlockStyles.linkArrow} src="/images/right-arrow-blue.svg" alt="" /></a></Link>
					</div>
				</div>
				<div className={`column column-block`}>
					<div className={categoriesBlockStyles.block}>
						<Link href="/topic/iot">
							<a>
								<img className={categoriesBlockStyles.icon} src="/images/iot-icon.svg" alt="" />
							</a>
							</Link>
							<Link href="/topic/iot">
								<a className={categoriesBlockStyles.headingLink}>
									<h3>Internet of Things</h3>
								</a>
							</Link>
						<p>The Internet of Things (IoT) is enabling smart cities that run more efficiently and powering better supply chain management across government. Learn how this technology is being integrated into state, local, and federal operations.</p>
						<Link href="/topic/iot"><a className={categoriesBlockStyles.all}>View All <img className={categoriesBlockStyles.linkArrow} src="/images/right-arrow-blue.svg" alt="" /></a></Link>
					</div>
				</div>

				<div className={`column column-block`}>
					<div className={categoriesBlockStyles.block}>
						<Link href="/topic/cybersecurity">
							<a>
								<img className={categoriesBlockStyles.icon} src="/images/cybersecurity-icon.svg" alt="" />
							</a>
							</Link>
							<Link href="/topic/cybersecurity">
								<a className={categoriesBlockStyles.headingLink}>
									<h3>Cybersecurity</h3>
								</a>
							</Link>
						<p>Security postures have changed from if we are attacked to when. This shift has brought a new generation of security tools and tactics that allow organizations to be more proactive and responsive to the constantly changing threat landscape.</p>
						<Link href="/topic/cybersecurity"><a className={categoriesBlockStyles.all}>View All <img className={categoriesBlockStyles.linkArrow} src="/images/right-arrow-blue.svg" alt="" /></a></Link>
					</div>
				</div>

			</div>

			<div className="row">
				<div className="small-12 columns text-center">
					<Link href="/find">
						<a className={`button ${categoriesBlockStyles.button}`}>Search All</a>
					</Link>
				</div>
			</div>

		</div>
		</>
	);
}

export default CategoriesBlock;
