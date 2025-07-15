// src/firebase.js

import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyA5RMoAw9lOTSvvUsgpJmKgMNo_Zxv__iE",
  authDomain: "dusic-b8ae1.firebaseapp.com",
  projectId: "dusic-b8ae1",
  storageBucket: "dusic-b8ae1.appspot.com",  // Corrected here
  messagingSenderId: "877192828894",
  appId: "1:877192828894:web:a7dd7cd8ffbe5938f26f4f",
  measurementId: "G-QMHP68J04F"
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const db = getFirestore(app);
export const storage = getStorage(app);
