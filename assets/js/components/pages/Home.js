import React, { Component } from 'react';
import ReactDOM from 'react-dom';
// import update from 'immutability-helper';
// var classNames = require('classnames');
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faClock } from '@fortawesome/fontawesome-free-solid';

export default class App extends Component {
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
		return (
			<div id={'home-container'}>
				<h1>
					Surf the Web
					<br />
					Sail the Yard
				</h1>
				<section id={'categories'}>{this.loadCategories()}</section>
				<section id="trending">
					<input
						type="text"
						name="search"
						className="seach"
						placeholder="search"
					/>
					<div className="trending-title">
						<FontAwesomeIcon icon="clock" />
					</div>
				</section>
			</div>
		);
	}
}
