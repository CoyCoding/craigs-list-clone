import React, { Component } from 'react';
// import update from 'immutability-helper';
// var classNames = require('classnames');
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';

function Gallery(props) {
	const loadImages = () => {
		console.log(props);
		const slugs = props.images;
		return slugs.map((slug, index) => {
			return <img key={index} src={slug} className="thumb-img" />;
		});
	};
	return (
		<div className="media-row">
			<div className="gallery">
				<div className="slider">
					<div
						className="main-image"
						style={{ backgroundImage: `url('${props.mainImgSrc}')` }}
					>
						<div className="left-arrow slide-selection">{'<'}</div>
						<div className="right-arrow slide-selection">{'>'}</div>
					</div>
				</div>
				<Thumbnails loadImages={loadImages} />
			</div>
		</div>
	);
}

const Thumbnails = props => {
	return <div className="thumbnails">{props.loadImages()}</div>;
};

export default Gallery;
