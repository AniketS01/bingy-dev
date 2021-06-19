import firebase from "firebase/app";
import "firebase/auth";

const app = firebase.initializeApp({
	apiKey: "AIzaSyD1QEELSXfMihfyQ8O4whyvxfai7mAolQ8",
	authDomain: "bingy-dev.firebaseapp.com",
	databaseURL:
		"https://bingy-dev-default-rtdb.asia-southeast1.firebasedatabase.app",
	projectId: "bingy-dev",
	storageBucket: "bingy-dev.appspot.com",
	messagingSenderId: "546115595053",
	appId: "1:546115595053:web:ca6613650096686e2dc1a4",
});

export const auth = app.auth();
export default app;
