var refreshInterval = 60 * 6;

function tick() {
    var url = settings.url
    api.get(url, function (result) {
        var json = JSON.parse(result);

        var result = ""

        for (var i = 0; i < json.samples.length; i++) {
        	let sample = json.samples[i];
        	let data = sample.sampledata[0].items[0];

        	result += `${data.title}: ${data.value} `;
        }

        api.display(result);
    });
}
