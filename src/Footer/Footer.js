import React,{ Component } from 'react';
import './Footer.css';

class Footer extends Component{

	render(){

		return (
			
			<footer>
				<div> <span>别拉了</span></div>
				<div>
					<ul className="footer-tit">
						<li> <a href="">首页</a> </li>
						<li> <a href="">客户端</a> </li>
						<li> <a href="">登录</a> </li>
						<li> <a href="">注册</a> </li>
					</ul>
				</div>
			</footer>
		)
	}
}

export default Footer;