import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Routes from './routes/routes.jsx';

import store from './redux/configureStore.jsx';
import { Provider } from 'react-redux';
 


ReactDOM.render(
	<Provider store={store}>
		<Routes/>
	</Provider>
  , document.getElementById('root'));
