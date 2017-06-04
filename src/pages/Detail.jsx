import React from 'react';
import TopNav from '../components/Detail/TopNav.jsx';
import GoodsBanner from '../components/Detail/Banner.jsx';
import GoodsIntro from '../components/Detail/GoodsIntro.jsx';
import DevideBar from '../components/Detail/DevideBar.jsx';
import Recommend from '../components/Detail/Recommend.jsx';
import GoodsDetail from '../components/Detail/GoodsDetail.jsx';
import BackTop from '../components/Common/back-top/BackTop.jsx';
import Footer from '../components/Common/footer/Footer.jsx';
import Shopping from '../components/Detail/Shopping.jsx';
import Setting from '../components/Detail/Setting.jsx';


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