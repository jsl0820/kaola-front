import { createStore } from 'redux';

import reducers from './reducers.jsx';
import { CART_ITEM, handleCart } from '../pages/CartRedux.jsx';

const initState = {
	cartItem:CART_ITEM,
}


const store = createStore(handleCart, initState);


export default store;