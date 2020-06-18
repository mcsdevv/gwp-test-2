import subscribeStyles from '../public/styles/modules/components/subscribe.module.css';
import Link from 'next/link';

class Subscribe extends React.Component {

	constructor(props) {
		super(props);
	}

	_renderClass = () => {
		if( this.props.alt == 'true' ) {
			return `${subscribeStyles.subscribe} ${subscribeStyles.alt}`;
		} else {
			return `${subscribeStyles.subscribe}`
		}
	}

	render() {
		return (
			<div className={this._renderClass()}>
				<div className="row">
					<div className="small-12 columns text-center">
						<h2>Subscribe</h2>
						<img className={subscribeStyles.hr} src="/images/sep.svg" alt="" />
						<p>Sign up to receive the GovWhitePapers newsletter, featuring our freshest content relevant to discussions happening in the government community.</p>
						<Link href="/newsletter">
							<a className={`button ${subscribeStyles.button}`}>Sign Up</a>
						</Link>
					</div>
				</div>
			</div>
		);
	}

}

export default Subscribe;
