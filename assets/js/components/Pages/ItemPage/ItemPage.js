import React, { Component } from 'react';
import ReactDOM from 'react-dom';
// import update from 'immutability-helper';
// var classNames = require('classnames');

export default class ItemPage extends Component {
	constructor() {
		super();
		this.state = {};
	}

	render() {
		const { match, location, history } = this.props;
		return (
			<div id={'listings-container'}>
				City: {match.params.city} Category: {match.params.category} Listing:{' '}
				{match.params.listings} item: {match.params.item}
			</div>
		);
	}
}
