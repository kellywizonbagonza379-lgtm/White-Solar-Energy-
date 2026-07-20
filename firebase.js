<script type="module">
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
    appId: "1:492509652443:web:26dcf8ffc7507c321573fe",
    measurementId: "G-V10M1W72WR"
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  const analytics = getAnalytics(app);
</script>