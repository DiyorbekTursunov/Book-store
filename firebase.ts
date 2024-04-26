// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getStorage } from "firebase/storage"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyDMl-bHWc5SWUQphmhT7dWlfMv5VrDhqYM",
    authDomain: "book-shop-715a2.firebaseapp.com",
    projectId: "book-shop-715a2",
    storageBucket: "book-shop-715a2.appspot.com",
    messagingSenderId: "780203903378",
    appId: "1:780203903378:web:853bb2e94acc2dbd10d94b",
    measurementId: "G-9CV7EL8BFN"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const storage = getStorage(app)