var refreshInterval = 60 * 10;
var renderAsHtml = true;

// SETTINGS
// token : String <- token fo openweathermap.org
// city : String <- name of the city to perform weather search

var style = `
    .heading {
        font-size: 40;
        visibility: hidden;
    }

    .detail {
        font-size: 30;
    }
`;

function displayWeather(city, temp, humidity) {
    var content = `<span class='heading'>${settings.city}</span> ${temp}°C, ${humidity}%`;

    var html = `
        <html>
        <style>${style}</style>
        <head><meta charset="UTF-8"></head>
        <body>${content}</body>
        </html>
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
