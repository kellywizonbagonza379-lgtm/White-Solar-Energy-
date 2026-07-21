import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js";
import {
  getAuth,
  RecaptchaVerifier,
  signInWithPhoneNumber
} from "https://www.gstatic.com/firebasejs/10.12.2/firebase-auth.js";

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
const auth = getAuth(app);

window.recaptchaVerifier = new RecaptchaVerifier(auth, "recaptcha-container", {
  size: "normal",
  callback: () => {
    console.log("reCAPTCHA validé");
  }
});

document.getElementById("registerBtn").addEventListener("click", () => {
  const phoneNumber = document.getElementById("phone").value;

  signInWithPhoneNumber(auth, phoneNumber, window.recaptchaVerifier)
    .then((confirmationResult) => {
      window.confirmationResult = confirmationResult;
      alert("Code SMS envoyé !");
    })
    .catch((error) => {
      alert(error.message);
    });
});

document.getElementById("verifyBtn").addEventListener("click", () => {
  const code = document.getElementById("code").value;

  window.confirmationResult.confirm(code)
    .then((result) => {
      alert("Compte créé avec succès !");
      console.log(result.user);
    })
    .catch((error) => {
      alert("Code incorrect.");
    });
});