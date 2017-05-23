import React,{ Component } from 'react'
import './style.css' 

class OrderBtn extends Component{
	render(){
		return (
			<div className="order-btn-out">
				<div className="order-btn-box">
					<div className="order-btn-price">实付款：&nbsp;&nbsp;￥56</div>
					<div className="order-btn">提交订单</div>
				</div>
			</div>
			)
	}
}


export default OrderBtn