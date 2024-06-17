// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyC6uI9CRzY9higZnD2OuskCt8VQaaovo9U",
  authDomain: "realtor-42079.firebaseapp.com",
  projectId: "realtor-42079",
  storageBucket: "realtor-42079.appspot.com",
  messagingSenderId: "446775857852",
  appId: "1:446775857852:web:d8d86e2fc44cd7622976b9",
  measurementId: "G-L7R38FT6TP",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const db = getFirestore(app);
