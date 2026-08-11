// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCUPZawb5kiK6zCsKzpug4_MLu3c0lfQMI",
  authDomain: "training-site-react.firebaseapp.com",
  projectId: "training-site-react",
  storageBucket: "training-site-react.firebasestorage.app",
  messagingSenderId: "285702768682",
  appId: "1:285702768682:web:4c992f0e3cfaf3df885b53",
  measurementId: "G-GF17859131"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export {app, analytics}