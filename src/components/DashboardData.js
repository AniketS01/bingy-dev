import React, { useEffect, useState } from "react";
import app from "../database";

const DashboardData = ({ user }) => {
	const [userdata, setUserdata] = useState([]);

	useEffect(() => {
		app
			.database()
			.ref(`/users/${user}`)
			.on("value", (snapshot) => {
				setUserdata(snapshot.val());
			});
	}, []);

	const { username } = userdata;

	return <div className='display-1'>{username}</div>;
};

export default DashboardData;
