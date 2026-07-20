import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js";
import {
  getAuth,
  RecaptchaVerifier,
  signInWithPhoneNumber
} from "https://www.gstatic.com/firebasejs/10.12.2/firebase-auth.js";

const firebaseConfig = {
  apiKey: "TON_API_KEY",
  authDomain: "TON_PROJET.firebaseapp.com",
  projectId: "TON_PROJET",
  storageBucket: "TON_PROJET.appspot.com",
  messagingSenderId: "TON_MESSAGING_SENDER_ID",
  appId: "TON_APP_ID"
};

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