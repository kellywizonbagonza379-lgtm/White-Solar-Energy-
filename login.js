import { auth } from "./firebase.js";
import { signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-auth.js";

const loginForm = document.getElementById("loginForm");

loginForm.addEventListener("submit", async (e) => {
    e.preventDefault();

    const phone = document.getElementById("phone").value;
    const password = document.getElementById("password").value;

    // À adapter si tu utilises le téléphone à la place de l'email.
    const email = phone + "@whitesolar.com";

    try {
        await signInWithEmailAndPassword(auth, email, password);
        alert("Connexion réussie !");
        window.location.href = "dashboard.html";
    } catch (error) {
        alert(error.message);
    }
});