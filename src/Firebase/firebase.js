// src/firebase.js
import { initializeApp } from 'firebase/app';
import { getAuth, GoogleAuthProvider } from 'firebase/auth';

const firebaseConfig = {
    apiKey: "AIzaSyCeMVRSHVtoYS9mcX9GwZEPJtKa6fC42DU",
    authDomain: "dua-for-dhikr.firebaseapp.com",
    projectId: "dua-for-dhikr",
    storageBucket: "dua-for-dhikr.firebasestorage.app",
    messagingSenderId: "693769892973",
    appId: "1:693769892973:web:4d75bfeebb0e84adc6bb64",
    measurementId: "G-MG7H49JJMR"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();

export { auth, provider };
