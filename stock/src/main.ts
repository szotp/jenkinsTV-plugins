refreshInterval = 3600

interface Settings {
    value: string
}

interface ApiResponse {
    t: string
    l_cur: string
}

async function tickAsync() {
    let text = await app.get(`http://www.google.com/finance/info?q=${settings.value}`)
    let json = JSON.parse(text.slice(3))
    let response = json[0] as ApiResponse
    app.displayText(`${response.t} \$${response.l_cur}`)
}
