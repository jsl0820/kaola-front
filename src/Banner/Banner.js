import React, { Component } from 'react';
import './Banner.css';

import BannerItem from './BannerItem/BannerItem.js';
import BannerDot from './BannerDot/BannerDot.js';
	
const IMAGE_DATA = [
	{
		src:require('./images/1.webp'),
		alt:'images-1',
	},
	{
		src:require('./images/2.webp'),
		alt:'images-2'
	},
	{
		src:require('./images/3.webp'),
		alt:'images-3',
	},
	{
		src:require('./images/5.webp'),
		alt:'images-5',
	},
	{
		src:require('./images/6.webp'),
		alt:'images-6',
	},
	];

class Banner extends Component{

	constructor(props){
		super(props);
		this.state = {
			nowLocal:1,
		};
	}

	turn (n){
		var _n = this.state.nowLocal+n;
		if(_n<0){
			_n = _n + IMAGE_DATA.length;
		}
		if(_n>=IMAGE_DATA.length){
			_n = _n-IMAGE_DATA.length;
		}
		this.setState({nowLocal:_n});
	}

	goPlay(){
		if(this.props.autoplay){
			this.autoPlayFlag = setInterval(()=>{
				this.turn (1);
			},this.props.delay*1000);
		}
	}

	componentDidMount(){
		this.goPlay();
	}

	render(){
		let images = IMAGE_DATA;
		let count = images.length;

		let itemNode=images.map((images,idx)=>{
			return <BannerItem item={images} count={count} key={'item'+idx}/>
		});

		let dotNode = <BannerDot turn={this.turn.bind(this)} count={count} nowLocal={this.state.nowLocal}/>

		return (
			<div className="banner" >
				<ul style={{
					left:-100*this.state.nowLocal + '%',
					width:count*100+'%',
					transitionDuration:this.props.speed+'s',
				}}>
					{itemNode}
				</ul>
				{this.props.dots?dotNode:null}
			</div>
		)
	}
}

Banner.defaultProps = {
	speed:1,
	delay:2,
	pause:true,
	autoplay:true,
	dots:true,
}

Banner.autoPlayFlag = null;

export default Banner;
