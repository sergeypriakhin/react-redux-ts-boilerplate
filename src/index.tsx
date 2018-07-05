import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import configureStore from './stores/configureStore';
import App from './containers/App';

const store = configureStore();

ReactDOM.render(
	<Provider store={store} key="provider">
		<App />
	</Provider>,
	document.getElementById('app') as HTMLElement
);
