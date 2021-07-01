export class Response {
    #data
    #code
    #headers

    constructor(data, code, headers) {
        this.#data = data
        this.#code = code

        const defaultHeaders = {'Content-Type': 'application/json'}
        this.#headers = {...defaultHeaders, ...headers}
    }

    getData() {
        return this.#data
    }

    getCode() {
        return this.#code
    }
    
    getHeaders() {
        return this.#headers
    }

    getHeaderOption(option) {
        return this.getHeaders()[option]
    }
}


