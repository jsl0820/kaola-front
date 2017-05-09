import React, { Component } from 'react';
import './App.css';

import Top from './Top/Top.js';
import Banner from './Banner/Banner.js';
import Nav from './Nav/Nav.js';
import Cats from './Cats/Cats.js';
import Adv from './Adv/Adv.js';
import Selection from './Selection/Selection.js';
import Footer from './Footer/Footer.js';

class App extends Component {
  
  render() {
  	
    return (
      <div>
          <Top/>
          <Banner/>
          <Nav/>
          <Adv/>
          <Cats/>
          <Selection/>
          <Footer/>
      </div>
    );
  }
}
export default App;
