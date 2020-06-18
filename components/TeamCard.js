import teamCardStyles from '../public/styles/modules/components/teamcard.module.css';
import TeamModal from '../components/TeamModal';
import Link from 'next/link';
import {decodeHTML} from 'entities'

class TeamCard extends React.Component {

	constructor(props) {
		super(props);
		this.state = {
			modal_open: false,
		};
	}

	_handleEscape = (e) => {
		if (e.which == 27) {
			this._toggleModal();
		}
	}

	_handleClick = (e) => {
		console.log(e);
		console.log('click');
		e.preventDefault();
		if( e.target.hasAttribute('data-close-modal') ) {
			this._toggleModal();
		}
	}

	_modalShowClass = () => {
		return this.state.modal_open;
	}

	_toggleModal = () => {
		this.setState(state => ({
			modal_open: !state.modal_open
		}));
	};

	componentDidUpdate() {
		const {modal_open} = this.state;
		// console.log(modal_open);
		let html = document.querySelector('html');
		if( modal_open ) {
			window.addEventListener('keydown', this._handleEscape );
			window.addEventListener('click', this._handleClick );
			html.classList.add('active-modal');
			html.classList.add('team');

		} else {
			window.removeEventListener('keydown', this._handleEscape );
			window.removeEventListener('click', this._handleClick );
			html.classList.remove('active-modal');
			html.classList.remove('team');
		}

	}

	_renderProfileImage() {
		//console.log(this.props.featured_media);
		if( this.props.featured_media !== false ) {
			if( this.props.featured_media.sizes.hasOwnProperty('square') ) {
				return <img src={this.props.featured_media.sizes.square.file} className={teamCardStyles.avatar} alt="" />
			} else {
				return <img src={this.props.featured_media.file} className={teamCardStyles.avatar} alt="" />
			}
		} else {
			return <img src="/images/team-default.jpg" className={teamCardStyles.avatar} alt="" />;
		}
	}

	render() {

		return(
			<>
			<div className={`teamBlockJS ${teamCardStyles.teamBlock}`}>
				<a onClick={() => { this._toggleModal() }}>
					{this._renderProfileImage()}
				</a>
				<h6>{this.props.position}</h6>
				<a className={teamCardStyles.name} onClick={() => { this._toggleModal() }}>
					<h3>{this.props.title}</h3>
				</a>
				<p className="match-height">
					{this.props.excerpt}
				</p>
				<a onClick={() => { this._toggleModal() }} className={teamCardStyles.more}>Read more <img className={teamCardStyles.linkArrow} src="/images/right-arrow-blue.svg" alt="" /></a>
			</div>
			<TeamModal
				modal_open={this.state.modal_open}
				blur={this.state.modal_open}
				title={this.props.title}
				position={this.props.position}
				content={this.props.content}
				toggle={() => this._toggleModal()}
				description={this.props.description}
				fun_fact={this.props.fun_fact}
				featured_media={this.props.featured_media}>
			 </TeamModal>
			</>
		);
	}

}

export default TeamCard;
