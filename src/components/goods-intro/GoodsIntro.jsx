import React, { Component } from 'react';
import './style.css';


const GoodsIntro = ()=>(
		<div className="goods-intro">
			<div className="goods-intro-price">
				<span>￥ <b>1696</b></span>
				<span className="single-price">单件￥282.67</span>
				<span className="single-price">包税</span>
			</div>
			<div className="goods-intro-wrap"> </div>
			<div className="goods-intro-content">
				<h4> <span>6件装</span> | Wyeth惠氏 启赋 新升级 学龄前儿童配方调制乳粉 4段 900克/罐 6罐装</h4>
				<p>
					Wyeth 惠氏，专注早期生命科学，在婴幼儿营养品领域有着近百年研发历史。 惠氏奶粉来自新西兰奶源和爱尔兰奶源，均为安全可靠无污染奶源，亲和人体配方，专注宝宝健康成长。
				</p>
			</div>
			<div className="goods-intro-sub">
				<img src={require('./images/10001.png')} /> <span>美国品牌</span>
			</div>
		</div>
	)

export default GoodsIntro;