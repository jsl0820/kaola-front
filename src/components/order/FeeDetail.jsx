import React,{ Component } from 'react'




class FeeDetail extends Component{
	
	render(){
		return (
			<div className="order-fee">

				<div className='order-fee-first'>
					<div>结算</div>
				</div>

				<div className="order-fee-item">
					<div>商品总额</div>
					<div>￥49.00</div>
				</div>

				<div className="order-fee-item">
					<div>运费</div>
					<div>￥49.00</div>
				</div>
				
				<div className="order-fee-item">
					<div>应付总额</div>
					<div>￥49.00</div>
				</div>
			</div>
		)
	}
}

export default FeeDetail;