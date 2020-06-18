import whitePaperCardStyles from '../public/styles/modules/components/whitepapercard.module.css';
import Link from 'next/link';
import Router from 'next/router'

class WhitePaperCard extends React.Component {

	constructor(props) {
		super(props);
		// this.state = {
		// 	modal_open: false,
		// };
	}

	componentDidUpdate() {

	}

	_renderImage() {
		if( this.props.hide_image == true ) {
			return null;
		}
		if( this.props.featured_media == false ) {
			return <img src="/images/whitepaper-card.jpg" />;
		} else {
			if( this.props.featured_media.sizes.hasOwnProperty('whitepaper_card') ) {
				return <img src={this.props.featured_media.sizes.whitepaper_card.file} />;
			} else {
				return <img src={this.props.featured_media.file} />;
			}
		}
	}

	_renderEdit = () => {
		if( !this.props.show_edit ) {
			return null;
		} else {
			return(
				<>
					<div
						onClick={() => {
							Router.push({
								pathname: '/edit',
								query: { id: this.props.id }
							})
						}}
						className={whitePaperCardStyles.edit}>
						<img src="/images/edit-icon.svg" alt="" />
					</div>
				</>
			);
		}
	}

	render() {
		return(
			<>
			<div className={`${whitePaperCardStyles.paperBlock}`}>
				{this._renderEdit()}
				<Link href="/whitepapers/[whitepaper]" as={`/whitepapers/${this.props.slug}`}>
					<div className={whitePaperCardStyles.image}>
						{this._renderImage()}
					</div>
				</Link>
				<div className={`${whitePaperCardStyles.content}`}>
					<div className={whitePaperCardStyles.category}>
						<Link href="/whitepapers/[whitepaper]" as={`/whitepapers/${this.props.slug}`}>
							<a>{this.props.topics[0].name}</a>
						</Link>
					</div>
					<Link href="/whitepapers/[whitepaper]" as={`/whitepapers/${this.props.slug}`}>
						<a className={whitePaperCardStyles.link}>
							<h3>{this.props.title}</h3>
						</a>
					</Link>
					<p>{this.props.excerpt}</p>
					<Link href="/whitepapers/[whitepaper]" as={`/whitepapers/${this.props.slug}`}>
						<a className={whitePaperCardStyles.more}>Learn More <img className={whitePaperCardStyles.linkArrow} src="/images/right-arrow-blue.svg" alt="" /></a>
					</Link>
				</div>
			</div>
			</>
		);
	}

}

export default WhitePaperCard;
