import React from "react";
import { auth } from "../database";
import database from "firebase";
import app from "../database";

export const Signup = (email, password, username, watched, towatch) => {
	auth
		.createUserWithEmailAndPassword(email, password)
		.then((data) => {
			console.log("success");

			app
				.database()
				.ref("/users/" + data.user.uid)
				.set({
					id: data.user.uid,
					username,
					watched,
					towatch,
				})
				.then(() => console.log("stored"))
				.catch((error) => console.log(error.message));
		})
		.catch((err) => console.log(err.message));
};

export const Signin = (email, password) => {
	auth
		.signInWithEmailAndPassword(email, password)
		.then(() => console.log("signedIn"))
		.catch((err) => console.log(err.message));
};

export const Signout = () => {
	auth.signOut().then(() => console.log("signedOut secess"));
};
