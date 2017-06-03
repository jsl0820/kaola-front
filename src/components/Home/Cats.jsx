import React,{ Component } from 'react';
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
		return <li key={idx}><a href={imgs.href}><img src = {imgs.src}/></a></li>
		});
	
	return (
		<ul className="hot-market" > { lis } </ul>
	)

} 

export default Cats;


