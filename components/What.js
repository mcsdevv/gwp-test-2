import whatStyles from '../public/styles/modules/components/what.module.css';
import Link from 'next/link';

function What() {
	return (
		<>
		<div className={`${whatStyles.infoRow} ${whatStyles.about}`}>
			<div className="row text-center">
				<div className="small-12 columns">
					<h4 className={whatStyles.heading}>What can you do on GovWhitePapers?</h4>
					<img className={whatStyles.hr} src="/images/sep.svg" alt="" />
					<p>GovWhitePapers is the gathering place for government professionals and the companies that serve them to find content that helps to understand modern technologies, trends, and practices. We’ve gathered thousands of white papers, eBooks, infographics, case studies, and data sheets on topics including:</p>
					<div className={whatStyles.catList}>
						<ul>
							<li><Link href="/topic/artificial-intelligence"><a>Artificial Intelligence</a></Link></li>
							<li><Link href="/topic/blockchain"><a>Blockchain</a></Link></li>
							<li><Link href="/topic/citizen-engagement"><a>Citizen Engagement</a></Link></li>
							<li><Link href="/topic/cloud-computing"><a>Cloud Computing</a></Link></li>
							<li><Link href="/topic/cybersecurity"><a>Cybersecurity</a></Link></li>
							<li><Link href="/topic/data-management"><a>Data Management</a></Link></li>
							<li><Link href="/topic/education"><a>Education</a></Link></li>
							<li><Link href="/topic/it"><a>IT</a></Link></li>
							<li><Link href="/topic/military"><a>Military</a></Link></li>
							<li><Link href="/topic/public-safety"><a>Public Safety</a></Link></li>
							<li><Link href="/topic/ransomware"><a>Ransomware</a></Link></li>
							<li><Link href="/topic/security"><a>Security</a></Link></li>
							<li><Link href="/find"><a>and so much more!</a></Link></li>
						</ul>
					</div>
				</div>
			</div>
		</div>
		</>
	);
}

export default What
