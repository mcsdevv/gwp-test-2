import memberCardStyles from '../public/styles/modules/components/membercard.module.css';
import Link from 'next/link';

class MemberCard extends React.Component {

	constructor(props) {
		super(props);
	}

	componentDidUpdate() {

	}

	_renderImage() {
		if( this.props.hide_image == true ) {
			return null;
		}
		if( this.props.featured_media == false ) {
			return <img alt="" src="/images/default-avatar.svg" />;
		} else {
			if( this.props.featured_media.sizes.hasOwnProperty('thumbnail') ) {
				return <img src={this.props.featured_media.sizes.thumbnail.file} />;
			} else {
				return <img src={this.props.featured_media.file} />;
			}
		}
	}

	render() {

		return(
			<>
			<div className={`${memberCardStyles.content} row collapse clearfix`}>
				<div className="small-12 medium-6 columns">
					{this._renderImage()}
					<h3>{this.props.first_name} {this.props.last_name}</h3>
				</div>
				<div className="small-12 medium-6 columns">
					<span>{this.props.job_title}</span>
				</div>
			</div>
			</>
		);
	}

}

export default MemberCard;
