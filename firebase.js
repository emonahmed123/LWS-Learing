// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

import {
    createUserWithEmailAndPassword,
    getAuth,
    GoogleAuthProvider,
    sendPasswordResetEmail,
    signInWithEmailAndPassword,
    signInWithPopup
} from "firebase/auth";


// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyD-6lWN7XegGTMk8w_3cC4H-9hfENi32HY",
    authDomain: "gusetbook-a71cb.firebaseapp.com",
    projectId: "gusetbook-a71cb",
    storageBucket: "gusetbook-a71cb.firebasestorage.app",
    messagingSenderId: "76245529205",
    appId: "1:76245529205:web:01aaa56c67f40eabb7be3c"
};

// Initialize Firebase


const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const googleAuthProvider = new GoogleAuthProvider();

const registerWithEmailAndPassword = async (email, password) => {
    try {
        const res = await createUserWithEmailAndPassword(auth, email, password);
        const user = res.user;
        return user;
    } catch (err) {
        throw error;
    }
};

const loginWithEmailAndPassword = async (email, password) => {
    try {
        const response = await signInWithEmailAndPassword(
            auth,
            email,
            password
        );
        return response;
    } catch (err) {
        throw error;
    }
};

const sendPasswordReset = async (email) => {
    try {
        await sendPasswordResetEmail(auth, email);
    } catch (error) {
        throw (error);
    }
}

const signInWithGoogle = async () => {
    try {
        const res = await signInWithPopup(auth, googleAuthProvider);
        const user = res.user;
        return user;
    } catch (error) {
        throw (error)
    }
}

export { auth, loginWithEmailAndPassword, registerWithEmailAndPassword, sendPasswordReset, signInWithGoogle };

