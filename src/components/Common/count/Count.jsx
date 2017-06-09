import React, { Component } from 'react';
import './style.css'

class Count extends Component {
	


	render(){

		let{ index, count, increase} = this.props;

		let color = count ? 'count-minus-active' :'count-minus-disable';

		return (
			<div className="count" style={this.props.styleSet}>
				<div className={'count-minus '+color}></div>
				<div className="count-num">{count}</div>
				<div className="count-plus"
				onClick={()=>increase(index)}	
				></div>
			</div>
			)
	}
}

export default Count;