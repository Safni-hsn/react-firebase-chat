
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: import.meta.env.VITE_API_KEY,
  authDomain: "mychatapp-19613.firebaseapp.com",
  projectId: "mychatapp-19613",
  storageBucket: "mychatapp-19613.appspot.com",
  messagingSenderId: "738549262879",
  appId: "1:738549262879:web:d06e24afa13f5ee999c32a"
};


const app = initializeApp(firebaseConfig);

export const auth =getAuth()
export const db = getFirestore()
export const storage = getStorage()