
import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mern-auth-69c84.firebaseapp.com",
  projectId: "mern-auth-69c84",
  storageBucket: "mern-auth-69c84.appspot.com",
  messagingSenderId: "796146408342",
  appId: "1:796146408342:web:028cf557cc261aab2f1bb7"
};


export const app = initializeApp(firebaseConfig);