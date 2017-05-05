import React, { Component } from 'react';
import './Selection.css';
import Item from './Item.js';

class Selection extends Component{

	render(){

		return (
			<a className="selection-box" href="#">
				<Item/>
				<Item/>
			</a>
			)
	}
}

export default Selection;