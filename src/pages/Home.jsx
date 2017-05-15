import React, { Component } from 'react';
import Topbar from '../components/top/TopBar.js';
import Banner from '../components/banner/Banner.jsx';
import Column from '../components/column/Column.js';
import Cats from '../components/cats/Cats.jsx';
import Advert  from '../components/adv/Advert.jsx';
import Selection from '../components/selection/Selection.jsx';
import Footer from '../components/footer/Footer.jsx';

const Home = ()=>{
    return (
        <div>
            <Topbar/>
            <Banner/>
            <Column/>
            <Cats/>
            <Advert/>
            <Selection/>
            <Footer/>
        </div>
    )
}

export default Home;
