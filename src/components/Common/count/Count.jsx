import React, { Component } from 'react';
import './style.css'

class Count extends Component {
	
	constructor(props){
		super(props);
		this.state = {
			count:1,
		};
	}

	decrease(cont){

		if(cont==0){
			this.setState({count:0})
		}else{
			this.setState({count:cont-1})
		}
	}

	increase(cont){
		this.setState({count:cont+1})
	}

	render(){

		let cont = this.state.count;
		let color = cont ? 'count-minus-active' :'count-minus-disable';
		
		return (
			<div className="count" style={this.props.styleSet}>
				<div className={'count-minus '+color} 
				onClick={this.decrease.bind(this,cont)}></div>
				<div className="count-num">{this.state.count}</div>
				<div className="count-plus" onClick={this.increase.bind(this,cont)}></div>
			</div>
			)
	}
}

export default Count;