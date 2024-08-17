

// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.5/firebase-app.js";
import {
    getFirestore,
    doc,
    setDoc, addDoc,
    collection,
    getDocs
} from "https://www.gstatic.com/firebasejs/10.12.5/firebase-firestore.js";
import {
    getAuth,
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
} from "https://www.gstatic.com/firebasejs/10.12.5/firebase-auth.js";

import { getStorage,
    ref,
    uploadBytesResumable,getDownloadURL,} from "https://www.gstatic.com/firebasejs/10.12.5/firebase-storage.js";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyC_RaSNCelNtjfJzGbX2mVhnUwIPjdlxdY",
    authDomain: "blog-app-dfbee.firebaseapp.com",
    projectId: "blog-app-dfbee",
    storageBucket: "blog-app-dfbee.appspot.com",
    messagingSenderId: "255576447939",
    appId: "1:255576447939:web:dcf4d25fc0dbae6eff7b76"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// initialize cloud firestore
const db = getFirestore(app);

// auth
const auth = getAuth(app);

// initialize storage
const storage = getStorage();


export {
    app,
    db,
    auth,
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    doc,
    setDoc,
    addDoc,
    collection,
    getDocs,
    storage,
    ref,
    uploadBytesResumable,
    getDownloadURL,

}