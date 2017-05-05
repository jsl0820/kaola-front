import React,{ Component } from 'react';
// import Des from './Des.js';
import './Adv.css';

const ADV_IMG = {
	src : require('./image/1.webp'), 
	alt : '限时抢购'
};
	


class Adv extends Component{

	constructor(props){
		super(props);

		this.state = {
			hours:0,
			minutes:0,
			second:0,
		}
	}

	leftTime(time){
		//var time = "2017/5/1/ 00:00:00";
		var leftTime = (new Date(time))-(new Date);
		var hours = parseInt(leftTime/1000/60/60%24,10);
		var minutes = parseInt(leftTime/1000/60%60,10);  
		var second = parseInt(leftTime/1000%60,10); 
		this.setState({
			hours:hours,
			minutes:minutes,
			second:second
		});
	}

	showLeftTime(){
		setInterval(this.leftTime("2017/5/1/ 00:00:00"),1000);
	}

	componentWillMount(){
		this.showLeftTime();
	}

	render(){
		let advimg = ADV_IMG;
		return (
			<a className = "adv" >
				<img src = {advimg.src} alt =""/>
				<div className="des">
					<p>距离本场结束还有</p>
					<p>入场疯抢</p>
				</div>
			</a>
		)
	}
}

export default Adv;