import React from 'react';
import ReactDOM from 'react-dom';

import App from './App';

import {createStore} from 'redux';
import reducers from './reducers/index';
import {Provider} from 'react-redux';

const theStore = createStore(reducers);

ReactDOM.render(
	<Provider store={theStore}>
	<App />
	</Provider>, 
	document.getElementById('root'));


