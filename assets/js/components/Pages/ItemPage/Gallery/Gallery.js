import React, { Component } from 'react';
// import update from 'immutability-helper';
// var classNames = require('classnames');
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

function Gallery(props) {
	const loadImages = () => {
		console.log(props);
		const slugs = props.images;
		return slugs.map((slug, index) => {
			return (
				<img
					key={index}
					src={slug}
					onClick={props.thumbnailsClick.bind(null, index)}
					className="thumb-img"
				/>
			);
		});
	};

	return (
		<div className="media-row">
			<div className="gallery">
				<div className="slider">
					<div
						className="main-image"
						style={{
							backgroundImage: `url('${props.images[props.mainImgIndex]}')`
						}}
					>
						<span
							onClick={props.prevClick}
							className="left-arrow slide-selection"
						>
							<FontAwesomeIcon icon="chevron-left" />
						</span>
						<span
							onClick={props.nextClick}
							className="right-arrow slide-selection"
						>
							<FontAwesomeIcon icon="chevron-right" />
						</span>
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
