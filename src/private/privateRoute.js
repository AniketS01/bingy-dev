import { useEffect, useState } from "react";
import { Redirect, Route } from "react-router-dom";
import propTypes from "prop-types";
import { connect } from "react-redux";
import { auth } from "../database";
import { useHistory } from "react-router-dom";

const PrivateRoute = ({
	children,
	auth: { isAuthenticated, loading },
	...rest
}) => {
	const history = useHistory();
	console.log(isAuthenticated);
	return (
		<Route
			{...rest}
			render={(props) => {
				return !isAuthenticated && !loading ? (
					<Redirect to='/signin' />
				) : (
					children
				);
			}}
		/>
	);
};

PrivateRoute.propTypes = {
	auth: propTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
	auth: state.auth,
});

export default connect(mapStateToProps, null, null, { pure: false })(
	PrivateRoute
);
