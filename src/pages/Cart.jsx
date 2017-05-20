import React, { Component } from 'react';
import ProductNum from '../components/shopping-cart/ProductNum.jsx'
import TopBar from '../components/shopping-cart/TopBar.jsx'
import Product from '../components/shopping-cart/Product.jsx'




class Cart extends Component{

	render(){
		return (
			<div>
				<TopBar/>
				<Product/>
				<ProductNum/>
			</div>
			)
	}
}

export default Cart;