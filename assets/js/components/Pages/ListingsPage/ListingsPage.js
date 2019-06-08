import React, { Component } from 'react';
import ReactDOM from 'react-dom';
// import update from 'immutability-helper';
// var classNames = require('classnames');
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faClock } from '@fortawesome/fontawesome-free-solid';
import PriceSelection from './Selections/PriceSelection';

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
					<div className={'make form-group'}>
						<lable>Make</lable>
						<select name="make" className="make">
							<option value="Audi">Audi</option>
							<option value="BMW">BMW</option>
						</select>
					</div>
					<div className={'model form-group'}>
						<lable>model</lable>
						<select name="model" className="model">
							<option value="M3">M3</option>
							<option value="M5">M5</option>
						</select>
					</div>
					<div className="filter-btns">
						<div className="update-btn">Update</div>
						<div className="reset-btn">Reset</div>
					</div>
				</section>
				<section className="item-list">
					<section className="view-filters">
						<select name="view-dropdown" className="view-type">
							<option value="grid-view">Grid-View</option>
							<option value="column-view">Column-View</option>
						</select>
						<select name="date-dropdown" className="sort-by-date">
							<option value="newest">Newest</option>
							<option value="oldest">Oldest</option>
						</select>
					</section>
					<section className="item-grid">
						<div className="item">
							<div className="item-img">
								<div>$Price</div>
							</div>
							<div className="info">
								<div className="item-info">
									<h6>Title/Description</h6>
									<h7>Date Posted</h7>
								</div>
								<div className="favorite">
									<FontAwesomeIcon icon="star" />
								</div>
							</div>
						</div>
					</section>
				</section>
			</div>
		);
	}
}
