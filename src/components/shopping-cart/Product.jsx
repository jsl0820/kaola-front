import React,{ Component } from 'react';
import './style.css';

const Product = ()=>(
	<div className="cart-product">
		<img src={require('./product.jpg')} alt=""/>
		<div className="cart-product-text">
			<p className="cart-product-tit">
				MEDIHEAL 美迪恵尔 N.M.F针剂水库保湿面膜 10片/盒 补水网红
			</p>
			<p className="cart-product-price">
				<span>￥</span>79
				<span>(库存充足)</span>
			</p>

		</div>
	</div>
	)

export default Product;