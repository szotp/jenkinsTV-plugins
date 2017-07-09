async function tickAsync() {
    var result = await app.get("site");
    app.displayText("hello world");
}

function tick() {
    tickAsync()
}