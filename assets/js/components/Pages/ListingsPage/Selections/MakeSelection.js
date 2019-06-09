import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import update from 'immutability-helper';
// var classNames = require('classnames');
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faClock } from '@fortawesome/fontawesome-free-solid';

export default class MakeSelection extends Component {
	constructor() {
		super();
		this.state = {};
	}

	render() {
		return (
			<div className={'make form-group'}>
				<label>Make</label>
				<select name="make" className="make">
					<option value="Audi">Audi</option>
					<option value="BMW">BMW</option>
				</select>
			</div>
		);
	}
}
