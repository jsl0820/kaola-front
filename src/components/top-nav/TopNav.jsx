import React,{ Component } from 'react';
import Img from '../../static/img/producticon.png';
import './style.css';


const arrow={
	position:'absolute',
	display:'block',
	width:'45px',
	height:'45px',
	left:0,
	top:0,
	background:`url(${Img}) no-repeat 0px 8px`,
	backgroundSize: '200px'
	
}

const home={
	display:'block',
	width:'45px',
	height:'45px',
	position:'absolute',
	right:0,
	top:0,
	background:`url(${Img}) no-repeat -28px 8px`,
	backgroundSize: '200px'
}



class TopNav extends Component{

	constructor(props) {
		super(props)
		this.state = {
			click:true
		}
	}



	handleClick(){
		var item = document.getElemeentByclass('item');
		console.log(item); 
		
	}

	render(){
		return (
			<header className="top-nav">
				<span style={arrow}></span>
				<ul>
					<li className="item" onClick={this.handleClick.bind(this)}> 商品 </li>
					<li className="item" onClick={this.handleClick.bind(this)}> 评价 </li>
					<li className="item" onClick={this.handleClick.bind(this)}> 推荐 </li>
					<li className="item" onClick={this.handleClick.bind(this)}> 详情 </li>
				</ul>
				<span style={home}></span>
			</header>
			)
	}
}


	

export default TopNav;
