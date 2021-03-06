import React,{ Component } from 'react';
import './advert.css';

const ADV_IMG={
	src : require('./advert/1.webp'), 
	alt : '限时抢购'
};

	
class Adv extends Component{
	render(){
		let advimg=ADV_IMG;
		return (
			<a className="adv" >
				<img src={advimg.src} alt=""/>
				<div className="des">
					<p>距离本场结束还有
						<TimeMeter/>
					</p>
					<span className="adv-buy">入场疯抢</span>
				</div>
			</a>
		)
	}
}


//倒计时器
class TimeMeter extends Component{
	constructor(props){
		super(props);
		this.state={h:0, m:0, s:0 };
	}
		
	getLeftTime(){
		let date=new Date();
		let endTimeStp=this.getEndTimeStp();
		let leftTime=endTimeStp-date;
		let leftSecond=leftTime/1000;

		let day=Math.floor(leftSecond/(60*60*24));
		let hour=Math.floor((leftSecond-day*24*60*60)/3600);
		let min=Math.floor((leftSecond-day*24*60*60-hour*3600)/60);  
		let sec=Math.floor(leftSecond-day*24*60*60-hour*3600-min*60);

		hour='0'+hour;
		if(min<10){
			min='0'+min;
		}
		if(sec<10){
			sec='0'+sec;
		}
		return {h:hour, m:min, s:sec};
	}

	getEndTime(h){

		let date=new Date();
		let y=date.getFullYear();
		let m=date.getMonth()+1;
		let d 
		if(h===0){
			d=date.getDate()+1;
		}else{
			d=date.getDate();
		}
		return  y+'/'+m+'/'+d+'/'+h+':0:0'
	}

	getEndTimeStp(){

		let date= new Date();
		let hours= date.getHours();
		let endTime

		if(hours<9){
			endTime=this.getEndTime(9)
		} else if(hours<13){
			endTime=this.getEndTime(13)
		}else if(hours<17){
			endTime=this.getEndTime(17)
		}else if(hours<23){
		 	endTime=this.getEndTime(0)
		}
		
		var endTimeStp=(new Date(endTime)).getTime();
		return endTimeStp;
	}

	countDown(){
		let leftTime=this.getLeftTime();
		this.setState(leftTime)	
	}


	componentDidMount(){
		this.timeOutFalge=setInterval(()=>{
			this.countDown();
		}, 1000);
	}

	//清除定时器
	componentWillUnmount(){
		clearInterval(this.timeOutFalge)
	}

	render(){
		return <span>{this.state.h}:{this.state.m}:{this.state.s}</span>
	}

}

export default Adv;