import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAGEq_Shd_3lk4nK9pogfVNrXGqxz3aZXk",
  authDomain: "dev-deakin-auth-334e7.firebaseapp.com",
  projectId: "dev-deakin-auth-334e7",
  storageBucket: "dev-deakin-auth-334e7.firebasestorage.app",
  messagingSenderId: "114708340413",
  appId: "1:114708340413:web:4bd6bc3b6b8e675368a1d4",
  measurementId: "G-VPC381939Q"
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const db = getFirestore(app);
