import React,{ Component } from 'react'

class Address extends Component{
	render(){
		return (
			<div className="address">
				<div className="address-pepo">
					<p>
						<div>收货人</div>						
						<div>金舒立</div>
						<div>157123526</div>
					</p>

					<p className="address-add">
						<div>收货地址</div>
						<div>浙江省台州市椒江区下</div>
					</p>
				</div>

				<div className="address-arr">
					
				</div>
			</div>
			)
	}
}

export default Address