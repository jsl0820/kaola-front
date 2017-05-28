
const ADD_NUM = 'ADD_NUM';
const DE_NUM = 'DE_NUM';
const CHOISE_GOODS = 'CHOISE_GOOD';
const CHOISE_ALL = 'CHOISE_ALL';


const addNum = (text)=>({type:ADD_NUM,text});
const deNum = (text)=>({type:ADD_NUM,text});
const choiseGoods = (text)=>({type:ADD_NUM,text});
const choiseAll = (text)=>({type:ADD_NUM,text});

const defaultState = [
	{id:1, price:1, num:1, totalPrice:1,choise:true},
	{id:1, price:1, num:1, totalPrice:1,choise:true},
	{id:1, price:1, num:1, totalPrice:1,choise:true},
	{id:1, price:1, num:1, totalPrice:1,choise:true},
];

function handleCart (state=defaultState,action){

	switch (action.type){
		case ADD_NUM:
			return 	[
				...state.slice(0,action.id),
				Object.assign(
					{}, 
					state[action.id], 
					{
						num: action.num+1, 
						totalPrice: action.totalPrice+action.price 
					}
				), 
				...state.slice(action.id + 1)
			];

		case DE_NUM :
			return 	[
				...state.slice(0,action.id),
				Object.assign(
					{}, 
					state[action.id], 
					{
						num: action.num-1, 
						totalPrice: action.totalPrice-action.price 
					}
				), 
				...state.slice(action.id + 1)
			];

		case CHOISE_GOODS:
			return 	[
				...state.slice(0,action.id),
				Object.assign(
					{}, 
					state[action.id], 
					{
						choise:!action.choise
					}
				), 
				...state.slice(action.id + 1)
			];
	}

}


export default handleCart
