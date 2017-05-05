import React, { Component } from 'react';
import './Top.css';

class Top extends Component{
	render(){
		return (
			<div className="top">
				<div className="search">
					<i></i>
					<span>每日坚果</span>
				</div>

				<div className="button">
					<a href="">登录</a>
				</div>
			</div>
			)
	}
}

export default Top;