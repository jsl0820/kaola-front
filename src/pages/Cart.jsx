import React, { Component } from 'react';
import TopBar from '../components/Common/topbar/TopBar.jsx';
import CartItem from '../components/Cart/CartItem.jsx';
import BuyBar from '../components/Cart/BuyBar.jsx';


class Cart extends Component{

	render(){
		return(
			<div>
				<TopBar title='选择规格'/>
				<CartItem/>
				<BuyBar/>
			</div>
		)
	}
}


export default Cart;