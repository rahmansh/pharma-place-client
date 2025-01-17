import { initializeApp } from "firebase/app";

const firebaseConfig = {
    apiKey: import.meta.env.VITE_apiKey,
    authDomain: import.meta.env.VITE_authDomain,
    projectId: import.meta.env.VITE_projectId,
    storageBucket: import.meta.env.VITE_storageBucket,
    messagingSenderId: import.meta.env.VITE_messagingSenderId,
    appId: import.meta.env.VITE_appId,
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;

// For .env file
// Create .env file in the root
// Copy and paste it to .env and replate it with API key
/*

VITE_apiKey=AIzaS****-us8V9CWI
VITE_authDomain=equisports-****.firebaseapp.com
VITE_projectId=equisports-80***
VITE_storageBucket=equisports-***.firebasestorage.app
VITE_messagingSenderId=44634***791
VITE_appId=1:4463***04791:web:355c996fb0d9**0172cd2

*/ 