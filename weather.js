var refreshInterval = 60 * 10;

// SETTINGS
// token : String <- token fo openweathermap.org
// city : String <- name of the city to perform weather search

function tick() {
    var url = `http://api.openweathermap.org/data/2.5/weather?id=xxxx&units=metric&q=${settings.city}&appid=${settings.token}`
    api.get(url, function (result) {
        var json = JSON.parse(result);
        var temp = json.main.temp
        var humidity = json.main.humidity;
        api.display([`🌡${temp}°C 💦${humidity}%`]);
    });
}
