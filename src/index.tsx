import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import { createGlobalStyle } from 'styled-components';

import { store } from './redux/store';

import { App } from './App';

const Global = createGlobalStyle`
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}
`;

ReactDOM.render(
	<BrowserRouter>
		<Provider store={store}>
			<Global />
			<App />
		</Provider>
	</BrowserRouter>,
	document.getElementById('root')
);
