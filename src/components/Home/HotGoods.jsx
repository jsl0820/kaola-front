import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import './hotgoods.css';	

class HotGoods extends Component{

	constructor(props){
		super(props)
	}

	render(){

		let { goodes } = this.props;
		let goodsItem = goodes.map((goodes,index)=>{
			return <Item item={goodes} key={index}/>
		})

		return (
			<div className="selection-box" href="#">
				<div className="selection-cont">
					{goodsItem}
				</div>
			</div>
		)
	}
}

const Item = (props)=>{

	let { item } = props;
	let { id, name, picture, pack, domestic, price, tip } = item;

	return (
		<Link to="/detail">
			<div className="selection-item">
				<img src={require(picture)} alt={name}/>
				<div className="selection-title">
					<p className="selection-goods"><span>{pack} |</span>{name}</p>
					<p className="selection-price">国内价￥<del>{domestic}</del></p>
					<p>售价￥{price} <span className="selection-title-discount">{tip}</span></p>
				</div>
			</div>
		</Link>
	)
}


	

export default HotGoods;