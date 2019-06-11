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

	componentDidMount() {}

	render() {
		return (
			<div id={'home-container'}>
				<h1>
					Surf the Web,
					<br />
					Sail the Yard
				</h1>
			</div>
		);
	}
}
