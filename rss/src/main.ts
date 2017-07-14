refreshInterval = 3600

interface Settings {
    value: string
}

interface ApiResponse {
    status: string
    items: Item[]
}

interface Item {
    title: string
    pubDate: string
}

function showItem(item: Item): TextFragment {
    let date = new Date(item.pubDate.replace(" ", "T"))

    let seconds = (new Date().valueOf() - date.valueOf()) / 1000
    let minutes = seconds / 60
    let hours = minutes / 60
    let days = hours / 24

    var status = "Latest news"

    if (hours > 1) {
        status = `${Math.ceil(hours)}h ago`
    }
    if (days > 1) {
        status = `${Math.ceil(days)}d ago`
    }

    return new TextFragment(`${status}:  ${item.title}`)
}

class SpaceFragment implements Fragment {
    kind = "space"
}

async function tickAsync() {
    let text = await app.get("https://api.rss2json.com/v1/api.json?rss_url=https%3A%2F%2Fdeveloper.apple.com%2Fnews%2Frss%2Fnews.rss")
    let json = JSON.parse(text)
    let response = json as ApiResponse

    var result: Fragment[] = []
    for (let item of response.items.slice(0, 4)) {
        result.push(showItem(item))
        result.push(new TextFragment("   "))
    }

    app.displayArray(result)
}
