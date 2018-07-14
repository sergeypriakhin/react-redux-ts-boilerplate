import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import configureStore from './stores/configureStore';
import App from './modules/App';

const store = configureStore();

ReactDOM.render(
	<Provider store={store} key="provider">
		<BrowserRouter>
			<App />
		</BrowserRouter>
	</Provider>,
	document.getElementById('app') as HTMLElement
);
