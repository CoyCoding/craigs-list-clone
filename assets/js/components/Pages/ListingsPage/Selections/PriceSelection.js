import React, { Component } from 'react';
import ReactDOM from 'react-dom';
// import update from 'immutability-helper';
// var classNames = require('classnames');
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faClock } from '@fortawesome/fontawesome-free-solid';

export default class PriceSelection extends Component {
	constructor() {
		super();
		this.state = {};
	}

	render() {
		return (
			<div className={'price form-group'}>
				<label>Price</label>
				<div className="price-selections">
					<select name="min-price" className="min-price">
						<option value="0">0</option>
					</select>
					<select name="max-price" className="max-price">
						<option value="1000">1000</option>
					</select>
				</div>
			</div>
		);
	}
}
