import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import {Home, Browse, Signin, Signup} from './pages';
import * as ROUTES from './constants/routes';

export default function App() {
	return (
		<Router>
			<Switch>
				<Route exact path={ROUTES.HOME} component={Home} />
				<Route exact path={ROUTES.BROWSE} component={Browse} />
				<Route exact path={ROUTES.SIGN_UP} component={Signin} />
				<Route exact path={ROUTES.SIGN_IN} component={Signup} />
			</Switch>
		</Router>
	);
};
