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

	render() {
		return (
			<section className="view-filters">
				<select name="view-dropdown" className="view-dropdown">
					<option value="grid-view">Grid-View</option>
					<option value="column-view">Column-View</option>
				</select>
				<select name="date-dropdown" className="date-dropdown">
					<option value="newest">Newest</option>
					<option value="oldest">Oldest</option>
				</select>
			</section>
		);
	}
}
