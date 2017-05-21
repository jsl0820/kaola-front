import React, { Component } from 'react';
import ProductNum from '../components/shopping-cart/ProductNum.jsx'
import TopBar from '../components/shopping-cart/TopBar.jsx'
import Product from '../components/shopping-cart/Product.jsx'
import CartItem from '../components/shopping-cart/CartItem.jsx'
import CheckBox from '../components/checkbox/CheckBox.jsx'

class Cart extends Component{

	render(){
		return (
			<div>
				{/*<CheckBox/>*/}
				<CartItem/>
			</div>
			)
	}
}

export default Cart;