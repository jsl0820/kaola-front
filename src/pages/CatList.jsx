import React from 'react';

import TopCat from '../components/CatList/TopCat.jsx'
import BannerCat from '../components/CatList/BannerCat.jsx'
import TopNavCat from '../components/CatList/TopNavCat.jsx'
import Selection from '../components/Common/selection/Selection.jsx';
import Footer from '../components/Common/footer/Footer.jsx';
import BackTop from '../components/Common/back-top/BackTop.jsx';

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