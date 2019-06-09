import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import update from 'immutability-helper';
// var classNames = require('classnames');
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faClock } from '@fortawesome/fontawesome-free-solid';

export default class ModelSelection extends Component {
	constructor() {
		super();
		this.state = {};
	}

	render() {
		return (
			<div className={'model form-group'}>
				<label>model</label>
				<select name="model" className="model">
					<option value="M3">M3</option>
					<option value="M5">M5</option>
				</select>
			</div>
		);
	}
}
