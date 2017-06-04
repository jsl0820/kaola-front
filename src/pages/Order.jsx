import React,{ Component } from 'react'
import OrderItem from '../components/Order/OrderItem.jsx';
import OrderBtn from '../components/Order/OrderBtn.jsx';
import FeeDetail from '../components/Order/FeeDetail.jsx';
import Address from '../components/Order/Address.jsx';
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