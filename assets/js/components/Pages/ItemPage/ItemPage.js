import React, { Component } from 'react';
import ReactDOM from 'react-dom';
// import update from 'immutability-helper';
// var classNames = require('classnames');
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Gallery from './Gallery/Gallery';

export default class ItemPage extends Component {
	constructor() {
		super();
		this.state = {
			item: '',
			mainImgSrc: '',
			currentIndex: 0
		};
	}

	componentWillMount() {
		const newItem = {
			imgs: [
				'https://static.carsdn.co/cldstatic/wp-content/uploads/img-672890494-1551980882647.jpg',
				'https://images.craigslist.org/00i0i_X7e0VP6gh4_600x450.jpg',
				'https://images.craigslist.org/00r0r_1kbEIlkRGqo_600x450.jpg',
				'https://images.craigslist.org/00o0o_jdrVSyhHsSM_600x450.jpg',
				'https://images.craigslist.org/01515_bPXIuclwiqH_600x450.jpg'
			]
		};
		this.setState({
			item: newItem,
			mainImgSrc: newItem.imgs[0]
		});
	}

	nextClick = () => {
		let newIndex = 0;
		//if current index + 1 would be out of bounds loop back to start
		if (this.state.currentIndex !== this.state.item.imgs.length - 1) {
			newIndex = this.state.currentIndex + 1;
		}
		this.setState({
			currentIndex: newIndex
		});
	};

	prevClick = () => {
		let newIndex = 0;
		//if current index - 1 would be negative loop to end
		if (this.state.currentIndex === 0) {
			newIndex = this.state.item.imgs.length - 1;
		} else {
			newIndex = this.state.currentIndex - 1;
		}
		this.setState({
			currentIndex: newIndex
		});
	};

	thumbnailsClick = index => {
		this.setState({
			currentIndex: index
		});
	};

	render() {
		const { match, location, history } = this.props;
		return (
			<section id={'item-container'}>
				<div className="item-page-grid">
					<Gallery
						images={this.state.item.imgs}
						mainImgIndex={this.state.currentIndex}
						nextClick={this.nextClick}
						prevClick={this.prevClick}
						thumbnailsClick={this.thumbnailsClick}
					/>
					<div className="details-row">
						<div className="item-header">
							<div>
								<h6 className="date">Posted: Feb 28th</h6>
								<h3>Title</h3>
								<h4>Cost</h4>
							</div>
							<FontAwesomeIcon icon="star" />
						</div>
						<div className="info-grid">
							<div className="info-item">
								<h5 className="info-title">Title</h5>
								<h5 className="info">the info</h5>
							</div>
							<div className="info-item">
								<h5 className="info-title">Title</h5>
								<h5 className="info">the info</h5>
							</div>
							<div className="info-item">
								<h5 className="info-title">Title</h5>
								<h5 className="info">the info</h5>
							</div>
							<div className="info-item">
								<h5 className="info-title">Title</h5>
								<h5 className="info">the info</h5>
							</div>
							<div className="info-item">
								<h5 className="info-title">Title</h5>
								<h5 className="info">the info</h5>
							</div>
							<div className="info-item">
								<h5 className="info-title">Title</h5>
								<h5 className="info">the info</h5>
							</div>
						</div>
						<div className="description">
							<p>lorem ipsum this is the paragraph of info</p>
						</div>
					</div>
				</div>
			</section>
		);
	}
}
