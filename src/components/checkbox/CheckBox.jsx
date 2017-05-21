import React, { Component } from 'react';

class CheckBox extends Component{

	constructor(props){
		super(props)
		this.state={checked: false}
	}

	handleClick(){
		let {checked} = this.state
		this.setState({checked:checked?false:true})
	}
	
	render(){
		let {checked} = this.state;
		return (
		<div style={{margin:'0',padding:'0'}} onClick={this.handleClick.bind(this)}>
			<img 
				src={checked ? require('./unchk.png') :  require('./check.png')} 
				alt="check" style={{width:'22px'}}/>
		</div>
		)
	}
}

export default CheckBox;