// Import the functions you need from the SDKs you need
import { FirebaseApp, initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDQTjpa6pAM4tO7MxUzzrZu-UQE3Md5yGU", //todo env variables
    authDomain: "ueventauth-4cff4.firebaseapp.com",
    projectId: "ueventauth-4cff4",
    storageBucket: "ueventauth-4cff4.appspot.com",
    messagingSenderId: "353994662796",
    appId: "1:353994662796:web:5937d33390e61e2f7eaca9"
};

// Initialize Firebase
const firebaseApp: FirebaseApp = initializeApp(firebaseConfig);

export default firebaseApp; 