interface NativeApi {
    get(path: string, callback: (content? : string) => void): void
    display(data : [Fragment]): void
}

declare var api: NativeApi

class App {
    async get(path: string): Promise<string> {
        return new Promise<string>(resolve => {
            api.get(path, resolve);
        });
    }

    display(data : [Fragment]): void {
        api.display(data)
    }

    displayText(text: string): void {
        let fragment = new TextFragment();
        fragment.value = text
        this.display([fragment])
    }
}

var app = new App();

interface Fragment {
    kind: string
}

class TextFragment implements Fragment {
    kind: string = "text"
    value: string
}