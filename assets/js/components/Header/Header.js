import React, { Component } from 'react';
import ReactDOM from 'react-dom';
// import update from 'immutability-helper';
// var classNames = require('classnames');
import FontAwesomeIcon from 'react-fontawesome';

export default class Header extends Component {
	constructor() {
		super();
		this.state = {};
	}

	render() {
		return (
			<header>
				<div className={'left-menu'}>
					<div className={'logo'}>GraigsList</div>
					<div className={'city-dropdown'}>
						St. Louis
						<FontAwesomeIcon name={'chevron-down'} />
					</div>
				</div>
				<div className={'right-menu'}>
					<div className={'user-img'}>img</div>
					<div className={'user-dropdown'}>
						my account <FontAwesomeIcon name={'chevron-down'} />
					</div>
					<div className={'post-btn'}>post to classifieds</div>
				</div>
			</header>
		);
	}
}
