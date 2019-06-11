import React, { Component } from 'react';
import ReactDOM from 'react-dom';
// import update from 'immutability-helper';
// var classNames = require('classnames');
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export default class Categories extends Component {
	constructor() {
		super();
		this.state = {};
	}

	loadCategories = () => {
		//if promise not resolved return loading
		if (this.props.categoryInfo != '') {
			//else loop categories dom nodes
			return this.props.categoryInfo.map((category, index) => {
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

	render() {
		return <section id={'categories'}>{this.loadCategories()}</section>;
	}
}
