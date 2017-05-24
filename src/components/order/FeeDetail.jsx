import React,{ Component } from 'react'

class FeeDetail extends Component{
	
	render(){
		return (
			<div className="order-fee">
				<div style={{padding:'0.266667rem',color:'#666',fontSize:'13px'}}><div>结算</div></div>
				<div className="order-fee-item">
					<div>商品总额</div>
					<div>￥49.00</div>
				</div>
				<div className="order-fee-item">
					<div>商品总额</div>
					<div>￥49.00</div>
				</div>
				<div className="order-fee-item">
					<div>商品总额</div>
					<div>￥49.00</div>
				</div>
			</div>
			)
	}
}

export default FeeDetail;