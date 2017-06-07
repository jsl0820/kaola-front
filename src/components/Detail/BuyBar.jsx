import React,{ Component } from 'react';
import { Link }  from 'react-router-dom';

import './buybar.css' 

const Button = () =>{

	return  <div className="shop-buttons">
				<Link to='/detail/AddCart/1'>
					<div style={{background:'#ff8587'}}>加入购物车</div>
				</Link>
				<Link to='/detail/BuyNow/1'>
					<div style={{background:'#e31436'}}>立即购买</div>
				</Link>
		    </div> 
}

class BuyNow extends Component{

	handleClick(){
		console.log('111');
	}
	
	render(){
		return (
			<div className="buynow" onClick={this.handleClick.bind(this)} >确定购买</div>
		)
	}
}

class DefaultBar extends Component{

	render(){
		return (
			<div className="shopping-default"> 
			 	<div className="shopping-cart">购物车</div>
			 	<Button/> 
			</div>
		)
	}
}


class AddCart extends Component{

	render(){
		return (
			<div className="shopping-addcart-box">
				<div className="shopping-cart">购物车</div>
				<div className="shopping-addcart">
				确认加入</div>
			</div> 
		)
	}
}

export default class Shopping extends Component{
	
	
	render(){ 

		let { showPage } = this.props;
		let part;

		switch (showPage) {
			case 'DefaultBar':
				part = <DefaultBar/>
				break;
			case 'AddCart':
				part = <AddCart/>
				break;
			case 'BuyNow':
				part = <BuyNow/>
				break;
			default:
				break;
		}
					  
		return (
			<div className='shopping'>
				<div className="shopping-collection">收藏</div>
				{part}
			</div>
		)
	}
}



