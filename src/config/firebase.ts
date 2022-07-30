// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAfwcdQ9PAfdTdhV6y39CoXVZZ8W62aYfI",
  authDomain: "good2know-7ba36.firebaseapp.com",
  projectId: "good2know-7ba36",
  storageBucket: "good2know-7ba36.appspot.com",
  messagingSenderId: "413371272456",
  appId: "1:413371272456:web:e2fd93c8c0ea591667f0bd"
};

// Initialize Firebase
export const initializeFirebase = () => initializeApp(firebaseConfig);
