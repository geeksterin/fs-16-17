// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDM8YmDikKNActEYAzkD0ykfRBYPAP8v0Y",
  authDomain: "ecom-geekster.firebaseapp.com",
  projectId: "ecom-geekster",
  storageBucket: "ecom-geekster.appspot.com",
  messagingSenderId: "839679382567",
  appId: "1:839679382567:web:bf449d407c11d1ee2a6a02",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;
