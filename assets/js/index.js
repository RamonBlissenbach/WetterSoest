import { getWeatherState, getWeather } from "./wetter.js";

// Ermitteln Sie den Wetterstatus basierend auf den Daten
var wetterStatus = "???";

getWeatherState(function (weatherState) {
    wetterStatus = weatherState;

    // Funktion zum Laden von Textdateien
    function loadTextFile(file, callback) {
        var xhr = new XMLHttpRequest();
        xhr.open("GET", file, true);
        xhr.onreadystatechange = function () {
            if (xhr.readyState === 4 && xhr.status === 200) {
                callback(xhr.responseText);
            }
        };
        xhr.send();
    }

    switch (wetterStatus) {
        case "sun":
            document.getElementById("header").innerHTML = "WetterSoest ☀️";
            break;
        case "rain":
            document.getElementById("header").innerHTML = "WetterSoest 🌧️";
            break;
        case "night":
            document.getElementById("header").innerHTML = "WetterSoest 🌙";
            break;
        case "storm":
            document.getElementById("header").innerHTML = "WetterSoest ⚡";
            break;
        default:
            break;

    }

    // Textdatei für den entsprechenden Wetterstatus laden
    var wetterTextDatei = "assets/messages/" + wetterStatus.toLowerCase() + ".txt";
    loadTextFile(wetterTextDatei, function (text) {
        var zeilen = text.split('\n');
        var zufälligerText = zeilen[Math.floor(Math.random() * zeilen.length)];
        document.getElementById("wetterText").innerHTML = zufälligerText;
    });
});

getWeather(function (weatherData) {
    try {
        const data = JSON.parse(weatherData);
        if (data.hasOwnProperty("temperature")) {
            const temperature = data.temperature;
            const roundedTemperature = parseFloat(temperature).toFixed(0);
            document.getElementById('temp').textContent = roundedTemperature+"°C";
        } else {
            document.getElementById('temp').textContent = "Daten nicht verfügbar";
        }
    } catch (error) {
        console.error("Fehler beim Parsen der API-Antwort: " + error);
        document.getElementById('temp').textContent = "Fehler beim Abrufen der Temperatur";
    }
});