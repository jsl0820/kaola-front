import React, { Component } from 'react';
import TopBar from '../components/Common/topbar/TopBar.jsx';
import CartItem from '../components/Cart/CartItem.jsx';
import BuyBar from '../components/Cart/BuyBar.jsx';
import { addNum, deNum, choiseGoods, choiseAll }from './CartRedux.jsx';
import './Cart.css';

import { connect } from  'react-redux';



class Cart extends Component{

	handleClick(){
		console.log('122');
	}

	render(){

		let { goodes, increase } = this.props;

		console.log(increase)

		let catlist = goodes.map((goodes,idx)=>{
			return <CartItem item={goodes}  handleIncrease={increase}  index={idx} key={idx}/>
		})

		return(
			<div>
				<TopBar title='选择规格' onClick={this.handleClick.bind()}/>
				{catlist}
				<BuyBar/>
			</div>
		)
	}
}


function mapStateToProps(state){

	return {
		goodes:state.cartItem
	}
}

function mapDispatchToProps(dispatch){
	return {
		increase:(index)=>dispatch(addNum(index)),
		// decrease:()=>dispatch({type:'DE_NUM'})
	}
}

const CartList = connect(
	mapStateToProps,
	mapDispatchToProps
)(Cart);

export default CartList;


