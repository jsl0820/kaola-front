import React,{ Component } from 'react';
import TopNav from '../components/top-nav/TopNav.jsx';
import GoodsBanner from '../components/goods-banner/Banner.jsx';
import GoodsIntro from '../components/goods-intro/GoodsIntro.jsx';
import DevideBar from '../components/devide-bar/DevideBar.jsx';
import Recommend from '../components/goods-recommend/Recommend.jsx';
import BackTop from '../components/back-top/BackTop.jsx';

const grayBarStyle={
	background: '#f1f1f1', 
	padding: '5px 10px', 
	fontSize:'13px',
}

const GrayBar = (props)=>(
	<div style={grayBarStyle}>{props.title}</div>
)

const Detail = ()=>(
	<div>
		<TopNav/>
		<GoodsBanner/>
		<GoodsIntro/>
		<DevideBar item={{title:'推荐',x:-79,y:-109}}/>
		<Recommend/>
		<DevideBar item={{title:'图文详情',x:-79,y:-109}}/>
		<BackTop/>
	</div>
	) 

export default Detail;