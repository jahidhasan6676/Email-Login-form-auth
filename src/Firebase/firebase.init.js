// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCK11uif8L3eB1Pufgh2VDxneE3VH4DYL8",
  authDomain: "email-password-auth-ba857.firebaseapp.com",
  projectId: "email-password-auth-ba857",
  storageBucket: "email-password-auth-ba857.firebasestorage.app",
  messagingSenderId: "314768089772",
  appId: "1:314768089772:web:d417c0d6341ad3421a7509"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;