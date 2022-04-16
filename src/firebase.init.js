// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBp2kMwX_x0Y80GHPzTqkzFOM2NSFqoy_c",
  authDomain: "dentist-service.firebaseapp.com",
  projectId: "dentist-service",
  storageBucket: "dentist-service.appspot.com",
  messagingSenderId: "472308573297",
  appId: "1:472308573297:web:c141ea0fee8a8d05f527d0"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app)

export default auth;