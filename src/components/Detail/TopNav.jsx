import React,{ Component } from 'react';
import Img from '../../static/img/producticon.png';
import './topnav.css';


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
			current:1
		}
	}

	itemNav = (index) => {
        return index === this.state.current ? 'insert cur' : '';
    }

	render(){
		return (
			<header className="top-nav">
				<span style={arrow}></span>
				<ul>
					<li className={this.itemNav(1)} onClick={()=>{this.setState({current:1})}}> 商品 </li>
					<li className={this.itemNav(2)} onClick={()=>{this.setState({current:2})}}> 评价 </li>
					<li className={this.itemNav(3)} onClick={()=>{this.setState({current:3})}}> 推荐 </li>
					<li className={this.itemNav(4)} onClick={()=>{this.setState({current:4})}}> 详情 </li>
				</ul>
				<span style={home}></span>
			</header>
			)
	}
}

export default TopNav;
