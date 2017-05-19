import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';
import Home from './pages/Home.jsx';
import Detail from './pages/Detail.jsx';
import CatList from './pages/CatList.jsx';
import './static/App.css'

const App = ()=>{

	return (
		<Router>
			<switch>
				<Route path='/home' component={Home}/>
				<Route path='/detail' component={Detail}/>
				<Route path='/catlist' component={CatList}/>
			</switch>
		</Router>
	)
}

export default App;
