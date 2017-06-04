import React from 'react';

import Topbar from '../components/Home/TopBar.jsx';
import Banner from '../components/Home/Banner.jsx';
import Cats from '../components/Home/Cats.jsx';
import Advert  from '../components/Home/Advert.jsx';
import HotGoods from '../components/Home/HotGoods.jsx';
import Footer from '../components/Common/footer/Footer.jsx';
import BackTop from '../components/Common/back-top/BackTop.jsx';


import { HOT_GOODS, BANNER_IMG } from './HomeRedux.jsx';

const Home = ()=>{
    return (
        <div>
            <Topbar/>
            <Banner banner={BANNER_IMG}/>
            <Cats/>
            <Advert/>
            <HotGoods goodes={HOT_GOODS} />
            <Footer/>
            <BackTop/>
        </div>
    )
}

export default Home;
