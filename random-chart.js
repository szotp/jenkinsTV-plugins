var result = {
	"kind" : "chart",
	"value" : Array.apply(null, Array(10)).map(Number.prototype.valueOf,0)
};

refreshInterval = 0.5;

function tick() {
	result.value.push(Math.random() * 5);
	result.value = result.value.slice(-10);
    return result;
}