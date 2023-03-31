class Console {
    static messages: Array<string> = [];

    static log(message: string) {
        console.log(message)
        this.messages.push(message)
    }

    static clear() {
        this.messages =[]
    }
}