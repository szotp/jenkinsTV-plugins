var refreshInterval = 1.0;

function format(value) {
	return ("0" + value).slice(-2);
}

function tick() {
	var date = new Date();
	var hours = date.getHours();
	var minutes = date.getMinutes();
	var seconds = date.getSeconds();

    return `${format(hours)}:${format(minutes)}:${format(seconds)}`;
}
