import React,{ Component } from 'react'

class OrderItem extends Component{
	render(){
		return (
			<div className="order-item">
				<div className="order-item-img">
					<img src={require('./800.jpg')} alt=""/>
				</div>		
				<div className="order-item-txt">	
					ESTĒE LAUDER 雅诗兰黛 鲜养焕亮精华露 4毫升/瓶 2瓶装
				</div>
				<div className="order-item-price">
					<p>￥49.00</p>
					<p>x1</p>
				</div>
			</div>
			)
	}
}

export default OrderItem;