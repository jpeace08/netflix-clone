import React, {useEffect} from 'react';
import { connect } from 'react-redux';
import { firebase } from './lib/firebase.prod';
import { BrowserRouter as Router, Switch } from 'react-router-dom';
import {Home, Browse, Signin, Signup} from './pages';
import * as ROUTES from './constants/routes';
import { IsUserRedirect, ProtectedRoute } from './helpers/routes';

function App({ user, setUser }) {
	console.log(user);
	useEffect(() => {
		const lisener = firebase.auth().onAuthStateChanged(userInfo => {
			if (userInfo) {
				console.log(userInfo);
				setUser(userInfo);
			}
			else {
				setUser(null);
			}
		});
		return () => {
			lisener();
		}
	}, [setUser]);
	
	return (
		<Router>
			<Switch>
				<IsUserRedirect exact loginedPath={ROUTES.BROWSE} path={ROUTES.SIGN_IN} user={user}>
					<Signin />
				</IsUserRedirect>
				<IsUserRedirect exact loginedPath={ROUTES.BROWSE} path={ROUTES.SIGN_UP} user={user}>
					<Signup />
				</IsUserRedirect>
				<ProtectedRoute exact path={ROUTES.BROWSE} signinPath={ROUTES.SIGN_IN} user={user}>
					<Browse />
				</ProtectedRoute>
				<IsUserRedirect exact path={ROUTES.HOME} loginedPath={ROUTES.BROWSE} user={user}>
					<Home />
				</IsUserRedirect>
			</Switch>
		</Router>
	);
};

const mapState = ({ auth }) => ({
	user: auth.user,
})

const mapDispatch = dispatch => ({
	setUser: dispatch.auth.setUser,
})

export default connect(mapState, mapDispatch)(App);