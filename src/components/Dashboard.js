import React, { useEffect, useState } from "react";
import app, { auth } from "../database";
import database from "firebase";
import { connect } from "react-redux";
import { Signout } from "../actions/authActions";
import { useHistory } from "react-router-dom";

const Dashboard = ({ userState, authState }) => {
	const history = useHistory();

	return (
		<div>
			{userState ? (
				<>
					<div className='display-1'>{userState.username} </div>
					<button type='submit' onClick={Signout()}>
						signout
					</button>
				</>
			) : (
				<div className='display-1'> pls</div>
			)}
		</div>
	);
};

const mapStateToProps = (state) => ({
	authState: state.auth,
	userState: state.auth.user,
});

export default connect(mapStateToProps)(Dashboard);
