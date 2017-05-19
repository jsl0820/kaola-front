import React,{ Component } from 'react';
import TopCat from '../components/top-cat/TopCat.jsx'
import BannerCat from '../components/banner-cat/BannerCat.jsx'
import TopNavCat from '../components/top-nav-cat/TopNavCat.jsx'

const CatList =()=>{
	return (
		<div>
			<TopCat/>
			<BannerCat/>
			<TopNavCat/>
		</div>
		) 
}

export default CatList