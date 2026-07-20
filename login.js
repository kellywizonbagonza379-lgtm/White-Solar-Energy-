import { auth } from "./firebase.js";
import {
  RecaptchaVerifier,
  signInWithPhoneNumber
} from "https://www.gstatic.com/firebasejs/10.12.2/firebase-auth.js";

window.recaptchaVerifier = new RecaptchaVerifier(auth, "recaptcha-container", {
  size: "normal",
  callback: (response) => {
    console.log("reCAPTCHA validé");
  }
});
const form = document.getElementById("loginForm");

form.addEventListener("submit", async (e) => {
    e.preventDefault();

    const phoneNumber = document.getElementById("phone").value;

    const appVerifier = window.recaptchaVerifier;

    try {
        const confirmationResult = await signInWithPhoneNumber(
            auth,
            phoneNumber,
            appVerifier
        );

        window.confirmationResult = confirmationResult;

        const code = prompt("Entrez le code SMS reçu :");

        await confirmationResult.confirm(code);

        alert("Connexion réussie !");
        window.location.href = "dashboard.html";

    } catch (error) {
        alert(error.message);
    }
});