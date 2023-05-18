// Import the functions you need from the SDKs you need
import { FirebaseApp, initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCJXGi3SigCfw5H3fjzGNxN8rA6VVwHVBA",
  authDomain: "ueventauth.firebaseapp.com",
  projectId: "ueventauth",
  storageBucket: "ueventauth.appspot.com",
  messagingSenderId: "22897034097",
  appId: "1:22897034097:web:6f34f9dcfaa7000fc56cd0"
};

// Initialize Firebase
const firebase:FirebaseApp = initializeApp(firebaseConfig);

export default firebase; 