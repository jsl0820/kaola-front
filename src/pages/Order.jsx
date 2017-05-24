import React,{ Component } from 'react'
import OrderItem from '../components/order/OrderItem.jsx';
import OrderBtn from '../components/order/OrderBtn.jsx';
import FeeDetail from '../components/order/FeeDetail.jsx';
import Address from '../components/order/Address.jsx';
class Order extends Component{
	render(){
		return (
			<div>
				<Address/>
				<OrderItem/>
				<OrderBtn/>
				<FeeDetail/>
			</div>
			)
	}
}


export default Order;