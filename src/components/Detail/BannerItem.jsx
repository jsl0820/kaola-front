import React, { Component } from 'react';

class BannerItem extends Component{

	render(){
		let {count,item} = this.props;
		let width=`${ 100/count }% `;
		return(
			<li className="goods-banner-item" style={{width:width}}>
				<img src={require(`${item.src}`)} alt={item.alt}/>
			</li>
		)
	}
}
export default BannerItem;