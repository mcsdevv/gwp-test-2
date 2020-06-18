import Link from 'next/link';
import MenuLink from '../components/MenuLink';
import ProfileMenuLink from '../components/ProfileMenuLink';
import LoginModal from '../components/LoginModal';
import headerStyles from '../public/styles/modules/header.module.css';
import WordpressService from '../services/wordpress'
import Cookies from 'js-cookie'

class Header extends React.Component {

	constructor(props) {
		super(props);
		this.state = {
			mobile_menu_open: false,
			user_profile_menu_open: false,
			login_open: false,
			//display_name: ''
		};
	}

	// static async getInitialProps(ctx) {
	// 	const wordpress = new WordpressService
	// 	const post = await wordpress.fetchPost(ctx.query.post);
	//
	// 	const user = wordpress.getUser();
	// 	return wordpress.pageProps('test', post)
	// }

	// async _fetchToken() {
	// 	const token = await window.localStorage.getItem('user');
	// 	return token;
	// }

	// async componentDidMount() {
	// 	const {access_token} = this.props;
	// 	const wordpress = new WordpressService
	// 	const user = await wordpress.getUser(access_token);
	// 	this.setState(state => ({
	// 		display_name: user.first_name + ' ' + user.last_name
	// 	}));
	// }

	_logOut() {
		event.preventDefault();
		setTimeout( function(e) {
			Cookies.remove('user');
			window.location.href = '/';
		}, 750 );
	}

	_toggleMenu = () => {
		this.setState(state => ({
			mobile_menu_open: !state.mobile_menu_open
		}));
	};

	_toggleUserProfileMenu = () => {
		this.setState(state => ({
			user_profile_menu_open: !state.user_profile_menu_open
		}));
	};

	_toggleLogin = () => {
		this.setState(state => ({
			login_open: !state.login_open
		}));
	};

	_handleEscape = (e) => {
		if (e.which == 27) {
			this._toggleMenu();
		}
	}

	_renderUserProfileMenu() {
		if( this.state.user_profile_menu_open == false ) {
			return null;
		} else {
			return(
				<ul id="header-profile-menu" className={`vertical menu ${headerStyles.menu} ${headerStyles.profileMenu} clearfix`}>
					<li className={headerStyles.menuItem}>
						<ProfileMenuLink href="/profile">
							<a>
								<img className={headerStyles.menuImage} src="/images/profile-menu-profile.svg" alt="" />
								<img className={`${headerStyles.menuImage} ${headerStyles.active}`} src="/images/profile-menu-profile-active.svg" alt="" />
								<span>Dashboard</span>
							</a>
						</ProfileMenuLink>
					</li>
					<li className={headerStyles.menuItem}>
						<ProfileMenuLink href="/promote">
							<a>
								<img className={headerStyles.menuImage} src="/images/profile-menu-upgrade.svg" alt="" />
								<img className={`${headerStyles.menuImage} ${headerStyles.active}`} src="/images/profile-menu-upgrade-active.svg" alt="" />
								<span>Promote</span>
							</a>
						</ProfileMenuLink>
					</li>
					<li className={headerStyles.menuItem}>
						<ProfileMenuLink href="/contact">
							<a>
								<img className={headerStyles.menuImage} src="/images/profile-menu-contact.svg" alt="" />
								<img className={`${headerStyles.menuImage} ${headerStyles.active}`} src="/images/profile-menu-contact-active.svg" alt="" />
								<span>Contact</span>
							</a>
						</ProfileMenuLink>
					</li>
					<li className={headerStyles.menuItem}>
						<ProfileMenuLink href="/settings">
							<a>
							<img className={headerStyles.menuImage} src="/images/profile-menu-settings.svg" alt="" />
							<img className={`${headerStyles.menuImage} ${headerStyles.active}`} src="/images/profile-menu-settings-active.svg" alt="" />
								<span>Settings</span>
							</a>
						</ProfileMenuLink>
					</li>
					<li className={`${headerStyles.menuItem} ${headerStyles.logout}`}>
						<a
							onClick={this._logOut}
							>
							<img className={headerStyles.menuImage} src="/images/log-out-profile-menu.svg" alt="" />
							<span>Log Out</span>
						</a>
					</li>

				</ul>
			);
		}
	}

  componentDidUpdate() {
		// const {user_profile_menu_open} = this.state;
		// if( user_profile_menu_open == true) {
		// 	window.addEventListener('click', this._handleClick );
		// } else {
		// 	window.removeEventListener('click', this._handleClick );
		// }
	}

	_handleClick = (e) => {
		// console.log('click');
		// this._toggleUserProfileMenu();
	}

	_renderUserMenuIcon() {
		if( this.state.user_profile_menu_open == false ) {
			return <img src="/images/account-arrow.svg" alt="" />
		} else {
			return <img className={headerStyles.iconOpen} src="/images/account-arrow.svg" alt="" />
		}
	}

	_renderUserMenu() {
		const {user} = this.props;
		const display_name = this.props.display_name;
		if( user !== false && user !== undefined ) {
			return(
				<>
				<ul className={`${headerStyles.userMenu} clearfix`} aria-expanded="false">
					<li className={`menu-item ${headerStyles.search}`}>
						<Link href="/find">
							<a>
								<img className={headerStyles.search} src="/images/search.svg" alt="GovWhitePapers Search" />
							</a>
						</Link>
					</li>
					<li className={`js-account-menu menu-item ${headerStyles.account}`}>
						<a
							onClick={this._toggleUserProfileMenu}
						>
							{display_name} {this._renderUserMenuIcon()}
						</a>
						{this._renderUserProfileMenu()}
					</li>
				</ul>
				</>
			);
		} else {
			return(
				<>
				<ul className={`${headerStyles.userMenu} clearfix`} aria-expanded="false">
					<li className={`menu-item ${headerStyles.search}`}>
						<Link href="/find">
							<a>
								<img className={headerStyles.search} src="/images/search.svg" alt="GovWhitePapers Search" />
							</a>
						</Link>
					</li>
					<li className={`js-account-menu menu-item ${headerStyles.login}`}>
						<a onClick={this._toggleLogin} className={`js-login ${headerStyles.login}`}>Login</a>
					</li>
					<li className={`menu-item ${headerStyles.getStarted}`}>
						<Link href="/register">
							<a className={`button ${headerStyles.button}`}>Get started</a>
						</Link>
					</li>
				</ul>
				</>
			);
		}
	}

	render() {
		return(
			<>
			<header className={headerStyles.header}>
				<div className="row">
					<div className="small-9 medium-10 large-8 columns">
						<Link href="/">
							<a>
								<img className={headerStyles.logo} src="/images/logo.svg" alt="GovWhitePapers Logo" />
							</a>
						</Link>
						<div className={headerStyles.navigationWrap}>
							<nav
								id="site-navigation"
								className={
									this.state.mobile_menu_open == true ? `${headerStyles.mainNavigation} clearfix ${headerStyles.toggled}` : `${headerStyles.mainNavigation} clearfix`
								}>
								<button onClick={this._toggleMenu} className={headerStyles.menuToggle} aria-controls="primary-menu" aria-expanded="false">
									<span className="screen-reader-text">Toggle Mobile Menu</span>
									<div
										id="burger"
										className={
											this.state.mobile_menu_open == true ? `${headerStyles.burger} ${headerStyles.open}` : `${headerStyles.burger}`
										}>
										<span></span>
										<span></span>
										<span></span>
									</div>
								</button>

								<div className={`${headerStyles.menuPrimaryMenuContainer} clearfix`}>
									<ul id="primary-menu" className={`menu ${headerStyles.menu} clearfix`} aria-expanded="false">
									<li className={`menu-item ${headerStyles.homeMenuLink}`}>
										<MenuLink href="/">
											<a>
												<img className={headerStyles.menuImage} src="/images/menu-home.png" alt="" />
												Home
											</a>
										</MenuLink>
									</li>
										<li className="menu-item">
											<MenuLink href="/find">
												<a>
													<img className={headerStyles.menuImage} src="/images/menu-find.png" alt="" />
													Find
												</a>
											</MenuLink>
										</li>
										<li className="menu-item">
											<MenuLink href="/post">
												<a>
													<img className={headerStyles.menuImage} src="/images/menu-post.png" alt="" />
													Post
												</a>
											</MenuLink>
										</li>
										<li className="menu-item">
											<MenuLink href="/promote">
												<a>
													<img className={`${headerStyles.menuImage} ${headerStyles.promote}`} src="/images/menu-promote.png" alt="" />
													Promote
												</a>
											</MenuLink>
										</li>
										<li className="menu-item">
											<MenuLink href="/about">
												<a>
													<img className={headerStyles.menuImage} src="/images/menu-about.png" alt="" />
													About
												</a>
											</MenuLink>
										</li>
										<li className="menu-item">
											<MenuLink href="/team">
												<a>
													<img className={`${headerStyles.menuImage} ${headerStyles.team}`} src="/images/menu-team.png" alt="" />
													Team
												</a>
											</MenuLink>
										</li>
										<li className="menu-item">
											<MenuLink href="/blog">
												<a>
													<img className={`${headerStyles.menuImage} ${headerStyles.blog}`} src="/images/menu-blog.png" alt="" />
													Blog
												</a>
											</MenuLink>
										</li>
										<li className={`menu-item ${headerStyles.eventsMenuLink}`}>
											<a target="_blank" href="https://govevents.com">
												<img className={headerStyles.menuImage} src="/images/menu-events.png" alt="" />
												Go to GovEvents
											</a>
										</li>
									</ul>
									<div className={`${headerStyles.mobileUserMenuWrap} clearfix`}>
										{this._renderUserMenu()}
									</div>
								</div>
							</nav>
						</div>

					</div>
					<div className="small-3 medium-2 large-4 columns text-right">
					<div className={`${headerStyles.mainUserMenuWrap} clearfix`}>
						{this._renderUserMenu()}
					</div>
					</div>
				</div>
				<LoginModal
					open={this.state.login_open}
					toggle={() => this._toggleLogin()}
				/>
			</header>
			<div id="ie-killa">
				<img src="/images/logo.svg" alt="GovWhitePapers Logo" />
				<h3>Sorry, your browser is not compatible with this application. Please use the latest version of Google Chrome/Chromium, Mozilla Firefox or Safari.</h3>
			</div>
			</>
		);
	}

}

export default Header;
