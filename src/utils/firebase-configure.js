import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
const firebaseConfig = {
    apiKey: "AIzaSyB-iYRF62SBx4EI_SXCHi_TtJUFWu43IvE",
    authDomain: "react-netflix-afc33.firebaseapp.com",
    projectId: "react-netflix-afc33",
    storageBucket: "react-netflix-afc33.appspot.com",
    messagingSenderId: "450182877245",
    appId: "1:450182877245:web:9721b57ded4de88fe55a54",
    measurementId: "G-TJBG5WQFTC"
};

const app = initializeApp(firebaseConfig);

export const firebaseAuth = getAuth(app);