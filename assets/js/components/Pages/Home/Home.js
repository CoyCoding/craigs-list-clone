import React, { Component } from 'react';
import ReactDOM from 'react-dom';
// import update from 'immutability-helper';
// var classNames = require('classnames');

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import axios from 'axios';

export default class Home extends Component {
	constructor() {
		super();
		this.state = {
			categoryData: ''
		};
	}

	componentWillMount() {}

	render() {
		return (
			<div id={'home-container'}>
				<h2>home page</h2>
			</div>
		);
	}
}
