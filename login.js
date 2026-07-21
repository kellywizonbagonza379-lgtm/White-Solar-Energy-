document.getElementById("loginBtn").addEventListener("click", async () => {

    const phone = document.getElementById("phone").value.trim();
    const password = document.getElementById("password").value.trim();

    if (phone === "" || password === "") {
        alert("Veuillez remplir tous les champs.");
        return;
    }

    try {

        const response = await fetch("login.php", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                phone: phone,
                password: password
            })
        });

        const result = await response.json();

        if (result.success) {
            alert("Connexion réussie !");
            window.location.href = "dashboard.html";
        } else {
            alert(result.message);
        }

    } catch (error) {
        alert("Erreur de connexion au serveur.");
    }

});