import React, { Component } from 'react';

class BannerDot extends Component{
	

	handleDotClick(i){
		var option = i-this.props.nowLocal;
		this.props.turn(option);
	}

	render(){
		
		let dotNodes = [];
		let{ count ,nowLocal } = this.props;
		
		for(let i=0;i<count;i++){
			dotNodes[i] = (
				<span
				key={'dot' + i}
				className={"banner-dot"+(i===nowLocal?"slider-dot-selected":"")}
				onClick={this.handleDotClick.bind(this,i)}
				>
				</span>
			);
		}

		return (
		<div className="slider-dot-wrap">
			{dotNodes}
		</div>
		);
	}
}

export default BannerDot;