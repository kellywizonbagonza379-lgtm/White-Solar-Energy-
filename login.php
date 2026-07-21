<?php
header("Content-Type: application/json");

include "config.php";

$data = json_decode(file_get_contents("php://input"), true);

$phone = trim($data["phone"]);
$password = trim($data["password"]);

$stmt = $conn->prepare("SELECT * FROM users WHERE phone = ?");
$stmt->bind_param("s", $phone);
$stmt->execute();

$result = $stmt->get_result();

if ($result->num_rows == 1) {
    $user = $result->fetch_assoc();

    if (password_verify($password, $user["password"])) {
        echo json_encode([
            "success" => true,
            "message" => "Connexion réussie."
        ]);
    } else {
        echo json_encode([
            "success" => false,
            "message" => "Mot de passe incorrect."
        ]);
    }
} else {
    echo json_encode([
        "success" => false,
        "message" => "Numéro de téléphone introuvable."
    ]);
}

$stmt->close();
$conn->close();
?>