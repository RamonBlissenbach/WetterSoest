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
    if (url.searchParams.has('date')) {
        var dateValue = url.searchParams.get('date');

        getWeatherDate(formatDate(dateValue), function (weather) {
            var data = JSON.parse(weather);

            document.getElementById('temperature').innerText = data.temperature.toFixed(2) + "°C";
            document.getElementById('pressure').innerText = data.pressure.toFixed(2) + "hPa";
            document.getElementById('humidity').innerText = data.humidity.toFixed(2) + "%";
            document.getElementById('precipitation').innerText = data.precipitation.toFixed(2) + "mm";
            document.getElementById('lux').innerText = data.lux.toFixed(2) + "lx";
            document.getElementById('uv').innerText = data.uv.toFixed(2) + "µW/cm²";
        });
    }
}

function formatDate(inputDate) {
    // Create a Date object from the input date string
    var date = new Date(inputDate);

    // Check if the input date is valid
    if (isNaN(date)) {
        return "Invalid Date";
    }

    // Extract the day, month, and year components
    var day = date.getDate();
    var month = date.getMonth() + 1; // Month is zero-based
    var year = date.getFullYear();

    // Ensure the day and month are formatted as two digits
    if (day < 10) {
        day = "0" + day;
    }
    if (month < 10) {
        month = "0" + month;
    }

    // Create the formatted date string in "DD.MM.yyyy" format
    var formattedDate = day + "." + month + "." + year;

    return formattedDate;
}

updateTable();

