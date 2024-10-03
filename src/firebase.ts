// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyC5h87jZDoMJICnAq7dyNRAtZdGRBcO4Ms",
  authDomain: "tia-and-yuyu-blog.firebaseapp.com",
  projectId: "tia-and-yuyu-blog",
  storageBucket: "tia-and-yuyu-blog.appspot.com",
  messagingSenderId: "158823317528",
  appId: "1:158823317528:web:17a97297fff2ec93b9836d",
  measurementId: "G-LN6M6GZHQ9",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
