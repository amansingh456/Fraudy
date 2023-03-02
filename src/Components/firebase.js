// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth , GoogleAuthProvider} from "firebase/auth"

const firebaseConfig = {
  apiKey: "AIzaSyCKkfPrE4TizHCASxrNKjWScp8enWY56Gs",
  authDomain: "fraudyabhi.firebaseapp.com",
  projectId: "fraudyabhi",
  storageBucket: "fraudyabhi.appspot.com",
  messagingSenderId: "394822285147",
  appId: "1:394822285147:web:431982732b5d9f6a3ccc7e",
  measurementId: "G-LSHY0ZBCCX"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth()
const provider =  new GoogleAuthProvider()

export {app,auth,provider}