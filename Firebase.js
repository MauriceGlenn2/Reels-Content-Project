// Import the functions you need from the SDKs you need
import { initializeApp, getApps } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getAuth } from "firebase/auth";
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAQ4hVX-jDPBdalIajxrqtamPZ8pZmsItg",
  authDomain: "reels-project-9fe89.firebaseapp.com",
  projectId: "reels-project-9fe89",
  storageBucket: "reels-project-9fe89.appspot.com",
  messagingSenderId: "831740412221",
  appId: "1:831740412221:web:f291a16309d239d758c554",
};

// Initialize Firebase
let app;

if (!getApps().length) {
  app = initializeApp(firebaseConfig);
} else {
  app = getApps()[0];
}

const auth = getAuth(app);
const db = getFirestore();
export { db, auth };
