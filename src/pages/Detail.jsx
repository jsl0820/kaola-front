import React,{ Component } from 'react';
import TopNav from '../components/top-nav/TopNav.jsx';
import GoodsBanner from '../components/goods-banner/Banner.jsx';
import GoodsIntro from '../components/goods-intro/GoodsIntro.jsx';
import DevideBar from '../components/devide-bar/DevideBar.jsx';
import Recommend from '../components/goods-recommend/Recommend.jsx';
import GoodsDetail from '../components/goods-detail/GoodsDetail.jsx';
import BackTop from '../components/back-top/BackTop.jsx';
import Footer from '../components/footer/Footer.jsx';
import Shopping from '../components/shopping/Shopping.jsx';
import Setting from '../components/shopping-set/Setting.jsx';


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
		<GrayBar/>
		<Setting/>
		<DevideBar item={{title:'推荐',x:-79,y:-109}}/>
		<Recommend/>
		<DevideBar item={{title:'详情',x:-79,y:-109}}/>
		<GoodsDetail/>
		<Footer/>
		<BackTop/>
		<Shopping/>
	</div>
	) 

export default Detail;