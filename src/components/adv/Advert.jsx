import React,{ Component } from 'react';
import './style.css';

const ADV_IMG = {
	src : require('./image/1.webp'), 
	alt : '限时抢购'
};
	
class Adv extends Component{

	constructor(props){
		super(props);

		this.state = {
			leftTime:0,
		};
	}

	leftTime(time){
		// let leftTime = (new Date(time))-(new Date);
		// let hours = parseInt(leftTime/1000/60/60%24,10);
		// let minutes = parseInt(leftTime/1000/60%60,10);  
		// let second = parseInt(leftTime/1000%60,10); 
	}

	showLeftTime(){
		let date = new Date();
		let curHours = date.getHours();
		console.log(curHours);
	}

	constructTime(){

		let date = new Date();
		let y = date.get;
		let m = date.getMonth()+1;
		let d = date.getDate();
		let h = 

	}

	determineHour(){
		let date = new Date();
		console.log(curHours);

		if (0<curHours<9){
			
		}

		if(9<curHours<13){
			setingTime = 13;
		}

		if(13<curHours<17){
			setingTime = 17;
		}

		if(17<curHours<23){

		}


		console.log(setingTime);

	}


	componentWillMount(){
		this.determineHour();	
		
			
	}

	render(){
		let advimg = ADV_IMG;
		return (
			<a className = "adv" >
				<img src = {advimg.src} alt =""/>
				<div className="des">
					<p>距离本场结束还有01:06:18</p>
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