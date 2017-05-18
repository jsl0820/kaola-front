import React, { Component } from 'react'
import './style.css'

const Goods =[ 
	{
		title:'网易严选 时尚拉链尼龙双肩包',
		price:'129',
		origina:'300',
		picture:require('./images/800.webp')
	},
	{
		title:'网易严选 时尚拉链尼龙双肩包',
		price:'129',
		origina:'300',
		picture:require('./images/800.webp')
	},

	{
		title:'网易严选 时尚拉链尼龙双肩包',
		price:'129',
		origina:'300',
		picture:require('./images/800.webp')
	},
	{
		title:'网易严选 时尚拉链尼龙双肩包',
		price:'129',
		origina:'300',
		picture:require('./images/800.webp')
	},
	{
		title:'网易严选 时尚拉链尼龙双肩包',
		price:'129',
		origina:'300',
		picture:require('./images/800.webp')
	},
	];

const RecommendItem = ( props ) =>{

	let item = props.item;
	let point = props.point;

	let style={
		width:point.itemWidth,
		display:'block',
		overflow:'hidden',
	}

	return (
		<li className="recommend-item" style={style}>
			<a href="" >
				<img src={item.picture} alt=""/>
				<p className="recommend-item-title">{item.title}</p>
				<p className="recommend-item-price">
					<span>￥{item.price}</span>
					<del>￥{item.origina}</del>
				</p>
			</a>
		</li>
	)
}

const Recommend = ()=>{

	let count = Goods.length;
	let screenWidth = document.body.clientWidth;
	let itemWidth = (1/3)*(screenWidth-10);
	let realWidth = (count/3)*(screenWidth+20);

	let ulStyle={
		width:realWidth+'px',
		overflowX:'hidden',
	}

	let point={
		count:count,
		screenWidth:screenWidth,
		itemWidth:itemWidth,
	}

	let recommends = Goods.map((Goods,idx)=>{
			return <RecommendItem item={Goods}  point={point} key={'item'+idx}/>
		});

	return (
		<div className="recommend">
			<p className="recommend-h">小考拉推荐</p>
			<div className="recommend-scroll">
				<ul style={ulStyle}>
					{recommends}
				</ul>
			</div>
		</div>
	)}

export default Recommend
