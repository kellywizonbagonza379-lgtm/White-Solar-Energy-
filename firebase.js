// firebase.js

// Import the functions you need from the SDKs you need
  import { initializeApp } from "https://www.gstatic.com/firebasejs/12.16.0/firebase-app.js";
  import { getAnalytics } from "https://www.gstatic.com/firebasejs/12.16.0/firebase-analytics.js";
  // TODO: Add SDKs for Firebase products that you want to use
  // https://firebase.google.com/docs/web/setup#available-libraries

  // Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  const firebaseConfig = {
    apiKey: "AIzaSyD6AK1vue6E9P9gqLr2xRw2ZxodY3am84M",
    authDomain: "white-solar-energy.firebaseapp.com",
    projectId: "white-solar-energy",
    storageBucket: "white-solar-energy.firebasestorage.app",
    messagingSenderId: "492509652443",
    appId: "1:492509652443:web:b76eb2f5c3df51151573fe",
    measurementId: "G-7J2S41C3CG"
  };

  // Initialize Firebase
  
  // Initialiser Firebase
const app = initializeApp(firebaseConfig);

// Authentification
import {
  getAuth,
  RecaptchaVerifier,
  signInWithPhoneNumber
} from "https://www.gstatic.com/firebasejs/12.0.0/firebase-auth.js";

const auth = getAuth(app);

// Configuration du reCAPTCHA
window.recaptchaVerifier = new RecaptchaVerifier(auth, "recaptcha-container", {
  size: "normal",
});

// Fonction pour envoyer le code SMS
window.sendCode = function () {
  const phoneNumber = document.getElementById("phone").value;

  signInWithPhoneNumber(auth, phoneNumber, window.recaptchaVerifier)
    .then((confirmationResult) => {
      window.confirmationResult = confirmationResult;
      alert("Code SMS envoyé !");
    })
    .catch((error) => {
      alert(error.message);
    });
