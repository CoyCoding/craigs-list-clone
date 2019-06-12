import React, { Component } from 'react';
import ReactDOM from 'react-dom';
// import update from 'immutability-helper';
// var classNames = require('classnames');
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export default function Categories(props) {
	const loadCategories = () => {
		//if categoryData promise not resolved return loading
		if (props.categoryData != '') {
			//else loop categories mount each category node
			return props.categoryData.map((category, index) => {
				//for each listing in current category mount listings
				let loopListings = () => {
					return category.listings.map((listing, index) => {
						return (
							<a
								key={index}
								href={`${category.title}/${listing.slug}`}
								className="link"
							>
								{listing.name}
							</a>
						);
					});
				};
				return (
					<div className="category-box" key={index}>
						<div className={'title'}>{category.title}</div>
						<div className="link-box">{loopListings()}</div>
					</div>
				);
			});
		} else {
			return 'loading...';
		}
	};

	return <section id={'categories'}>{loadCategories()}</section>;
}
