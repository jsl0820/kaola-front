import React, { Component } from 'react';
import './style.css';


class BackTop extends Component{
	
	constructor(props){
		super(props);
		this.state = {
			hidden:'back-top hidden',
		};
	}

	componentDidMount(){
		this.handleScroll = this.handleScroll.bind(this);
		window.addEventListener('scroll',this.handleScroll);
	}

	componentWillUnmount(){
		window.removeEventListener('scroll', this.handleScroll);
	}

	handleScroll(){
		let y = document.body.scrollTop;
		if(y>500){
			this.setState({hidden:'back-top'})
		}else{
			this.setState({hidden:'back-top hidden'})
		}
	}

	goTop(){
		window.scrollTo(0,0);
	}

	render(){
		return (
			<div className={this.state.hidden} 
			onClick={this.goTop.bind(this)}>
				<i></i>
				<p>顶部</p>		
			</div>
		)	
	}
}

export default BackTop;