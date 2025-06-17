// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAbi39zncOsPpgBgR7_gM864J6r2zsIYs8",
  authDomain: "ksiegarniakleks.firebaseapp.com",
  projectId: "ksiegarniakleks",
  storageBucket: "ksiegarniakleks.firebasestorage.app",
  messagingSenderId: "882860933917",
  appId: "1:882860933917:web:b6257d823f78e63d5fd7f4",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);

export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();
