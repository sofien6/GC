// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "@firebase/firestore"
// import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyDHXHbVuoDTQGvqqIL1o9_K3UZDp6SKC5E",
    authDomain: "generationchallenge-63274.firebaseapp.com",
    projectId: "generationchallenge-63274",
    storageBucket: "generationchallenge-63274.appspot.com",
    messagingSenderId: "186868671",
    appId: "1:186868671:web:aa2ca80f3902449a14770a",
    measurementId: "G-PBB7WKBZ34"
};

// Initialize Firebase
const firebase_database = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
export default getFirestore(firebase_database);