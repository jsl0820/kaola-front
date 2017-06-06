import React  from 'react';
import Count from '../Common/count/Count.jsx';

import './shopcart.css';



export const TopBar =()=>(

	<div className="cart-topbar">
		<span></span>
		规格选择
	</div>
)


export const Product = ()=>(
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


export const ProNum =()=>(

	<div className="cart-pro-num">
		<span>数量：</span>
		<Count styleSet={{float:'left'}}/>
	</div>
)


