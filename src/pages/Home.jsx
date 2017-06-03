import React, { Component } from 'react';

import Topbar from '../components/Home/TopBar.jsx';
import Banner from '../components/Home/Banner.jsx';
import Cats from '../components/Home/Cats.jsx';
import Advert  from '../components/Home/Advert.jsx';
import Selection from '../components/Home/Selection.jsx';
import Footer from '../components/Common/footer/Footer.jsx';
import BackTop from '../components/Common/back-top/BackTop.jsx';


import { HOT_GOODS } from './HomeRedux.jsx';


const Home = ()=>{
    return (
        <div>
            <Topbar/>
            <Banner/>
            <Cats/>
            <Advert/>
            <Selection goodes={HOT_GOODS} />
            <Footer/>
            <BackTop/>
        </div>
    )
}

export default Home;
