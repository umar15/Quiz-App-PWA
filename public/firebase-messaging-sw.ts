importScripts("https://www.gstatic.com/firebasejs/8.2.3/firebase-app.js");
importScripts("https://www.gstatic.com/firebasejs/8.2.3/firebase-messaging.js");

var firebaseConfig = {
	apiKey: "AIzaSyD_R5pGSsJOMq43cljK-6ezqMlnTrzc4So",
	authDomain: "pwa-quiz-app-a6103.firebaseapp.com",
	projectId: "pwa-quiz-app-a6103",
	storageBucket: "pwa-quiz-app-a6103.appspot.com",
	messagingSenderId: "916803788081",
	appId: "1:916803788081:web:93f78d232feeebd9ebe410",
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.messaging();
