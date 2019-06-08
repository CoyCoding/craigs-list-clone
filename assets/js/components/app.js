import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, NavLink } from 'react-router-dom';
// import update from 'immutability-helper';
// var classNames = require('classnames');
import Header from './Header/Header';
import Home from './Pages/Home/Home';
import ListingsPage from './Pages/ListingsPage/ListingsPage';
import CategoriesPage from './Pages/CategoriesPage/CategoriesPage';
import CitiesPage from './Pages/CitiesPage/CitiesPage';

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
						<Route exact path="/:city" component={CitiesPage} />
						<Route exact path="/:city/:category" component={CategoriesPage} />
						<Route
							exact
							path="/:city/:category/:listings"
							component={ListingsPage}
						/>
					</div>
				</div>
			</Router>
		);
	}
}
