var refreshInterval = 60 * 10;
var renderAsHtml = true;

// SETTINGS
// token : String <- token fo openweathermap.org
// city : String <- name of the city to perform weather search

var style = `
    .heading {
        font-size: 40;
        visibility: hidden;
        color: red;
    }

    .detail {
        font-size: 30;
    }

    img {
        background-color: red;
        overflow: hidden;
    }
`;

function displayWeather(city, temp, humidity) {
    var content = `🌡${temp}°C 💦${humidity}%`;

    var html = `
        <style>${style}</style>${content}
    `;

    api.display(html);
}

function tick() {
    var url = `http://api.openweathermap.org/data/2.5/weather?id=xxxx&units=metric&q=${settings.city}&appid=${settings.token}`
    api.get(url, function (result) {
        var json = JSON.parse(result);
        displayWeather("Rzeszów", json.main.temp, json.main.humidity);
    });
}
