import React, { Component } from 'react';
import './style.css';

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

const Item = ()=>{

	let img = require('./Img/s1.webp');
	return (
		<div className="selection-item">
			<img src={img} alt=""/>
			<div className="selection-title">
				<p className="selection-goods"><span>2包装 |</span>【官方直采】Merries 花王妙而舒 M 64片/包 2包装 纸尿裤/尿不湿</p>
				<p className="selection-price">国内价￥<del>359</del></p>
				<p>售价￥176 <span className="selection-title-discount">单包￥88</span></p>
			</div>
		</div>
	)
}


	

export default Selection;