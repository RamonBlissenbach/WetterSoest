/*
 * Loads the Weather State
 */
export function getWeatherState(callback) {
    var xhr = new XMLHttpRequest();
    xhr.open("GET", "assets/php/getWeatherState.php", true);
    xhr.onreadystatechange = function() {
        if (xhr.readyState === 4 && xhr.status === 200) {
            callback(xhr.responseText);
        }
    };
    xhr.send();
}

export function getWeather(callback) {
    var xhr = new XMLHttpRequest();
    xhr.open("GET", "assets/php/getWeather.php", true);
    xhr.onreadystatechange = function() {
        if (xhr.readyState === 4 && xhr.status === 200) {
            callback(xhr.responseText);
        }
    };
    xhr.send();
}

export function getWeatherDate(date, callback) {
    var xhr = new XMLHttpRequest();
    xhr.open("GET", "assets/php/getWeatherDate.php?date="+date, true);
    xhr.onreadystatechange = function() {
        if (xhr.readyState === 4 && xhr.status === 200) {
            callback(xhr.responseText);
        }
    };
    xhr.send();
}