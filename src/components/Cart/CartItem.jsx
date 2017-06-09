import React,{ Component }  from 'react';
import Count from '../Common/count/Count.jsx'
import CheckBox from '../Common/checkbox/CheckBox.jsx';
import './style.css';

import { connect } from  'react-redux';

class  CartItem extends Component{



	render(){

		let { id, name, choise, price, totalPrice, number } = this.props.item;
		let { handleIncrease } = this.props;


		return (
			<div className="cart-item-box">
				<div className="cart-item">
					<div className="cart-item-chkbox">
						<CheckBox />
					</div>
					<div className="cart-item-detail">
						<img src={require('./product.jpg')} alt=""/>			
						<div className="cart-item-tit">
							<p className="cart-item-text">{name}</p>
							<div className="cart-item-count">
								<Count 
									handleIncrease={handleIncrease}
									count={number}
								/>
							</div>
							<div className="cart-item-pricedel">
								<p>￥{price}</p>
								<p className="cart-item-del"></p>
							</div>
						</div>
					</div>
				</div>
				<div className="cart-item-totprice">
					<span> 总计￥{totalPrice} </span>
				</div>
			</div>	
			)
		}
}





export default CartItem