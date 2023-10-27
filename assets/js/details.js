import { getWeatherDate } from "./wetter.js";

var url = new URL(window.location.href);
var searchButton = document.getElementById('searchButton');


if (url.searchParams.has('date')) {
    var dateValue = url.searchParams.get('date');

    if (dateValue) {
        document.getElementById('dateInput').value = dateValue;
        document.getElementById('cardtitleDate').innerText = dateValue;
    }else {
        document.getElementById('card').hidden = true;
    }
} else {
    document.getElementById('card').hidden = true;
}

searchButton.addEventListener('click', function () {
    var date = document.getElementById('dateInput').value;
    if (date) {
        window.location.href = "?date="+date;
    }
});

function updateTable() {
    getWeatherDate("27.10.2023", function (weather) {
        var data = JSON.parse(weather);

        document.getElementById('temperature').innerText = data.temperature.toFixed(2) + "°C";
        document.getElementById('pressure').innerText = data.pressure.toFixed(2) + "hPa";
        document.getElementById('humidity').innerText = data.humidity.toFixed(2) + "%";
        document.getElementById('precipitation').innerText = data.precipitation.toFixed(2) + "mm";
        document.getElementById('lux').innerText = data.lux.toFixed(2) + "lx";
        document.getElementById('uv').innerText = data.uv.toFixed(2) + "µW/cm²";
    });
}

updateTable();

