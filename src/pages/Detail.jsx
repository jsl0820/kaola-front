import React from 'react';

import TopNav from '../components/Detail/TopNav.jsx';
import GoodsBanner from '../components/Detail/Banner.jsx';
import GoodsIntro from '../components/Detail/GoodsIntro.jsx';
import DevideBar from '../components/Detail/DevideBar.jsx';
import Recommend from '../components/Detail/Recommend.jsx';
import GoodsDetail from '../components/Detail/GoodsDetail.jsx';
import BackTop from '../components/Common/back-top/BackTop.jsx';
import Footer from '../components/Common/footer/Footer.jsx';

import BuyBar from '../components/Detail/BuyBar.jsx';
import Setting from '../components/Detail/Setting.jsx';

import { TopBar, Product, ProNum } from '../components/Detail/ShopCart.jsx';


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


const ShopCart=()=>(
	<div>
		<TopBar/>
		<Product/>
		<ProNum/>
	</div>
)



const Detail=({match})=>{

	let page = match.params.page;
	let part;

	if(page==='DefaultBar'){
		part = <Goods/>
	}else{
		part = <ShopCart/>
	}
	
	return (
		<div>
			{part}
			<BuyBar showPage={page} />
		</div>
	)
}



export default Detail;