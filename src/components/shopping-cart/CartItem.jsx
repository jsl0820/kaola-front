import React, { Component } from 'react';
import Count from '../count/Count.jsx'
import CheckBox from '../checkbox/CheckBox.jsx'
import './style.css'



const TotalPrice=()=>(
	<div>
		<Count/>
		
	</div>

	)



const  CartItem =()=>{
	return (
	<div className="cart-item">
		<div className="cart-item-chkbox">
			<CheckBox/>
		</div>
		<div className="cart-item-detail">
			<img src={require('./product.jpg')} alt=""/>			
			<div className="cart-item-tit">
				<p>【官方直采】Merries 花王妙而舒 M王妙而M王妙而M王妙而M王妙而</p>
				<div className="cart-item-count">
					<Count/>
				</div>
				<div className="cart-item-pricedel">
					<p>￥49.0</p>
					<p className="cart-item-del"></p>
				</div>
			</div>
		</div>
	</div>
	)
}

export default CartItem