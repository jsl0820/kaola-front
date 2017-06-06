import React,{ Component } from 'react'

import TopBar from '../components/Common/topbar/TopBar.jsx';

import OrderItem from '../components/Order/OrderItem.jsx';
import OrderBtn from '../components/Order/OrderBtn.jsx';
import FeeDetail from '../components/Order/FeeDetail.jsx';
import Address from '../components/Order/Address.jsx';


class Order extends Component{
	render(){
		return (
			<div>
				<TopBar title='提交订单'/>
				<Address/>
				<OrderItem/>
				<OrderBtn/>
				<FeeDetail/>
			</div>
			)
	}
}


export default Order;