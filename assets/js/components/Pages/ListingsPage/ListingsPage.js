import React, { Component } from 'react';
import ReactDOM from 'react-dom';
// import update from 'immutability-helper';
// var classNames = require('classnames');
import PriceSelection from './Selections/PriceSelection';
import MakeSelection from './Selections/MakeSelection';
import ModelSelection from './Selections/ModelSelection';
import Buttons from './Buttons/Buttons';
import FilterSelection from './Selections/FilterSelection';
import ItemGrid from './ItemGrid/ItemGrid';

export default class ListingsPage extends Component {
	constructor() {
		super();
		this.state = {};
	}

	render() {
		const { match, location, history } = this.props;
		return (
			<div id={'listings-container'}>
				<section className={'item-filters'}>
					<PriceSelection />
					<MakeSelection />
					<ModelSelection />
					<Buttons />
				</section>
				<section className="item-list">
					<FilterSelection />
					<ItemGrid />
				</section>
			</div>
		);
	}
}
