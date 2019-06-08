import React, { Component } from 'react';
import ReactDOM from 'react-dom';
// import update from 'immutability-helper';
// var classNames = require('classnames');
import Categories from './Categories/Categories';
import Trending from './Trending/Trending';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faClock } from '@fortawesome/fontawesome-free-solid';

export default class Home extends Component {
	constructor() {
		super();
		this.state = {};
	}

	render() {
		return (
			<div id={'home-container'}>
				<h1>
					Surf the Web,
					<br />
					Sail the Yard
				</h1>
				<Categories />
				<Trending />
			</div>
		);
	}
}
