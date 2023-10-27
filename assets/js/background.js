import { getWeatherState } from "./wetter.js";

// Ein Array mit den Dateinamen der Bilder im Ordner
const bilder = {
    sun: [
        'pexels-elias-tigiser-1083342.jpg',
        'pexels-tomasz-filipek-1646178.jpg',
        'pexels-valentin-s-589816.jpg',
    ],
    rain: [
        'pexels-eberhard-grossgasteiger-1743392.jpg',
        'pexels-josh-hild-2448749.jpg',
        'pexels-kaique-rocha-125510.jpg',
    ],
    storm: [
        // Füge hier die Dateinamen für das Sturm-Wetter hinzu
    ],
    night: [
        'pexels-james-wheeler-1539225.jpg',
        'pexels-pixabay-315938.jpg',
        'pexels-steven-arenas-379419.jpg',
    ]
};

getWeatherState(function (weatherState) {
    const wetterStatus = weatherState;

    // Funktion, um ein zufälliges Element aus einem Array auszuwählen
    function zufallsElement(arr) {
        const zufallsIndex = Math.floor(Math.random() * arr.length);
        return arr[zufallsIndex];
    }

    // Wähle ein zufälliges Bild aus dem Array basierend auf dem Wetterstatus
    const zufallsBildName = zufallsElement(bilder[wetterStatus]);

    // Der Pfad zum Ordner, in dem sich die Bilder befinden
    const bilderOrdner = 'assets/img/backgrounds/' + wetterStatus + '/';

    // Der vollständige Pfad zum zufälligen Bild
    const zufallsBildPfad = bilderOrdner + zufallsBildName;

    // Das HTML-Element für das Bild
    const bildElement = document.getElementById('background');

    // Setze die Hintergrundbild-URL des Elements auf das zufällige Bild
    bildElement.style.backgroundImage = `url('${zufallsBildPfad}')`;
});
