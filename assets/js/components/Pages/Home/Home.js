import React, { Component } from 'react';
import ReactDOM from 'react-dom';
// import update from 'immutability-helper';
// var classNames = require('classnames');
import Categories from './Categories/Categories';
import Trending from './Trending/Trending';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import axios from 'axios';

export default class Home extends Component {
	constructor() {
		super();
		this.state = {
			categoryData: ''
		};
	}

	componentWillMount() {
		const self = this;
		axios
			.get('/api/categories')
			.then(function(res) {
				console.log(res.data);
				self.setState({
					categoryData: res.data
				});
			})
			.catch(function(error) {
				console.log(error);
			});
	}

	render() {
		return (
			<div id={'home-container'}>
				<h1>
					Surf the Web,
					<br />
					Sail the Yard
				</h1>
				<Categories categoryInfo={this.state.categoryData} />
				<Trending />
			</div>
		);
	}
}
