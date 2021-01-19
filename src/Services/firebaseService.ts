import firebase from "firebase";

var firebaseConfig = {
	apiKey: "AIzaSyD_R5pGSsJOMq43cljK-6ezqMlnTrzc4So",
	authDomain: "pwa-quiz-app-a6103.firebaseapp.com",
	projectId: "pwa-quiz-app-a6103",
	storageBucket: "pwa-quiz-app-a6103.appspot.com",
	messagingSenderId: "916803788081",
	appId: "1:916803788081:web:93f78d232feeebd9ebe410",
};

firebase.initializeApp(firebaseConfig);
const messaging = firebase.messaging();

export function initNotification() {
	Notification.requestPermission().then((permission) => {
		console.log(permission);
		if (permission === "granted") {
			messaging
				.getToken()
				.then((currentToken) => {
					if (currentToken) {
						console.log("Token => ", currentToken);
					} else {
						console.log(
							"No registration token available. Request permission to generate one."
						);
					}
				})
				.catch((err) => {
					console.log("An error occurred while retrieving token. ", err);
				});
		}
	});
}
