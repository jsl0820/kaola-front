import React,{ Component } from 'react';
import './column.css';


const NAV_LINK = [
	{ href:'11', src:require('./NavImg/nav_1.png'), title :'每日上新', },
	{ href:'11', src:require('./NavImg/nav_2.png'), title :'国家馆',   },
	{ href:'11', src:require('./NavImg/nav_3.png'), title :'考拉保障', },
	{ href:'11', src:require('./NavImg/nav_4.png'), title :'拼团',     },
];


const ColumnItem = (props) =>(
	<li>
		<a href="">
			<img src={props.navitem.src} alt=""/>
			<p>{props.navitem.title}</p>
		</a>
	</li>
)

const Column = () =>{
	let columnNode = NAV_LINK
	let items = columnNode.map((columnNode,idx)=>{
		return <ColumnItem navitem={columnNode} key={'navitem'+idx}/>
	})


	return <ul className="nav">{items}</ul>
}

export default Column;

