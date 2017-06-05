import React,{ Component } from 'react';
import { Link }  from 'react-router-dom';

import './buybar.css' 



const Button = () =>{

	return <div className="shop-buttons">
				<Link to='/detail/AddCart/1'>
					<div style={{background:'#ff8587'}}>加入购物车</div>
				</Link>
				<Link to='/detail/BuyNow/1'>
					<div style={{background:'#e31436'}}>立即购买</div>
				</Link>
		   </div> 
}


/*class Statement extends Component{

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
} */



export default class Shopping extends Component{
	
	constructor(props){
		super(props)
	}

	handleClick(){
		console.log('111');
	}

	render(){

		let BuyNow = <div 
					className="buynow" 
					style={{width:'325px'}}
					onClick={this.handleClick.bind(this)}
					>确定购买</div>

		let DefaultBar = <div> 
						 	<div 
						 	className="shopping-cart">购物车</div> 
						 	<Button/> 
						</div>


		let AddCart = <div>
						<div className="shopping-cart">购物车</div>
						<div 
						className="shopping-addcart" 
						style={{width:'265px'}}
						>确认加入</div>
					  </div> 

		let { showPage } = this.props;
		
		let part
		switch (showPage) {
			case 'BuyNow':
				part = BuyNow;
				break;
			case 'DefaultBar':
				part = DefaultBar;
				break;
			case 'AddCart':
				part = AddCart;	
				break;
		}
					  
		return (
			<div className='shopping'>
				<div className="shopping-collection">收藏</div>
				{part}
			</div>

			)
	}
}



