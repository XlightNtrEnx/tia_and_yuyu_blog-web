import {
  getAuth,
  GoogleAuthProvider,
  setPersistence,
  browserLocalPersistence,
  signInWithPopup,
  signOut as firebaseSignOut,
  onAuthStateChanged,
  User,
} from "firebase/auth";

import { app } from "./app";

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
