// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBHVZd_wnpHqVX1T9zCMfhL526Yi-XmwhE",
  authDomain: "e-commerce-web-auth.firebaseapp.com",
  projectId: "e-commerce-web-auth",
  storageBucket: "e-commerce-web-auth.firebasestorage.app",
  messagingSenderId: "864489636684",
  appId: "1:864489636684:web:a57676aa468009f2bd45e9",
  measurementId: "G-P52VBMKZRP",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const storage = getStorage(app);
export { app, auth , storage}
