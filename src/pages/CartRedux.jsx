export const CART_ITEM=[
	{	
		index:1,
		pid:1,
		name:'【官方直采】Merries 花王妙而舒 M王妙而M王妙而M王妙而M王妙而',
		number:1,
		choice:true,
		price:19.0,
		totalPrice:19.0
	},
	{	
		index:2,
		pid:1,
		name:'【官方直采】Merries 花王妙而舒 M王妙而M王妙而M王妙而M王妙而',
		number:1,
		choice:true,
		price:19.0,
		totalPrice:19.0
	},
	{
		index:3,
		pid:1,
		name:'【官方直采】Merries 花王妙而舒 M王妙而M王妙而M王妙而M王妙而',
		number:1,
		choice:true,
		price:19.0,
		totalPrice:19.0
	}
]

const ADD_NUM = 'ADD_NUM';
const DE_NUM = 'DE_NUM';
const CHOISE_GOODS = 'CHOISE_GOOD';
const CHOISE_ALL = 'CHOISE_ALL';

// action 描述当前发生的事情
// 改变state 的唯一方法就是使用action
// action creator  
export const addNum = (text)=>({type:ADD_NUM,text});
export const deNum = (text)=>({type:ADD_NUM,text});
export const choiseGoods = (text)=>({type:ADD_NUM,text});
export const choiseAll = (text)=>({type:ADD_NUM,text});


// reducer
// store 收到 action 必须给出新的state 引起view的改变
// 接受action 和当前state 返回新的state
export  function handleCart (state,action){

	let { cartItem } = state;

	switch (action.type){

		case ADD_NUM:

			console.log('123');	

		case DE_NUM :
			return 	cartItem	
		default:
			return state	
	}

}


