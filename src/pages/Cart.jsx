import React, { Component } from 'react';
import TopBar from '../components/Common/topbar/TopBar.jsx';
import CartItem from '../components/Cart/CartItem.jsx';
import BuyBar from '../components/Cart/BuyBar.jsx';
import './Cart.css';

import { CART_ITEM } from './CartRedux.jsx';

// const product = {
// 		pid:1,
// 		name:'【官方直采】Merries 花王妙而舒 M王妙而M王妙而M王妙而M王妙而',
// 		choice:true,
// 		price:19.0,
// 		totalPrice:19.0
// 	};

class Cart extends Component{



	render(){

		let goodes = CART_ITEM;
		let catlist =  goodes.map((goodes,idx)=>{
			return <CartItem item={goodes} key={idx}/>
		})

		return(
			<div>
				<TopBar title='选择规格'/>
				{catlist}
				<BuyBar/>
			</div>
		)
	}
}


export default Cart;