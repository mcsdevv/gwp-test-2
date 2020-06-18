import homeSlidesStyles from '../public/styles/modules/components/homeslides.module.css';
import Link from 'next/link';

class HomeSlides extends React.Component {

	constructor(props) {
		super(props);
		this.state = {
			value: 0,
			active_slide: 0,
			max_slides: this.props.slides.length -1
		};
		this.onChange = this.onChange.bind(this);

	}

	_transitionSlide = (type) => {
		if( type == 'next' ) {
			if( this.state.active_slide == this.state.max_slides ) {
				this.setState(state => ({
					active_slide: 0
				}));
			} else {
				this.setState(state => ({
					active_slide: state.active_slide + 1
				}));
			}
		} else {
			if( this.state.active_slide == 0 ) {
				this.setState(state => ({
					active_slide: state.max_slides
				}));
			} else {
				this.setState(state => ({
					active_slide: state.active_slide - 1
				}));
			}
		}
	}

	onChange(value) {
		this.setState({ value });
	}

	componentDidMount() {
		if( process.browser ) {
			window.addEventListener('keydown', this._handleKeyboardInput );
			this.interval = setInterval(() => {
				this._transitionSlide('next')
			}, 4000);
		}
	}

	componentWillUnmount() {
		clearInterval(this.interval);
	}

	componentDidUpdate() {
		// console.log('activeslide');
		// console.log(this.state.active_slide);
	}

	_handleKeyboardInput = (e) => {
		if( e.which == 37 ) {
			clearInterval(this.interval);
			this._transitionSlide('prev');
		}

		if( e.which == 39 ) {
			clearInterval(this.interval);
			this._transitionSlide('next')
		}
	}

	_renderSliderNav = () => {
		return(
			<>
			<span
				onClick={() => {
					clearInterval(this.interval);
					this._transitionSlide('prev')
				}}
				className={homeSlidesStyles.prev}>
				<img className={homeSlidesStyles.linkArrow} src="/images/slider-arrow-left.svg" alt="" />
			</span>
			<span
				onClick={() => {
					clearInterval(this.interval);
					this._transitionSlide('next')
				}}
				className={homeSlidesStyles.next}>
				<img className={homeSlidesStyles.linkArrow} src="/images/slider-arrow-right.svg" alt="" />
			</span>
			</>
		);
	}

	render() {
		let component = this;
		return(
			<div className={homeSlidesStyles.bannerWrap}>
			{this.props.slides.map(function(slide, index) {
					let bannerClass = '';
					if( index == component.state.active_slide ) {
						if( slide.type == 'internal') {
							bannerClass = `${homeSlidesStyles.banner} ${homeSlidesStyles.show}`
						} else {
								bannerClass = `${homeSlidesStyles.banner} ${homeSlidesStyles.show} ${homeSlidesStyles.external}`
						}
					} else {
						if( slide.type == 'internal') {
							bannerClass = `${homeSlidesStyles.banner}`
						} else {
								bannerClass = `${homeSlidesStyles.banner} ${homeSlidesStyles.external}`
						}
					}
					if( slide.type == 'internal' ) {
						let img_url;
						if( slide.featured_media.hasOwnProperty('sizes') ) {
							if( slide.featured_media.sizes.hasOwnProperty('hero') ) {
								img_url = slide.featured_media.sizes.hero.file;
							} else {
								img_url = slide.featured_media.file;
							}
						} else {
							img_url = slide.featured_media.file;
						}
						let styleLogo = {
							backgroundImage: `url(${img_url})`,
						}
						return(
							<div
								key={index}
								className={bannerClass} key={index}
								style={styleLogo}>
								<div className={homeSlidesStyles.bannerContent}>
									<div className="row">
										<div className="small-12 columns">
											<h2 className={homeSlidesStyles.bannerHeading}>
												{slide.headline}
											</h2>
											<div className={homeSlidesStyles.bannerDescription}>
												{slide.description}
											</div>
											<div className={homeSlidesStyles.bannerCTA}>
												<Link href="/find">
													<h5>
														<a>Get Started <img className={homeSlidesStyles.linkArrow} src="/images/right-arrow-white.svg" alt="" /></a>
													</h5>
												</Link>
											</div>
										</div>
									</div>
								</div>
								{component._renderSliderNav()}
							</div>
						);
					} else {
						return(
							<div
								className={bannerClass} key={index}
							>
								<broadstreet-zone zone-id={slide.ad_zone}></broadstreet-zone>
								<broadstreet-zone zone-id={slide.ad_zone}></broadstreet-zone>
								{component._renderSliderNav()}
							</div>
						);
					}
				}
			)}
			</div>
		);
	}

}

export default HomeSlides;
