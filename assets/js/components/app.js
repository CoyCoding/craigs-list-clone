import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, NavLink } from 'react-router-dom';
// import update from 'immutability-helper';
// var classNames = require('classnames');
import Header from './Header/Header';
import Home from './Pages/Home/Home';
import Listings from './Pages/Listings/Listings';

export default class App extends Component {
	constructor() {
		super();
		this.state = {};
	}

	render() {
		return (
			<Router>
				<div className={'container'}>
					<Header />
					<div className="body">
						<Route exact path="/" component={Home} />
						<Route exact path="/stl/community/artists" component={Listings} />
					</div>
				</div>
			</Router>
		);
	}
}
