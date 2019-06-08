import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import update from 'immutability-helper';
var classNames = require('classnames');
import Header from './Header';
import Home from './pages/Home';

export default class App extends Component {
	constructor() {
		super();
		this.state = {};
	}

	render() {
		return (
			<div className={'container'}>
				<Header />
				<Home />
			</div>
		);
	}
}
