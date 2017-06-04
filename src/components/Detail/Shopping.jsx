import React,{ Component } from 'react';
import CheckBox from '../checkbox/CheckBox.jsx'


import './shopping.css';


const BuyNow = () =>{
		return <div className="buynow" style={{width:'325px'}}>确定购买</div>
	}

const ShopCart =() =>{
	return <div className="shopping-cart">购物车</div>
}

const AddCart =() =>{
	return <div className="shopping-addcart" style={{width:'265px'}}>确认加入</div>
}

const Button = () =>{

	return <div className="shop-buttons">
				<div style={{background:'#ff8587'}}>加入购物车</div>
				<div style={{background:'#e31436'}}>立即购买</div>
		   </div> 
}

class Statement extends Component{

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


class Shopping extends Component{


	render(){
		return (
			<div className='shopping'>
				<div className="shopping-collection">收藏</div>
				<div className="shopping-cart">购物车</div>
				<Button/>
			</div>

			)
	}
}

export default Statement