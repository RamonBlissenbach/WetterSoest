<?php

// API-URL
$api_url = 'http://45.89.141.198:44217/api/v1/globalData';

// Daten von der API abrufen
$response = file_get_contents($api_url);

// Überprüfen, ob die Anfrage erfolgreich war
if ($response !== false) {
    // Die API-Antwort ist in $response enthalten, daher dekodieren wir sie in ein assoziatives Array
    $data = json_decode($response, true);

    // Überprüfen, ob das Dekodieren erfolgreich war
    if ($data !== null) {
        // Wetterstatus basierend auf den Daten berechnen
        $temperature = $data['temperature'];
        $pressure = $data['pressure'];
        $humidity = $data['humidity'];
        $precipitation = $data['precipitation'];
        $lux = $data['lux'];
        $uv = $data['uv'];

        // Hier kannst du den Wetterstatus basierend auf den Daten berechnen und ausgeben
        $weatherStatus = calculateWeatherStatus($temperature, $pressure, $humidity, $precipitation, $lux, $uv);
        echo $weatherStatus;
    } else {
        // Fehlerbehandlung, wenn das JSON nicht korrekt dekodiert werden konnte
        echo 'Fehler beim Dekodieren der API-Antwort';
    }
} else {
    // Fehlerbehandlung, wenn die Anfrage fehlgeschlagen ist
    echo 'Fehler beim Abrufen der API-Daten';
}

// Funktion zur Berechnung des Wetterstatus
function calculateWeatherStatus($temperature, $pressure, $humidity, $precipitation, $lux, $uv) {
    // Hier kannst du deine Wetterstatus-Berechnungslogik implementieren
    // Zum Beispiel: Wenn $temperature über einem bestimmten Wert liegt und $precipitation niedrig ist, könnte es sonnig sein.

    if ($temperature > 20 && $uv > 0.5) {
        return 'sun';
    } elseif ($precipitation > 0.01) {
        return 'rain';
    } elseif ($uv <= 0.5) {
        return 'night';
    } else {
        return 'sun';
    }
}

?>
