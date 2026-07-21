<?php
header("Content-Type: application/json");

include "config.php";

$data = json_decode(file_get_contents("php://input"), true);

$phone = trim($data["phone"]);
$password = trim($data["password"]);

if (empty($phone) || empty($password)) {
    echo json_encode([
        "success" => false,
        "message" => "Veuillez remplir tous les champs."
    ]);
    exit;
}

$check = $conn->prepare("SELECT id FROM users WHERE phone = ?");
$check->bind_param("s", $phone);
$check->execute();
$result = $check->get_result();

if ($result->num_rows > 0) {
    echo json_encode([
        "success" => false,
        "message" => "Ce numéro existe déjà."
    ]);
    exit;
}

$hashedPassword = password_hash($password, PASSWORD_DEFAULT);

$stmt = $conn->prepare("INSERT INTO users (phone, password) VALUES (?, ?)");
$stmt->bind_param("ss", $phone, $hashedPassword);

if ($stmt->execute()) {
    echo json_encode([
        "success" => true,
        "message" => "Compte créé avec succès."
    ]);
} else {
    echo json_encode([
        "success" => false,
        "message" => "Erreur lors de l'inscription."
    ]);
}

$stmt->close();
$conn->close();
?>