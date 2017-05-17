import React, { Componet } from 'react';
import './style.css';

const DevideBar =(props)=>(
	<div className="devide">
		<div>
			<span>111</span>
			<span>{props.item.title}</span>
		</div>
	</div>
	)

export default DevideBar