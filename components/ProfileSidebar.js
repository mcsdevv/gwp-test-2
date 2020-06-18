import Link from 'next/link';
import ProfileMenuLink from '../components/ProfileMenuLink';
import profileSidebarStyles from '../public/styles/modules/components/profilesidebar.module.css';
import Cookies from 'js-cookie'

class ProfileSidebar extends React.Component {

	constructor(props) {
		super(props);
		this.state = {
			// mobile_menu_open: false,
			// login_open: false,
		};
	}

	componentDidUpdate() {
		// const {mobile_menu_open} = this.state;
		// console.log(mobile_menu_open);
		// let html = document.querySelector('html');
		// if( mobile_menu_open ) {
		// 	html.classList.add('active-modal');
		// 	html.classList.add('menu');
		// 	window.addEventListener('keydown', this._handleEscape );
		// 	window.addEventListener('click', this._handleClick );
		//
		// } else {
		// 	html.classList.remove('active-modal');
		// 	html.classList.remove('menu');
		// 		window.removeEventListener('keydown', this._handleEscape );
		// 		window.removeEventListener('click', this._handleClick );
		// }
	}

	_logOut() {
		event.preventDefault();
		setTimeout( function(e) {
			Cookies.remove('user');
			window.location.href = '/';
		}, 750 );
	}

	_renderOrganzationMenuLink = () => {
		if( this.props.organization_id == false ) {
			return null;
		} else {
			if( this.props.organization_email_verified ) {
				if( !this.props.organization_email_mismatch ) {
					return(
						<li className={profileSidebarStyles.menuItem}>
							<ProfileMenuLink href="/dashboard">
								<a>
								<img className={profileSidebarStyles.menuImage} src="/images/profile-menu-members.svg" alt="" />
								<img className={`${profileSidebarStyles.menuImage} ${profileSidebarStyles.active}`} src="/images/profile-menu-members-active.svg" alt="" />
									<span>My Organization</span>
								</a>
							</ProfileMenuLink>
						</li>
					);
				} else {
					return null;
				}
			} else {
				return null;
			}
		}
	}

	render() {
		return(
			<>
				<div className={profileSidebarStyles.wrap}>
					<h3>Dashboard</h3>
					<ul id="profile-menu" className={`vertical menu ${profileSidebarStyles.menu} clearfix`}>
						<li className={profileSidebarStyles.menuItem}>
							<ProfileMenuLink href="/profile">
								<a>
									<img className={profileSidebarStyles.menuImage} src="/images/profile-menu-profile.svg" alt="" />
									<img className={`${profileSidebarStyles.menuImage} ${profileSidebarStyles.active}`} src="/images/profile-menu-profile-active.svg" alt="" />
									<span>Profile</span>
								</a>
							</ProfileMenuLink>
						</li>
						<li className={profileSidebarStyles.menuItem}>
							<ProfileMenuLink href="/favorites">
								<a>
								<img className={profileSidebarStyles.menuImage} src="/images/profile-menu-favorites.svg" alt="" />
								<img className={`${profileSidebarStyles.menuImage} ${profileSidebarStyles.active}`} src="/images/profile-menu-favorites-active.svg" alt="" />
									<span>Favorites</span>
								</a>
							</ProfileMenuLink>
						</li>
						<li className={profileSidebarStyles.menuItem}>
							<ProfileMenuLink href="/saved-searches">
								<a>
								<img className={profileSidebarStyles.menuImage} src="/images/profile-menu-saved-searches.svg" alt="" />
								<img className={`${profileSidebarStyles.menuImage} ${profileSidebarStyles.active}`} src="/images/profile-menu-saved-searches-active.svg" alt="" />
									<span>Saved Searches</span>
								</a>
							</ProfileMenuLink>
						</li>
						<li className={profileSidebarStyles.menuItem}>
							<ProfileMenuLink href="/promote">
								<a>
								<img className={profileSidebarStyles.menuImage} src="/images/profile-menu-upgrade.svg" alt="" />
								<img className={`${profileSidebarStyles.menuImage} ${profileSidebarStyles.active}`} src="/images/profile-menu-upgrade-active.svg" alt="" />
									<span>Promote</span>
								</a>
							</ProfileMenuLink>
						</li>
						<li className={profileSidebarStyles.menuItem}>
							<ProfileMenuLink href="/contact">
								<a>
								<img className={profileSidebarStyles.menuImage} src="/images/profile-menu-contact.svg" alt="" />
								<img className={`${profileSidebarStyles.menuImage} ${profileSidebarStyles.active}`} src="/images/profile-menu-contact-active.svg" alt="" />
									<span>Contact</span>
								</a>
							</ProfileMenuLink>
						</li>
						<li className={profileSidebarStyles.menuItem}>
							<ProfileMenuLink href="/settings">
								<a>
								<img className={profileSidebarStyles.menuImage} src="/images/profile-menu-settings.svg" alt="" />
								<img className={`${profileSidebarStyles.menuImage} ${profileSidebarStyles.active}`} src="/images/profile-menu-settings-active.svg" alt="" />
									<span>Settings</span>
								</a>
							</ProfileMenuLink>
						</li>
						<li className={profileSidebarStyles.menuItem}>
							<ProfileMenuLink href="/my-content">
								<a>
									<img className={profileSidebarStyles.menuImage} src="/images/profile-menu-dashboard.svg" alt="" />
									<img className={`${profileSidebarStyles.menuImage} ${profileSidebarStyles.active}`} src="/images/profile-menu-dashboard-active.svg" alt="" />
									<span>My Content</span>
								</a>
							</ProfileMenuLink>
						</li>
						{this._renderOrganzationMenuLink()}
						<li className={`${profileSidebarStyles.menuItem} ${profileSidebarStyles.logout}`}>
							<a
								onClick={this._logOut}
								>
								<img className={profileSidebarStyles.menuImage} src="/images/log-out-profile-menu.svg" alt="" />
								<span>Log Out</span>
							</a>
						</li>
					</ul>
				</div>
			</>
		);
	}

}

export default ProfileSidebar;
