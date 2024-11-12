// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyC5uyqo0LpGUK8iswpW0VfuBqCiTvlwp7E",
  authDomain: "agustin-b41f3.firebaseapp.com",
  projectId: "agustin-b41f3",
  storageBucket: "agustin-b41f3.appspot.com",
  messagingSenderId: "656045732024",
  appId: "1:656045732024:web:05d1364ed65b49645c444d",
  measurementId: "G-3E6EL0EVWY"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();