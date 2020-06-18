import howStyles from '../public/styles/modules/components/how.module.css';

function How() {
	return (
		<div className={`${howStyles.how}`}>
			<div className="row">
				<div className={`small-12 columns ${howStyles.heading} text-center`}>
					<h2>How it Works</h2>
					<img className={howStyles.hr} src="/images/sep.svg" alt="" />
					<p>A rich database of government content is just a few clicks away...</p>
				</div>
			</div>
			<div className="row small-up-1 large-up-3">
				<div className="column column-block">
					<div className={`${howStyles.howBlock} ${howStyles.block1}`}>
						<div className={howStyles.content}>
							<span className={howStyles.labelHeading}>
								<span className={howStyles.numberLabel}>01.</span> Register
							</span>
							<p>Register for your free membership to gain access to GovWhitePapers.</p>
						</div>
					</div>
				</div>
				<div className="column column-block">
					<div className={`${howStyles.howBlock} ${howStyles.block2}`}>
						<div className={howStyles.content}>
							<span className={howStyles.labelHeading}>
								<span className={howStyles.numberLabel}>02.</span> Search & Post
							</span>
							<p>Browse through thousands of government white papers, case studies, eBooks and more, PLUS post your own content for others to enjoy!</p>
						</div>
					</div>
				</div>
				<div className="column column-block">
					<div className={`${howStyles.howBlock} ${howStyles.block3}`}>
						<div className={howStyles.content}>
							<span className={howStyles.labelHeading}>
								<span className={howStyles.numberLabel}>03.</span> Manage
							</span>
							<p>Manage your membership through our secure online portal, and have the added option to further promote your content.</p>
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}

export default How
