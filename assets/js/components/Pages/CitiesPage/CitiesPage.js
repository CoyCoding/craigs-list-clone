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

	componentwillReciveprops(props) {
		this.setState({ city: props.match.params.city });
	}

	componentWillMount() {
		const self = this;
		console.log(self.props);
		self.props.selectedCity(self.props.match.params.city);
		axios
			.get('/api/categories')
			.then(function(res) {
				self.setState({
					categoryData: res.data
				});
			})
			.catch(function(error) {
				console.log(error);
			});
	}

	render() {
		const { match, location, history } = this.props;
		return (
			<div id={'home-container'}>
				<Categories
					categoryInfo={this.state.categoryData}
					city={this.state.city}
				/>
				<Trending city={this.state.city} />
			</div>
		);
	}
}
