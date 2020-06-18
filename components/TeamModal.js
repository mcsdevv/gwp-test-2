import teamModalStyles from '../public/styles/modules/components/teammodal.module.css';
import Link from 'next/link';
import {decodeHTML} from 'entities'
import {HTML} from '../services/util'

class TeamModal extends React.Component {

	constructor(props) {
		super(props);
	}

	_handleEscape = (e) => {
		if (e.which == 27) {
			this.props.toggle();
		}
	}

	_handleClick = (e) => {
		e.preventDefault();
		if( e.target.hasAttribute('data-close-modal') ) {
			this.props.toggle();
		}
	}

	componentDidUpdate() {
		console.log(this.props);
		// const {modal_open} = this.props;
		// let html = document.querySelector('html');
		// if( modal_open ) {
		// 	window.addEventListener('keydown', this._handleEscape );
		// 	window.addEventListener('click', this._handleClick );
		// 	html.classList.add('active-modal');
		// } else {
		// 	window.removeEventListener('keydown', this._handleEscape );
		// 	window.removeEventListener('click', this._handleClick );
		// 	html.classList.remove('active-modal');
		// }

	}

	_renderModalClass = () => {
		const {modal_open} = this.props;
		if( modal_open ) {
			return `${teamModalStyles.wrap} ${teamModalStyles.open}`;
		} else {
			return `${teamModalStyles.wrap}`
		}
	}

	_renderProfileImage() {
		if( this.props.featured_media !== false ) {
			if( this.props.featured_media.sizes.hasOwnProperty('square') ) {
				return <img src={this.props.featured_media.sizes.square.file} className={teamModalStyles.avatar} alt="" />
			} else {
				return <img src={this.props.featured_media.file} className={teamModalStyles.avatar} alt="" />
			}
		} else {
			return <img src="/images/team-default.jpg" className={teamModalStyles.avatar} alt="" />;
		}
	}

	_renderDescription = () => {
		if( this.props.description ) {
			return(
				<div className={teamModalStyles.description}>
				<h4>My team describes me as...</h4>
				<HTML html={this.props.description}/>
				</div>
			);
		} else {
			return null;
		}
	}

	_renderFunFact = () => {
		if( this.props.fun_fact ) {
			return(
				<div className={teamModalStyles.funFact}>
				<h4>Fun Fact</h4>
				<HTML html={this.props.fun_fact}/>
				</div>
			);
		} else {
			return null;
		}
	}

	render() {

		return(
			<>
			<div className={this._renderModalClass()}>
				<div className={`clearfix ${teamModalStyles.header}`}>
					<div className="small-12 columns text-right">
						<button
							className={teamModalStyles.close}
							onClick={e => {
								this.props.toggle();
							}}
						>
							<img src="/images/close.svg" alt="" />
						</button>
					</div>
					<div className={`clearfix ${teamModalStyles.body}`}>
						<div className="small-12 columns">
							{this._renderProfileImage()}
							<h6>{this.props.position}</h6>
							<h3>{this.props.seo_title}</h3>
							<div className="bio">
								<HTML html={this.props.content}/>
								{this._renderDescription()}
								{this._renderFunFact()}
							</div>
						</div>
					</div>
				</div>
			</div>
			</>
		);
	}

}

export default TeamModal;
