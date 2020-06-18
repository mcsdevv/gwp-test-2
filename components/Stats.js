import statsStyles from '../public/styles/modules/components/stats.module.css';

class Stats extends React.Component {

	constructor(props) {
		super(props);
	}

	render() {
		return (
			<div className={`${statsStyles.stats}`}>
				<div className="row">
					<div className={`small-12 columns ${statsStyles.heading} text-center`}>
						<h2>Our Stats</h2>
					</div>
				</div>
				<div className="row small-up-1 large-up-3">
					<div className="column column-block">
						<div className={`${statsStyles.statsBlock}`}>
							<img className={statsStyles.icon} src="/images/stats-years.svg" alt="" />
							<div className={statsStyles.content}>
								<span className={statsStyles.labelHeading}>
									{this.props.years_active}
								</span>
								<span className={statsStyles.label}>
									years
								</span>
								<p>Providing the government community with events and information relevant to the public sector and supporting industry.</p>
							</div>
						</div>
					</div>
					<div className="column column-block">
						<div className={`${statsStyles.statsBlock}`}>
							<img className={statsStyles.icon} src="/images/stats-members.svg" alt="" />
							<div className={statsStyles.content}>
							<span className={statsStyles.labelHeading}>
								{this.props.user_count}+
							</span>
							<span className={statsStyles.label}>
								members
							</span>
								<p>With {this.props.user_count}+ members and growing, you'll want to join in and see what the buzz is about.</p>
							</div>
						</div>
					</div>
					<div className="column column-block">
						<div className={`${statsStyles.statsBlock}`}>
							<img className={statsStyles.icon} src="/images/stats-content.svg" alt="" />
							<div className={statsStyles.content}>
							<span className={statsStyles.labelHeading}>
								{this.props.whitepaper_count}
							</span>
							<span className={statsStyles.label}>
								papers
							</span>
								<p>Rest assured that you're getting the latest government content - it's added to the site daily!</p>
							</div>
						</div>
					</div>
				</div>
			</div>
		);
	}

}

export default Stats;
