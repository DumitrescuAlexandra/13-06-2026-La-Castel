// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDE8sxx3oBQK9pkfg6fDaCAOs9EX7EXh8g",
  authDomain: "nunta-la-castel.firebaseapp.com",
  projectId: "nunta-la-castel",
  storageBucket: "nunta-la-castel.firebasestorage.app",
  messagingSenderId: "213234696699",
  appId: "1:213234696699:web:7ce15cf6958cfc03660b5e",
  measurementId: "G-2JDE49L0C7",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
