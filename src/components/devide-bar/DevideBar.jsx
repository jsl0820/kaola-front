import React, { Componet } from 'react';
import Img from '../../static/img/producticon.png';
import './style.css';



const DevideBar = (props)=>{

	let x = props.item.x;
	let y = props.item.y;

	let iconStyle={
		width:'16px',
		height:'16px',
		display:'inline-block',
		position:'absolute',
		top:'12px',
		left:'12px',
		background:`url(${Img}) no-repeat ${x}px ${y}px`,
		backgroundSize: '200px',
	}

	return (
		<div className="devide">
			<div>
				<span style={iconStyle}></span>
				<span>{props.item.title}</span>
			</div>
		</div>
		)
	}

export default DevideBar