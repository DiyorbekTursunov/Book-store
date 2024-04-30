// firebase.js
import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";
import dotenv from "dotenv";

dotenv.config();

const firebaseConfig = {
    apiKey: process.env.GOOGLE_TOKEN,
    authDomain: process.env.authDomain,
    projectId: process.env.projectId,
    storageBucket: "book-shop-715a2.appspot.com",
    messagingSenderId: process.env.messagingSenderId,
    appId: process.env.appId,
    measurementId: process.env.measurementId
};


// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const storage = getStorage(app)