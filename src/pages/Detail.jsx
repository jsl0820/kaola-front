import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

import TopNav from '../components/Detail/TopNav.jsx';
import GoodsBanner from '../components/Detail/Banner.jsx';
import GoodsIntro from '../components/Detail/GoodsIntro.jsx';
import DevideBar from '../components/Detail/DevideBar.jsx';
import Recommend from '../components/Detail/Recommend.jsx';
import GoodsDetail from '../components/Detail/GoodsDetail.jsx';
import BackTop from '../components/Common/back-top/BackTop.jsx';
import Footer from '../components/Common/footer/Footer.jsx';
// import Shopping from '../components/Detail/Shopping.jsx';

import Shopping from '../components/Detail/BuyBar.jsx';
import Setting from '../components/Detail/Setting.jsx';


import { DETAIL_BANNER, DETAIL_GOODS, DETAIL_IMG, RECOMMEND} from './DetailRedux.jsx';

const grayBarStyle={
	background: '#f1f1f1', 
	padding: '5px 10px', 
	fontSize:'13px',
}

const GrayBar = (props)=>(
	<div style={grayBarStyle}>{props.title}</div>
)

const Goods = ()=>(
	<div>
		<TopNav/>
		<GoodsBanner banner={DETAIL_BANNER} />
		<GoodsIntro detail={DETAIL_GOODS}/>
		<GrayBar/>
		<Setting/>
		<DevideBar item={{title:'推荐',x:-79,y:-109}}/>
		<Recommend recommend={RECOMMEND}/>
		<DevideBar item={{title:'详情',x:-79,y:-109}}/>
		<GoodsDetail img={DETAIL_IMG}/>
		<Footer/>
		<BackTop/>
	</div>
) 


const Detail=({match})=>{

	let page = match.params.page;
	let part = <Goods/>;

	
	return (
		<div>
			{part}
			<Shopping showPage={page} />
		</div>
	)
}



export default Detail;