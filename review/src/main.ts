class ReviewData {
    status: string
    values: number[] = []

    parse(html: string) {
        this.parseStatus(html)
        this.parseChart(html)
    }

    parseStatus(html: string) {
        let regex = /<strong>iOS App Store<\/strong> (.*)<\/h4>/
        let result = regex.exec(html)

        if (result == null) {
            this.status = "error"
            return
        }

        this.status = result[1]
    }

    parseChart(html: string) {
        let regex = /points\.push\( .*, (.*)]\);/g

        var match: RegExpExecArray | null
        while(match = regex.exec(html)) {
            this.values.push(+match[1])
            if (this.values.length >= 14) {
                break
            }
        }
        this.values = this.values.reverse()   
    }
}

async function tickAsync() {
    let html = await app.get("http://appreviewtimes.com");
    let data = new ReviewData()
    data.parse(html)

    app.display(
        new TextFragment(data.status),
        new ChartFragment(data.values)
    );
}

refreshInterval = 3600

function tick() {
    tickAsync()
}