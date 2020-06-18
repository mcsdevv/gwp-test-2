import Link from 'next/link';
import footerStyles from '../public/styles/modules/footer.module.css';

class Footer extends React.Component {

	constructor(props) {
		super(props);
	}

	_renderFooterClass() {
		if( this.props.fixed ) {
			return `${footerStyles.footer} ${footerStyles.fixed}`
		} else {
			return `${footerStyles.footer}`
		}
	}

	render() {
		return(
			<>
			<footer className={this._renderFooterClass()}>
				<div className="row">
					<div className="small-12 large-8 columns">
						<Link href="/">
							<a>
								<img className={footerStyles.logo} src="/images/logo-white-text.svg" alt="GovWhitePapers Logo" />
							</a>
						</Link>
						<div className={footerStyles.navigationWrap}>
							<nav
								id="footer-navigation"
								className={
									`${footerStyles.mainNavigation} clearfix`
								}>
								<div className="clearfix">
									<ul id="footer-menu" className={`menu ${footerStyles.menu} clearfix`} aria-expanded="false">
										<li className="menu-item">
											<Link href="/find">
												<a>Find</a>
											</Link>
										</li>
										<li className="menu-item">
											<Link href="/post">
												<a>Post</a>
											</Link>
										</li>
										<li className="menu-item">
											<Link href="/promote">
												<a>Promote</a>
											</Link>
										</li>
										<li className="menu-item">
											<Link href="/about">
												<a>About</a>
											</Link>
										</li>
										<li className="menu-item">
											<Link href="/team">
												<a>Team</a>
											</Link>
										</li>
										<li className="menu-item">
											<Link href="/blog">
												<a>Blog</a>
											</Link>
										</li>
										<li className="menu-item">
											<Link href="/contact">
												<a>Contact</a>
											</Link>
										</li>
									</ul>
								</div>
							</nav>
						</div>
					</div>
					<div className="small-12 large-4 columns text-right">
						<ul className={footerStyles.socialMenu}>
							<li>
								<a target="_blank" href="https://www.facebook.com/GovWhitePapers/">
									<img className={footerStyles.fblogo} src="/images/fb.svg" alt="Facebook Logo" />
								</a>
							</li>
							<li>
								<a target="_blank" href="https://www.linkedin.com/company/govwhitepapers/">
									<img className={footerStyles.linkedin} src="/images/linkedin.svg" alt="LinkedIn Logo" />
								</a>
							</li>
							<li>
								<a target="_blank" href="https://twitter.com/GovWhitePapers">
									<img className={footerStyles.twitter} src="/images/twitter.svg" alt="Twitter Logo" />
								</a>
							</li>
						</ul>
					</div>
				</div>
			</footer>
			</>
		);
	}

}

export default Footer;
