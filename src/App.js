import React, { useEffect } from "react";
import app, { auth } from "./database";
import { Database } from "firebase";
import SignUp from "./components/SignUp";
import SignIn from "./components/SignIn";
import Dashboard from "./components/Dashboard";
import { useDispatch, connect } from "react-redux";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { SET_USER, IS_AUTHENTICATED } from "./actions/types";
import PrivateRoute from "./private/privateRoute";
import { Signup } from "./actions/authActions";

const App = ({ authState }) => {
	const dispatch = useDispatch();

	const onAuthChanged = (user) => {
		if (user) {
			dispatch({
				type: IS_AUTHENTICATED,
				payload: true,
			});
			console.log(user.uid);

			app
				.database()
				.ref(`/users/${user.uid}`)
				.on("value", (snapshot) => {
					console.log(snapshot.val());
					dispatch({
						type: SET_USER,
						payload: snapshot.val(),
					});
				});
		} else {
			dispatch({
				type: IS_AUTHENTICATED,
				payload: false,
			});
		}
	};

	useEffect(() => {
		const subscriber = auth.onAuthStateChanged(onAuthChanged);
		return subscriber;
	}, []);

	return (
		<Router>
			{console.log(authState.isAuthenticated)}
			<Switch>
				<Route exact path='/signup'>
					<SignUp />
				</Route>
				<Route exact path='/signin' component={SignIn} />
				<PrivateRoute exact path='/'>
					<Dashboard />
				</PrivateRoute>
			</Switch>
		</Router>
	);
};

const mapStateToProps = (state) => ({
	authState: state.auth,
});

export default connect(mapStateToProps)(App);
