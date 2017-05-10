import React,{ Component } from 'react';
import './nav.css';

class NavItem extends Component{

	constructor(props){
		super(props);
	}

	render(){
		let { navitem } = this.props;
		return (
			<li>
				<a href="">
					<img src={navitem.src} alt={navitem.title}/>
					<p>{ navitem.title }</p>
				</a>
			</li>
		)
	}
}

export default NavItem;