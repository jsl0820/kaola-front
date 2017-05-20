import React, { Component } from 'react';
import Count from '../count/Count.jsx';
import './style.css';

const ProNum =()=>(

	<div className="cart-pro-num">
		<span>数量：</span>
		<Count styleSet={{float:'left'}}/>
	</div>
	)

export default ProNum
