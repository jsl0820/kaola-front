import React, { Component } from 'react';
import Topbar from '../components/top/TopBar.js';
import Banner from '../components/banner/Banner.jsx';
import Column from '../components/column/Column.js';
import Cats from '../components/cats/Cats.jsx';
import Adv  from '../components/adv/Adv.jsx';
import Selection from '../components/selection/Selection.jsx';
import Footer from '../components/footer/Footer.jsx';

const Home = ()=>{

    return (
        <div>
            <Topbar/>
            <Banner/>
            <Column/>
            <Cats/>
            <Adv/>
           

        </div>
    )
}

export default Home;
