import Header from '../components/Header';
import Head from 'next/head'
import Link from 'next/link';
import errorStyles from '../public/styles/modules/error.module.css';

class Error extends React.Component {

	constructor(props) {
		super(props);
	}

	componentDidMount() {

	}

	render() {
		const display_name = this.props.display_name;
		const {user} = this.props;
		return (
			<>
			<Head>
				<title key="page-title">404 - Page Not Found</title>
				<meta charset="utf-8"/>
				<link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
				<link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
				<link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
				<meta name="msapplication-TileImage" content="/favicon-270x270.png" />
				<meta name="msapplication-TileColor" content="#ffffff" />
				<link rel="manifest" href="/site.webmanifest" />
			</Head>
			<Header {...user} display_name={display_name} />
			<div className={errorStyles.errorPage}>
				<div className={errorStyles.inner}>
					<h1>Page Not Found</h1>
					<img className={errorStyles.hr} src="/images/sep.svg" alt="" />
					<p>
						Something went wrong. Please try again later or
						<Link href="/contact">
							 <a className={errorStyles.link}> contact us <img className={errorStyles.linkArrow} src="/images/right-arrow-blue.svg" alt="" /></a>
						</Link>
					</p>
					<a href="/" className={`button ${errorStyles.button}`}>Go Back</a>
				</div>
			</div>
			</>
		);
	}
}

export default Error;
