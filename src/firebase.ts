// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {
  getAuth,
  GoogleAuthProvider,
  signInWithPopup,
  browserLocalPersistence,
  setPersistence,
  onAuthStateChanged,
  User,
  signOut as firebaseSignOut,
} from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { initializeAppCheck, ReCaptchaV3Provider } from "firebase/app-check";

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

// Use analytics
getAnalytics(app);

// Use authentication
const auth = getAuth(app);
const googleAuthProvider = new GoogleAuthProvider();
setPersistence(auth, browserLocalPersistence);
export const signInWithGoogle = async () => {
  const result = await signInWithPopup(auth, googleAuthProvider);
  return result;
};
export const signOut = async () => {
  await firebaseSignOut(auth);
};
export const onAuthStateChangedListener = (
  callback: (user: User | null) => void
) => {
  const unsubscribe = onAuthStateChanged(auth, callback);
  return unsubscribe;
};

// Initialize Firestore
getFirestore(app);

// Use app check
initializeAppCheck(app, {
  provider: new ReCaptchaV3Provider("6LdFT1oqAAAAAKJ8GTXfeSqjYA5zhtC4FPG4BVxs"),
  isTokenAutoRefreshEnabled: true,
});
