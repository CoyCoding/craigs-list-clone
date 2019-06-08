import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import update from 'immutability-helper';
var classNames = require('classnames');

class App extends Component {
	constructor() {
		super();
		this.state = {};
	}

	render() {
		return <div className={'container'}>This is the home page</div>;
	}
}

const app = document.getElementById('app');

ReactDOM.render(<App />, app);
