import { initializeApp } from "firebase/app";
import { GoogleAuthProvider, getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDSnNOm1RUvggqruBtBrL06CBPAlKdqFwk",
  authDomain: "uber-clone-c4f71.firebaseapp.com",
  projectId: "uber-clone-c4f71",
  storageBucket: "uber-clone-c4f71.appspot.com",
  messagingSenderId: "492332833752",
  appId: "1:492332833752:web:ff6fbb87a18b0ec96a70ad"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const provider = new GoogleAuthProvider(); 
const auth =  getAuth();

export { app, provider, auth }