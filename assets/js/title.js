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

});