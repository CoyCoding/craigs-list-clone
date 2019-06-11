import React, { Component } from 'react';
import ReactDOM from 'react-dom';
// import update from 'immutability-helper';
// var classNames = require('classnames');
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Categories from './Categories/Categories';
import Trending from './Trending/Trending';
import axios from 'axios';

export default class CitiesPage extends Component {
	constructor() {
		super();
		this.state = {
			categoryData: '',
			city: ''
		};
	}

	componentWillMount() {
		const self = this;
		//set the state of the current city
		self.setState(
			{
				city: self.props.match.params.city
			},
			() => {
				//then used parent prop selectedCity to set the selectedCity in the parent for the header
				self.props.selectedCity(this.state.city);
				axios
					.get(`/api/${this.state.city}/categories`)
					.then(function(res) {
						self.setState({
							categoryData: res.data
						});
					})
					.catch(function(error) {
						console.log(error);
					});
			}
		);
	}

	render() {
		return (
			<div id={'home-container'}>
				<Categories
					categoryData={this.state.categoryData}
					city={this.state.city}
				/>
				<Trending city={this.state.city} />
			</div>
		);
	}
}
