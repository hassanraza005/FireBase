import { initializeApp } from "https://www.gstatic.com/firebasejs/9.10.0/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/9.10.0/firebase-auth.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/10.12.4/firebase-firestore-compat.js";


const firebaseConfig = {
    apiKey: "AIzaSyDCN3090jYaUEII7FAWO8glWQ5KZr13AVg",
    authDomain: "signin-page-711fd.firebaseapp.com",
    projectId: "signin-page-711fd",
    storageBucket: "signin-page-711fd.appspot.com",
    messagingSenderId: "524035819584",
    appId: "1:524035819584:web:289784bbec02fd61adf7a5",
    measurementId: "G-ZVJR75LMLE"
  };

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);


