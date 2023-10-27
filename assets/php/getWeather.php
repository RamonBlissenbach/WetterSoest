<?php

// API-URL
$api_url = 'http://45.89.141.198:44217/api/v1/globalData';

// Daten von der API abrufen
$response = file_get_contents($api_url);

// Überprüfen, ob die Anfrage erfolgreich war
if ($response !== false) {
    // Die API-Antwort ist in $response enthalten
    echo $response;
} else {
    // Fehlerbehandlung, wenn die Anfrage fehlgeschlagen ist
    echo 'Fehler beim Abrufen der API-Daten';
}

?>