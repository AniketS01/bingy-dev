import { auth } from "../database";
import app from "../database";

export const Signup = (email, password, username) => async (dispatch) => {
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
				})
				.then(() => console.log("stored"))
				.catch((error) => console.log(error.message));
		})
		.catch((err) => console.log(err.message));
};

export const Signin = (email, password) => async (dispatch) => {
	auth
		.signInWithEmailAndPassword(email, password)
		.then(() => console.log("signedIn"))
		.catch((err) => console.log(err.message));
};

export const Signout = () => async (dispatch) => {
	auth
		.signOut()
		.then(() => console.log("signedOut secess"))
		.catch((err) => console.log(err.message));
};
