async function tickAsync() {
    app.display(
        new TextFragment("hello world")
    )
}

function tick() {
    tickAsync()
}