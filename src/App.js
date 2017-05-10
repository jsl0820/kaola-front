import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import Home from './pages/Home.js';
import './App.css'

const App = ()=>(
	<Router>
		<Route path="/" component={Home}/>
	</Router>
)

export default App;
