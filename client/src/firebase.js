// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mern-blog-8f901.firebaseapp.com",
  projectId: "mern-blog-8f901",
  storageBucket: "mern-blog-8f901.appspot.com",
  messagingSenderId: "399779511647",
  appId: "1:399779511647:web:0a8ba9e72becc958a3caea"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);