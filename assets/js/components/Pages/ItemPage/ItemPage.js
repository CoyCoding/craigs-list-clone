import React, { Component } from 'react';
import ReactDOM from 'react-dom';
// import update from 'immutability-helper';
// var classNames = require('classnames');
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';

export default class ItemPage extends Component {
	constructor() {
		super();
		this.state = {};
	}

	loadImages = () => {
		const imgSlugs = [1, 2, 3, 4, 5, 6, 7, 8];
		return imgSlugs.map((slug, index) => {
			return (
				<img
					key={index}
					src="https://static.carsdn.co/cldstatic/wp-content/uploads/img-672890494-1551980882647.jpg"
					className="thumb-img"
				/>
			);
		});
	};

	render() {
		const { match, location, history } = this.props;
		return (
			<div id={'listings-container'}>
				<section>
					<div className="media-row">
						<div className="gallery">
							<div className="slider">
								<div className="main-image">
									<div className="left-arrow">{'<'}</div>
									<div className="right-arrow">{'>'}</div>
								</div>
							</div>
							<Thumbnails loadImages={this.loadImages} />
						</div>
					</div>
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
				</section>
			</div>
		);
	}
}

const Thumbnails = props => {
	return <div className="thumbnails">{props.loadImages()}</div>;
};
