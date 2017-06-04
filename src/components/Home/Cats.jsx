import React  from 'react';
import { Link } from 'react-router-dom';
import './cats.css';

const CAT_IMG  = [
	{ href:'11',src:require('./cats/1.webp')},
	{ href:'11',src:require('./cats/2.webp')},
	{ href:'11',src:require('./cats/3.webp')},
	{ href:'11',src:require('./cats/4.webp')},
];


const Cats = () =>{
	let imgs = CAT_IMG;
	let lis = imgs.map((imgs,idx)=>{
		
		return <li key={idx}> 
					<Link to='/catlist'>
						<img src={imgs.src} alt=' '/> 
					</Link>
				</li>
		});
	
	return (
		<ul className="hot-market" > { lis } </ul>
	)

} 

export default Cats;


