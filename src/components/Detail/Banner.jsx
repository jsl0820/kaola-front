import React, { Component } from 'react';
import './banner.css';
import BannerItem from './BannerItem.jsx';
import BannerDot from './BannerDot.jsx';
	

class Banner extends Component{

	constructor(props){
		super(props);
		this.state = {
			nowLocal:1,
		};
	}

	turn (n){
		var _n = this.state.nowLocal+n;
		let { banner } = this.props;

		if(_n<0){
			_n = _n + banner.length;
		}else if(_n>=banner.length){
			_n = _n-banner.length;
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

	componentWillUnmount() {
  		clearInterval(this.autoPlayFlag)
	}

	render(){

		let { banner } = this.props;
		let count = banner.length;

		let itemNode=banner.map((banner,idx)=>{
			return <BannerItem item={banner} count={count} key={'item'+idx}/>
		});

		let dotNode = <BannerDot 
			turn={this.turn.bind(this)} 
			count={count} 
			nowLocal={this.state.nowLocal}/>

		return (
			<div className="goods-banner" >
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
