import React, { Component } from 'react'
import './style.css'


const RecommendItem = ()=>{

	let  screenWidth = document.body.clientWidth;
	let itemWidth = (1/3)*(screenWidth-20);

	console.log((1/3)*(screenWidth-20));

	let style={
		width:itemWidth,
		display:'block',
		// background:'#ccc',
		overflow:'hidden',
	}


	return (
		<li className="recommend-item" style={style}>
			<a href="" >
				<img src={require('./images/800.webp')} alt=""/>
				<p className="recommend-item-title">网易严选 时尚拉链尼龙双肩包</p>
				<p className="recommend-item-price">
					<span>￥129</span>
					<del>￥1222</del>
				</p>
			</a>
		</li>
	)
}


const Recommend = ()=>{

	let ulStyle={
		width:'400%',
		overflow:'hidden',
	}

	return (
	<div className="recommend">
		<p className="recommend-h">小考拉推荐</p>
		<ul style={ulStyle}>
			<RecommendItem/>
			<RecommendItem/>
			<RecommendItem/>
			<RecommendItem/>
			<RecommendItem/>
		</ul>
	</div>
	)}

export default Recommend
