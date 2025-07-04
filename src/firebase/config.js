// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB6R2QxP9b1CGL4nGz2kThKMi8XCRD78R4",
  authDomain: "to-do-list-firebase-44004.firebaseapp.com",
  databaseURL: "https://to-do-list-firebase-44004-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "to-do-list-firebase-44004",
  storageBucket: "to-do-list-firebase-44004.firebasestorage.app",
  messagingSenderId: "207624942294",
  appId: "1:207624942294:web:e4b61b6addac26d7cd4f77",
  measurementId: "G-24BDWM6NB1"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getDatabase(app);