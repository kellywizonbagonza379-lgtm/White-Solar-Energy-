<?php

$host = "sql204.infinityfree.com";
$dbname = "if0_42462887_whitesolar";
$username = "if0_42462887";
$password = "ZceVEhr3pNPH1";

$conn = new mysqli($host, $username, $password, $dbname);

if ($conn->connect_error) {
    die("Erreur de connexion : " . $conn->connect_error);
}

$conn->set_charset("utf8");
?>