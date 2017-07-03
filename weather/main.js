var refreshInterval = 60 * 10;
var renderAsHtml = true;

settings = {
    token: "f5dd1350e64f758199c1cca5f98b2ed8"
};

var style = `
    .heading {
        font-size: 45;
        visibility: hidden;
    }

    .detail {
        font-size: 35;
    }
`;

function displayWeather(city, temp, humidity) {
    var content = `${temp}°C, ${humidity}`;

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
    var url = `http://api.openweathermap.org/data/2.5/weather?id=xxxx&units=metric&q=Rzeszow&appid=${settings.token}`
    api.get(url, function (result) {
        var json = JSON.parse(result);
        displayWeather("Rzeszów", json.main.temp, json.main.humidity);
    });
}