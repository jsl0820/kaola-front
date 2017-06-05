import React  from 'react';
import Img from '../../static/img/producticon.png';
import './setting.css';

const Setting = ()=>{

	let arrow = {
		position:'absolute',
		background:'red',
		height:'10px',
		width:'10px',
		position:'absolute',
		background:`url(${Img}) no-repeat -64px -89px`,
		right:'10px',
		top:'50%',
		marginTop:'-5px',
		backgroundSize:'200px'
	}

	return (
		<div className="shop-set">
			<div className="shop-set-send">
				<div>配送 : </div>
				<span className="shop-set-to"><span className="shop-set-loca">至</span>天津市东河区 满88元包邮</span>
				<div style={arrow}></div>
			</div>
			<div className="shop-set-intro">
				<div className="shop-set-tit">说明   </div>
					<ul>
						<li>商品税费</li>
						<li>假一赔十</li>
						<li>7天无忧退货</li>
						<li>自营报税仓发货</li>
					</ul>
					<div style={arrow}></div>
				</div>
		</div>
		)
}

export default Setting