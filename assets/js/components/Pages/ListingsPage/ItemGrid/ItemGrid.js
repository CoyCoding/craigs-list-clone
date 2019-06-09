import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import update from 'immutability-helper';
// var classNames = require('classnames');
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faClock } from '@fortawesome/fontawesome-free-solid';

export default class FilterSelection extends Component {
	constructor() {
		super();
		this.state = {};
	}

	loadItemsForGrid = () => {
		const items = [1, 2, 3, 4, 5, 6, 7, 8, 9];
		return items.map((tag, index) => {
			return (
				<div key={index} className="item">
					<div className="item-img">
						<div>$Price</div>
					</div>
					<div className="info">
						<div className="item-info">
							<h5>Title/Description</h5>
							<h6>Date Posted</h6>
						</div>
						<div className="favorite">
							<FontAwesomeIcon icon="star" />
						</div>
					</div>
				</div>
			);
		});
	};

	render() {
		return (
			<section className="item-grid">
				<Item items={this.loadItemsForGrid} />
			</section>
		);
	}
}

const Item = props => {
	return <>{props.items()}</>;
};
