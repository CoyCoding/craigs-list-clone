import React, { Component } from 'react';
import ReactDOM from 'react-dom';
// import update from 'immutability-helper';
// var classNames = require('classnames');
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export default function Categories(props) {
	if (props.categoryData != '') {
		return <CategorySection categoryData={props.categoryData} />;
	} else {
		return 'loading...';
	}
}

//loops through and creates each CategoryLink
const listingLoop = (category, index) => {
	return category.listings.map((listing, index) => {
		return <CategoryLink key={index} category={category} listing={listing} />;
	});
};

//Returns a Link for a listing in the category
const CategoryLink = props => {
	return (
		<a href={`${props.category.title}/${props.listing.slug}`} className="link">
			{props.listing.name}
		</a>
	);
};

//loops through and creates each CategorySection
const categoryLoop = categoryData => {
	return categoryData.map((category, index) => {
		return (
			<div key={index} className="category-box">
				<div className={'title'}>{category.title}</div>
				<div className="link-box">{listingLoop(category, index)}</div>
			</div>
		);
	});
};

//returns the category section complete
const CategorySection = props => {
	return (
		<section id={'categories'}>{categoryLoop(props.categoryData)}</section>
	);
};
