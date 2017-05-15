import React,{ Component } from 'react';
import './style.css';

const ADV_IMG = {
	src : require('./image/1.webp'), 
	alt : '限时抢购'
};

	
class Adv extends Component{

	constructor(props){
		super(props);
		this.state = {h:0, m:0, s:0 };
	}


	getLeftTime(){
		let date = new Date();
		let deTime = this.determineHour();
		let leftTime = deTime-date;
		let leftSecond = leftTime/1000;
		let day  = Math.floor(leftSecond/(60*60*24));
		let hour = Math.floor((leftSecond-day*24*60*60)/3600);
		let min  = Math.floor((leftSecond-day*24*60*60-hour*3600)/60);  
		let sec  = Math.floor(leftSecond-day*24*60*60-hour*3600-min*60);
		
		return {h:hour, m:min, s:sec};
	}

	

	constructTime(h){

		let date = new Date();
		let y = date.getFullYear();
		let m = date.getMonth()+1;
		let d 
		if(h == 0){
			d = date.getDate()+1;
		}else{
			d = date.getDate();
		}

		return  y+'/'+m+'/'+d+'/'+h+':0:0'
	}

	determineHour(){
		let date = new Date();
		let curHours = date.getHours();
		let setingTime 

		if (0<curHours<9){
			setingTime = this.constructTime(9);
		}

		if (9<curHours<13){
			setingTime = this.constructTime(13);
		}

		if (13<curHours<17){
			setingTime = this.constructTime(17);
		}

		if (17<curHours<23){
		 	setingTime = this.constructTime(0);
		}

		var setingDate = (new Date(setingTime)).getTime();
		return setingDate;
	}

	countDown(){

		var leftTime = this.getLeftTime();
		var leftHour = leftTime.h;
		var leftMin  = leftTime.m;
		var leftSec  = leftTime.s;

		//console.log(leftTime);

		this.setState({
			h:leftHour,
			m:leftMin,
			s:leftSec
		})	
	}


	componentDidMount(){
		setInterval(()=>{
			this.countDown();
		}, 1000);
	}

	render(){
		let advimg = ADV_IMG;
		let hours  = this.state.h;
		let mints  = this.state.m;
		let secons = this.state.s;
		return (
			<a className = "adv" >
				<img src = {advimg.src} alt =""/>
				<div className="des">
					<p>距离本场结束还有{hours}:{mints}:{secons}</p>
					<span className="adv-buy">入场疯抢</span>
				</div>
			</a>
		)
	}
}


const Des = () =>(
	<div> 
	</div>
	)
export default Adv;