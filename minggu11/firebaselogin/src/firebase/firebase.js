import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyB685sn66smGh1-6tCQ-f8F1WggrQ6F_QQ",
    authDomain: "minggu10-8eac6.firebaseapp.com",
    projectId: "minggu10-8eac6",
    storageBucket: "minggu10-8eac6.appspot.com",
    messagingSenderId: "3758110849",
    appId: "1:3758110849:web:75a705a967b9f099e17580",
    measurementId: "G-KKBX3HNBWJ"
};

export const myFirebase = firebase.initializeApp(firebaseConfig);
const baseDb = myFirebase.firestore();
export const db = baseDb;