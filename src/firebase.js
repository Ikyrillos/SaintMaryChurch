// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCdIOYa6xsrwKTTshUtRbK-tw2GWGU7rBM",
  authDomain: "saint-mary-church-1.firebaseapp.com",
  projectId: "saint-mary-church-1",
  storageBucket: "saint-mary-church-1.appspot.com",
  messagingSenderId: "228128981837",
  appId: "1:228128981837:web:a023f151d3fcd61bbaed04",
  measurementId: "G-QSRD9WWB5Y",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
