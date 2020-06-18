import blogCardStyles from '../public/styles/modules/components/blogcard.module.css';
import TeamModal from '../components/TeamModal';
import Link from 'next/link';

class BlogCard extends React.Component {

	constructor(props) {
		super(props);
	}

	componentDidUpdate() {

	}

	_renderImage() {
			if( this.props.featured_media == false ) {
				return <img src="/images/blog-card.jpg" />;
			} else {
				if( this.props.featured_media.sizes.hasOwnProperty('blog_card') ) {
					return <img src={this.props.featured_media.sizes.blog_card.file} />;
				} else {
					return <img src={this.props.featured_media.file} />;
				}
			}
	}

	render() {
		return(
			<>
			<div className={`${blogCardStyles.blogBlock}`}>
				<Link href="blog/[post]" as={`blog/${this.props.slug}`}>
					<div className={blogCardStyles.image}>
						<div className={blogCardStyles.category}>
							<a>{this.props.category[0].name}</a>
						</div>
						{this._renderImage()}
					</div>
				</Link>
				<div className={`${blogCardStyles.content}`}>
					<Link href="/blog/[post]" as={`/blog/${this.props.slug}`}>
						<a className={blogCardStyles.link}>
							<h3>{this.props.title}</h3>
						</a>
					</Link>
					<p>{this.props.excerpt}</p>
					<Link href="/blog/[post]" as={`/blog/${this.props.slug}`}>
						<a className={blogCardStyles.more}>Learn more <img className={blogCardStyles.linkArrow} src="/images/right-arrow-blue.svg" alt="" /></a>
					</Link>
				</div>
			</div>
			</>
		);
	}

}

export default BlogCard;
