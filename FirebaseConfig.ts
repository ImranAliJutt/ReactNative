// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyC2N_ypmcY4jITrAkIazPMV-k6GQRNU1Po",
    authDomain: "iosapp-bd732.firebaseapp.com",
    projectId: "iosapp-bd732",
    storageBucket: "iosapp-bd732.appspot.com",
    messagingSenderId: "158848134188",
    appId: "1:158848134188:web:0c996ef09c50f3959ab589"
  };
  

// Initialize Firebase
export const FIREBASE_APP = initializeApp(firebaseConfig);
export const FIREBASE_AUTH = getAuth(FIREBASE_APP);
export const FIREBASE_DB = getFirestore(FIREBASE_APP);