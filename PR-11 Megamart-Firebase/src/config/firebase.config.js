import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";


// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyALe2RHGlO7gQwBIJZPX4nCS7filDqrdXk",
  authDomain: "mega-mart-e6e7c.firebaseapp.com",
  projectId: "mega-mart-e6e7c",
  storageBucket: "mega-mart-e6e7c.firebasestorage.app",
  messagingSenderId: "255717149396",
  appId: "1:255717149396:web:a05fe0730513a4137ec941"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth(app);
