import React,{ Component } from 'react';
import TopCat from '../components/top-cat/TopCat.jsx'
import BannerCat from '../components/banner-cat/BannerCat.jsx'
import TopNavCat from '../components/top-nav-cat/TopNavCat.jsx'
import Selection from '../components/selection/Selection.jsx';
import Footer from '../components/footer/Footer.jsx';
import BackTop from '../components/back-top/BackTop.jsx';

const CatList =()=>{
	return (
		<div>
			<TopCat/>
			<BannerCat/>
			<TopNavCat/>
			<Selection/>
			<Footer/>
            <BackTop/>
		</div>
		) 
}

export default CatList