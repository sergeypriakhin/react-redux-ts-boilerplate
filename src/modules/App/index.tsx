import * as React from 'react';
import { Switch, Route } from 'react-router-dom';
import HomePage from '../HomePage';
import NotFoundPage from '../NotFoundPage';

export default class App extends React.Component {
	render() {
		return (
			<Switch>
				<Route exact path="/" component={HomePage} />
				<Route path="" component={NotFoundPage} />
			</Switch>
		);
	}
}
