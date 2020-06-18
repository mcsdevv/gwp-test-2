import React from 'react';
import Link from 'next/link'
import Head from 'next/head'
import {decodeHTML} from 'entities'
import WordpressService from '../../services/wordpress'
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import Subscribe from '../../components/Subscribe';
import BlogCard from '../../components/BlogCard';
import blogStyles from '../../public/styles/modules/blog.module.css';

class Blog extends React.Component {

	constructor(props) {
		super(props);
		this.state = {
			posts: [],
			search: '',
			reached_end: false,
			working: false,
		}
	}

	async componentDidMount() {

		this.setState(state => ({
			posts: this.props.posts
		}));

		const {user} = this.props;
		const {page} = this.props;

	}

	componentDidUpdate() {
		const {working} = this.state;
		let html = document.querySelector('html');

		if( working ) {
			html.classList.add('working');
		} else {
			html.classList.remove('working');
		}
	}

	_renderLoadMoreClass = () => {
		if( this.state.reached_end == true ) {
			return `${blogStyles.nav} hide`;
		} else {
			return `${blogStyles.nav}`
		}
	}

	async _loadMore() {
		this.setState({
			working: true
		});
		const wordpress = new WordpressService
		let items = 9;
		let offset = this.state.posts.length;
		const posts = await wordpress.fetchPosts(items,offset);
		if( posts.length < items ) {
			this.setState({
				reached_end: true,
			})
		}

		this.setState({
			posts: [...this.state.posts, ...posts],
			working: false
		})

	}

	async blogSearchSubmit(e) {
		e.preventDefault();
		window.scrollBy(0, 300);
		// var results = document.querySelector('.js-results');
		// //results.scrollTop -= 800;
		// results.scrollIntoView({
		// 	behavior: "smooth",
		// 	block: "end",
		// 	inline: "nearest"
		// });

		const wordpress = new WordpressService
		let formData = new FormData(e.target);
		let search = formData.get('search_field');

		if( search.length < 1 ) {
			return false;
		}

		this.setState({
			working: true,
			search: search
		});

		let items = 100;
		let offset = 0;

		const posts = await wordpress.fetchPosts(items,offset,search);
		this.setState({
			posts: posts,
			working: false,
			reached_end: true,
		})
	}

	async _clearSearch() {
		let search_field = document.querySelector('input[name="search_field"]');
		search_field.value = '';
		this.setState({
			working: true
		});
		const wordpress = new WordpressService
		let items = 9;
		let offset = 0;
		const posts = await wordpress.fetchPosts(items,offset);

		this.setState({
			posts: posts,
			search: false,
			working: false,
			reached_end: false
		})

	}

	renderBlogHeading() {
		if( this.state.search == false ) {
			return <h2>Articles</h2>;
		} else {
			return <h2>Search results for: {this.state.search} <span onClick={() => { this._clearSearch(1) }} className={blogStyles.clearSearch}>clear search</span></h2>
		}
	}

	render() {
		const {posts} = this.state;
		const {user} = this.props;
		const {page} = this.props;
		const display_name = this.props.display_name;

		const seo_title = decodeHTML(page.seo_title);
		const open_graph_title = decodeHTML(page.open_graph_title);
		const twitter_title = decodeHTML(page.twitter_title);

		const seo_desc = decodeHTML(page.seo_desc);
		const open_graph_desc = decodeHTML(page.open_graph_desc);
		const twitter_desc = decodeHTML(page.twitter_desc);

		const open_graph_image_url = decodeHTML(page.open_graph_image_url);
		const twitter_image_url = decodeHTML(page.twitter_image_url);
		return(
			<>
				<Head>
					<title key="page-title">{seo_title}</title>
					<meta charset="utf-8"/>
					<link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
					<link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
					<link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
					<meta name="msapplication-TileImage" content="/favicon-270x270.png" />
					<meta name="msapplication-TileColor" content="#ffffff" />
					<link rel="manifest" href="/site.webmanifest" />
					<meta property="og:title" content={seo_title} key="og-title" />
					<meta name="description" content={seo_desc} key="description" />
					<meta property="og:locale" content="en_US" key="og-locale" />
					<meta property="og:title" content={open_graph_title} key="og-title" />
					<meta property="og:description" content={open_graph_desc} key="og-description" />
					<meta property="og:url" content={page.permalink} key="og-url" />
					<meta property="og:site_name" content="GovWhitePapers" />

					<meta property="og:image" content={open_graph_image_url} key="og-image" />
					<meta property="og:image:secure_url" content={open_graph_image_url} key="og-image-secure" />
					<meta name="twitter:card" content="summary_large_image" key="twitter-card" />
					<meta name="twitter:description" content={twitter_desc} key="twitter-description" />
					<meta name="twitter:title" content={twitter_title} key="twitter-title" />
					<meta name="twitter:site" content="@GovEventsGroup" key="twitter-site" />
					<meta name="twitter:image" content={twitter_image_url} key="twitter-image" />
					<meta name="twitter:creator" content="@GovEventsGroup" key="twitter-creator" />
				</Head>
				<Header {...user} display_name={display_name} />
				<div className={`row ${blogStyles.pageContent}`}>
					<div className={`small-12 medium-6 columns ${blogStyles.text}`}>
						<h1>Blog</h1>
						<p>We break down the buzz around government hot topics.</p>

						<form
							id="blog-search"
							action="https://gwpadmin.codewrangler.io/api/gwp/v1/posts"
							onSubmit={ (e) => this.blogSearchSubmit(e) }
							method="get">
								<div className={`input-group ${blogStyles.search}`}>
									<input name="search_field" className="input-group-field" placeholder="Search articles" type="text" />
									<div className="input-group-button">
										<button className={`button ${blogStyles.button}`} type="submit">
											<img src="/images/right-arrow-white.svg" alt="" />
										</button>
									</div>
								</div>
							</form>

					</div>
					<div className={`small-12 medium-6 columns text-right ${blogStyles.image}`}>
						<img src="/images/blog-img.jpg" alt="" />
					</div>
				</div>

				<div className={blogStyles.blogRow}>
					<div className={`row ${blogStyles.heading}`}>
						<div className="small-12 columns text-center">
							{this.renderBlogHeading()}
						</div>
					</div>

					<div className="js-results"></div>
					<div className={`row small-up-1 medium-up-2 large-up-3`}>
						{posts.map(blog =>
							<div key={blog.ID} className={`column column-block`}>
								<BlogCard
									id={blog.ID}
									slug={blog.slug}
									title={decodeHTML(blog.title)}
									featured_media={blog.featured_media}
									excerpt={decodeHTML(blog.excerpt)}
									category={blog.categories}
									display_date={blog.display_date}
									author_name={blog.author_name}
								/>
							</div>
						)}
					</div>

					<div className={this._renderLoadMoreClass()}>
						<button
							onClick={() => {
								this._loadMore()
							}}
							className={`button ${blogStyles.button}`}>Load More
						</button>
					</div>

				</div>

				<Subscribe/>
				<Footer/>
			</>
		);
	}
}

export default Blog;

export async function getStaticProps(ctx) {
	const wordpress = new WordpressService
	const page = await wordpress.fetchPage('blog');
	let items = 9;
	let offset = 0;
	const posts = await wordpress.fetchPosts(items,offset);
	return {
		props: {
			page,
			posts
		}
	}
}
