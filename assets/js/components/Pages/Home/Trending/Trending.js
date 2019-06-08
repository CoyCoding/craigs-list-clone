import React, { Component } from 'react';
import ReactDOM from 'react-dom';
// import update from 'immutability-helper';
// var classNames = require('classnames');
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faClock } from '@fortawesome/fontawesome-free-solid';

export default class Home extends Component {
	constructor() {
		super();
		this.state = {};
	}

	trendingTags = () => {
		const tags = [1, 2, 3, 4, 5, 6, 7, 8, 9];
		return tags.map((tag, index) => {
			return <div key={index}>Macbook Pro</div>;
		});
	};

	render() {
		return (
			<section id="trending">
				<input
					type="text"
					name="search"
					className="seach"
					placeholder="search"
				/>
				<div className="trending-title">
					<p>
						<FontAwesomeIcon icon="clock" /> Now Trending
					</p>
				</div>
				<TrendingSearches trendingTags={this.trendingTags} />
			</section>
		);
	}
}

const TrendingSearches = props => {
	return <div className="trending-items">{props.trendingTags()}</div>;
};
