import React, { Component } from 'react';
import './goodsintro.css';


const GoodsIntro = (props)=>{
	
	let { detail } = props;

	return(
		<div className="goods-intro">
			<div className="goods-intro-price">
				<span>￥ <b>{detail.price}</b></span>
				<span className="single-price">单件￥282.67</span>
				<span className="single-price">包税</span>
			</div>
			<div className="goods-intro-wrap"> </div>
			<div className="goods-intro-content">
				<h4>{detail.name}</h4>
				<p>{detail.intro}</p>
			</div>
			<div className="goods-intro-sub">
				<img src={require('./images/10001.png')} /> <span>{detail.brand}</span>
			</div>
		</div>
		)
	}

export default GoodsIntro;