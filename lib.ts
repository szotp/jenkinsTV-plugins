interface NativeApi {
    get(path: string, callback: (content? : string) => void): void
    display(data : Fragment[]): void
}

declare var api: NativeApi

class App {
    async get(path: string): Promise<string> {
        return new Promise<string>(resolve => {
            api.get(path, resolve);
        });
    }

    display(...data : Fragment[]): void {
        api.display(data)
    }

    displayText(text: string): void {
        this.display(
            new TextFragment(text)
        )
    }
}

var app = new App();
var refreshInterval = 0

interface Fragment {
    kind: string
}

class TextFragment implements Fragment {
    kind: string = "text"
    value: string
    constructor(value: string) {
        this.value = value
    }
}

class ChartFragment implements Fragment {
    kind: string = "chart"
    value: number[]
    constructor(value: number[]) {
        this.value = value
    }
}