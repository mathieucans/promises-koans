class DatedMessage {
    public readonly date = new Date();

    constructor(
        public readonly message
    ) {
    }
}

export class Console {
    private static _messages: Array<DatedMessage> = [];
    static get messages(): Array<string> {
        if (this._messages.length === 0) {
            return [];
        }
        const t0 = this._messages[0].date;
        return this._messages.map(m => {
            let delta = m.date.getTime() - t0.getTime();
            if(delta < 1000){
                return `T0 - ${m.message}`
            }
            return `T0+${Math.round(delta/1000)}s - ${m.message}`;
        });
    }

    static log(message: string) {
        console.log(message)
        this._messages.push(new DatedMessage(message))
    }

    static clear() {
        this._messages = []
    }
}