import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import update from 'immutability-helper';
// var classNames = require('classnames');

const UpdateBtn = props => {
	return <div className="update-btn">Update</div>;
};

const ResetBtn = props => {
	return <div className="reset-btn">Reset</div>;
};

export default class Buttons extends Component {
	constructor() {
		super();
		this.state = {};
	}

	render() {
		return (
			<div className="filter-btns">
				<UpdateBtn />
				<ResetBtn />
			</div>
		);
	}
}
