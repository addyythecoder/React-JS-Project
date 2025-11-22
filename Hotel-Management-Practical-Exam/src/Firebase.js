import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD55Q8z5OkHAMwM2REXEWdHE_cZ8OPZUoM",
  authDomain: "hotel-management-c04f2.firebaseapp.com",
  projectId: "hotel-management-c04f2",
  storageBucket: "hotel-management-c04f2.firebasestorage.app",
  messagingSenderId: "671827648472",
  appId: "1:671827648472:web:8cf616fe2b9a0a92175cad"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth(app);