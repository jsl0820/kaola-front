import React from 'react';
import './style.css';

const Footer =()=>{

	

	return (
		<footer>
			<div className="footer-alert"> <span>别拉了,到底啦~</span></div>
			<div className="footer-href">
				<ul>
					 <a href="">首页</a> 
					 <span>   |   </span>
					 <a href="">客户端</a>
					 <span>|</span> 
					 <a href="">登录</a> 
					 <span>|</span>
					 <a href="">注册</a> 
				</ul>
			</div>
			<div className="footer-copyright"> 版权所有@1997-2017 </div>
		</footer>
	)
}

export default Footer;