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
  apiKey: "AIzaSyBX1lV8lPrzwoDYgX2k74YwaLDIGsgK0mE",
  authDomain: "dialog-leticia.firebaseapp.com",
  projectId: "dialog-leticia",
  storageBucket: "dialog-leticia.firebasestorage.app",
  messagingSenderId: "843423850524",
  appId: "1:843423850524:web:a53200c342306cd3147fd9",
  measurementId: "G-1G0GBVFEMH"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);

export const db = getFirestore(app);

export const storage = getStorage(app);

