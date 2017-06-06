import React,{ Component } from 'react';
import CheckBox from '../Common/checkbox/CheckBox.jsx';

import './buybar.css';

class BuyBar extends Component{

	render(){
		return(
			<div className="shopping-statement">
				<div className="shopping-statement-check"> <CheckBox/> <span>全选</span></div>
				<div className="shopping-statement-tolp">
					<div>
							总价 : <span>(￥59)</span>
					</div>
				</div>
				<div className="shopping-statement-bnt">结算</div>
			</div>
		)
	}
} 

export default BuyBar;