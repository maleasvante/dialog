// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCn55RKgloYgBVCnsJg2r5GGUDuJur1fY4",
  authDomain: "dialog-d5b97.firebaseapp.com",
  projectId: "dialog-d5b97",
  storageBucket: "dialog-d5b97.firebasestorage.app",
  messagingSenderId: "227927289046",
  appId: "1:227927289046:web:4a5823ecdfe9a8b4386d77",
  measurementId: "G-3SJE7ZHQPY"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);

export const db = getFirestore(app);

export const storage = getStorage(app);

