/*let firebaseConfig = {
    apiKey: "AIzaSyDIIKg87egSvA17Z4U_QS5bT5izPB8_CaU",
    authDomain: "blog-755fb.firebaseapp.com",
    projectId: "blog-755fb",
    storageBucket: "blog-755fb.appspot.com",
    messagingSenderId: "890774229106",
    appId: "1:890774229106:web:548fed95d24efbd5ef72eb"
  };

firebase.initializeApp(firebaseConfig);*/
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
let firebaseConfig = {
  apiKey: "AIzaSyDIIKg87egSvA17Z4U_QS5bT5izPB8_CaU",
  authDomain: "blog-755fb.firebaseapp.com",
  projectId: "blog-755fb",
  storageBucket: "blog-755fb.appspot.com",
  messagingSenderId: "890774229106",
  appId: "1:890774229106:web:548fed95d24efbd5ef72eb"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

let db = firebase.firestore();

