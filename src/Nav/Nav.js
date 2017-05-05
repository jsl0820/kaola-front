import React,{ Component } from 'react';
import NavItem  from './NavItem';
import './nav.css';

const NAV_LINK = [
	{ href:'11', src:require('./NavImg/nav_1.png'), title :'每日上新', },
	{ href:'11', src:require('./NavImg/nav_2.png'), title :'国家馆',   },
	{ href:'11', src:require('./NavImg/nav_3.png'), title :'考拉保障', },
	{ href:'11', src:require('./NavImg/nav_4.png'), title :'拼团',     },
];

class Nav extends Component{
	render(){
		let navlink = NAV_LINK;
		let navitem = navlink.map((navlink,idx)=>{
			return <NavItem navitem={navlink} key={'navitem'+idx}/>;
			});
		return (
			<ul className="nav">
				{navitem}
			</ul>
		)
	}
}

export default Nav;

