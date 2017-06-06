import React  from 'react';
import Count from '../Common/count/Count.jsx'
import CheckBox from '../Common/checkbox/CheckBox.jsx';
import './style.css'



const  CartItem =()=>{
	return (
	<div className="cart-item-box">
		<div className="cart-item">
			<div className="cart-item-chkbox">
				<CheckBox/>
			</div>
			<div className="cart-item-detail">
				<img src={require('./product.jpg')} alt=""/>			
				<div className="cart-item-tit">
					<p className="cart-item-text">【官方直采】Merries 花王妙而舒 M王妙而M王妙而M王妙而M王妙而</p>
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
		<div className="cart-item-totprice">
			<span> 总计￥100 </span>
		</div>
	</div>	
	)
}

export default CartItem