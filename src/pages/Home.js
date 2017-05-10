import React, { Component } from 'react';
import Topbar from '../components/top/TopBar.js';
import Banner from '../components/banner/Banner.jsx';
import Column from '../components/column/Column.js';

// import Cats from './components/cats/Cats.js';
// import Adv from './components/adv/Adv.js';
// import Selection from './components/selection/Selection.js';
// import Footer from './components/footer/Footer.js';

const Home = ()=>{

    return (
        <div>
            <Topbar/>
            <Banner/>
            <Column/>
        </div>
    )
}

export default Home;
