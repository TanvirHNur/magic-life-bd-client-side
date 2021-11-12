import { initializeApp } from "firebase/app";
import firebaseConfig from "./firebase.config";

// Initialize Firebase
const initializeFirebaseAuth = () =>{
    initializeApp(firebaseConfig);
}

export default initializeFirebaseAuth;