import React, { Component } from 'react';
import ProductNum from '../components/shopping-cart/ProductNum.jsx'
import TopBar from '../components/shopping-cart/TopBar.jsx'
import Product from '../components/shopping-cart/Product.jsx'
import CartItem from '../components/shopping-cart/CartItem.jsx'
import CheckBox from '../components/checkbox/CheckBox.jsx'
import Statement from '../components/shopping/Shopping.jsx'

import { createStore } from 'redux';
import { Provider } from 'react-redux';
import handleCart from './CartRedux.jsx'

let store = createStore(handleCart);


class App extends Component{
	render(){

		<div>
			<TopBar/>
			<CartItem/>
			<CartItem/>
			<Statement/>
		</div>
	}
}



class Cart extends Component{

	render(){
		return (
			<Provider store={store}>
				<App/>
	 		</Provider>
		)
	}
}

export default Cart;