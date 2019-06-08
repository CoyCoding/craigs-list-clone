import React, { Component } from 'react';
import ReactDOM from 'react-dom';
// import update from 'immutability-helper';
// var classNames = require('classnames');
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faClock } from '@fortawesome/fontawesome-free-solid';

export default class Categories extends Component {
	constructor() {
		super();
		this.state = {};
	}

	loadCategories = () => {
		const testArray = [1, 2, 3, 4, 5, 6, 7];
		return testArray.map((category, index) => {
			return (
				<div className="category-box" key={index}>
					<div className={'title'}>community</div>
					<div className="link-box">
						<a href="#" className="link">
							community
						</a>
						<a href="#" className="link">
							community
						</a>
						<a href="#" className="link">
							community
						</a>
						<a href="#" className="link">
							community
						</a>
						<a href="#" className="link">
							community
						</a>
						<a href="#" className="link">
							community
						</a>
						<a href="#" className="link">
							community
						</a>
						<a href="#" className="link">
							community
						</a>
					</div>
				</div>
			);
		});
	};

	render() {
		return <section id={'categories'}>{this.loadCategories()}</section>;
	}
}
