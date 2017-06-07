import React  from 'react';
import Count from '../Common/count/Count.jsx';

import './shopcart.css';



export const TopBar =()=>(

	<div className="cart-topbar">
		<span></span>
		规格选择
	</div>
)


export const Product = ({detail})=>(

	<div className="cart-product">
		<img src={require('./product.jpg')} alt=""/>
		<div className="cart-product-text">
			<p className="cart-product-tit">
				{detail.name}
			</p>
			<p className="cart-product-price">
				<span>￥</span>{detail.price}
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


