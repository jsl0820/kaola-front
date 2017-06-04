import React from 'react';
import { Link } from 'react-router-dom';
import './recommend.css'


const RecommendItem = (props) =>{

	let item = props.item;
	let point = props.point;

	let style={
		width:point.itemWidth,
		display:'block',
		overflow:'hidden',
	}

	return (
		<li className="recommend-item" style={style}>
			<Link to='/detail'>
				<img src={require(item.picture)} alt=""/>
				<p className="recommend-item-title">{item.title}</p>
				<p className="recommend-item-price">
					<span>￥{item.price}</span>
					<del>￥{item.origina}</del>
				</p>
			</Link>
		</li>
	)
}

const Recommend = (props)=>{
 
	let { recommend } = props;
	let count = recommend.length;
	let screenWidth = document.body.clientWidth;
	let itemWidth = (1/3)*(screenWidth-10);
	let realWidth = (count/3)*(screenWidth+20);

	let ulStyle={
		width:realWidth+'px',
		overflowX:'hidden',
	}

	let point={
		count:count,
		screenWidth:screenWidth,
		itemWidth:itemWidth,
	}

	let recommends = recommend.map((recommend,idx)=>{
			return <RecommendItem item={recommend}  point={point} key={'item'+idx}/>
		});

	return (
		<div className="recommend">
			<p className="recommend-h">小考拉推荐</p>
			<div className="recommend-scroll">
				<ul style={ulStyle}>
					{recommends}
				</ul>
			</div>
		</div>
	)}

export default Recommend
