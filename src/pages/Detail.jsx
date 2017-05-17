import React,{ Component } from 'react';
import TopNav from '../components/top-nav/TopNav.jsx';
import GoodsBanner from '../components/goods-banner/Banner.jsx';
import GoodsIntro from '../components/goods-intro/GoodsIntro.jsx';

import BackTop from '../components/back-top/BackTop.jsx';
const grayBarStyle={
	background: '#f1f1f1', 
	padding: '5px 10px', 
	fontSize:'13px',

}

const GrayBar = (props)=>(
	<div style={grayBarStyle}>{props.title}</div>
)

const BlockTips = ()=>(
	<div>
		<span></span>
		<span></span>
	</div>
	)

const Detail = ()=>(
	<div>
		<TopNav/>
		<GoodsBanner/>
		<GoodsIntro/>
		<GrayBar/>
		<BackTop/>
	</div>
	) 

export default Detail;