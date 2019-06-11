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
import ItemPage from './Pages/ItemPage/ItemPage';

export default class App extends Component {
	constructor() {
		super();
		this.state = {
			city: ''
		};
	}

	selectedCity = selectedCity => {
		this.setState({
			city: selectedCity
		});
	};

	render() {
		return (
			<Router>
				<Header city={this.state.city} />
				<div className="body">
					<Route exact path="/" component={Home} />
					<Route
						exact
						path="/:city"
						render={props => (
							<CitiesPage {...props} selectedCity={this.selectedCity} />
						)}
					/>
					<Route exact path="/:city/:category" component={CategoriesPage} />
					<Route
						exact
						path="/:city/:category/:listings"
						component={ListingsPage}
					/>
					<Route
						exact
						path="/:city/:category/:listings/:item"
						component={ItemPage}
					/>
				</div>
			</Router>
		);
	}
}
