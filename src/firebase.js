// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA2N0pizvqCebVd5ajHis8_fdBI0kxgStM",
  authDomain: "todo-app-4132f.firebaseapp.com",
  projectId: "todo-app-4132f",
  storageBucket: "todo-app-4132f.appspot.com",
  messagingSenderId: "91995214874",
  appId: "1:91995214874:web:32bf73ed25ae9946d4eda3"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);