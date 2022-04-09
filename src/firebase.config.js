// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "@firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyC-DkdMsgjTEY8Nz5Ck1PKt6XTmVEcQZAc",
  authDomain: "kjsce-hack.firebaseapp.com",
  projectId: "kjsce-hack",
  storageBucket: "kjsce-hack.appspot.com",
  messagingSenderId: "934865767921",
  appId: "1:934865767921:web:189102e37366e304138850",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export default db;
