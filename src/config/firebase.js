// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";

import { getFirestore } from 'firebase/firestore';
import { getStorage } from 'firebase/storage';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAHrzHuBFX1TsYCJRalq0UFCzHcafX16qo",
  authDomain: "recipe-7553b.firebaseapp.com",
  projectId: "recipe-7553b",
  storageBucket: "recipe-7553b.firebasestorage.app",
  messagingSenderId: "780839852789",
  appId: "1:780839852789:web:6e9b5205265a7dddaf83bc",
  measurementId: "G-JSTPLCJY3T"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const googleProvider = new GoogleAuthProvider();
export const db = getFirestore(app);
export const storage = getStorage(app); 