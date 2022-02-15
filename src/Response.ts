export class Response {
    private readonly headers

    constructor(private data: any, private code: number, headers?: any) {
        const defaultHeaders = {'Content-Type': 'application/json'}
        this.headers = {...defaultHeaders, ...headers}
    }

    getData() {
        return this.data
    }

    getCode() {
        return this.code
    }
    
    getHeaders() {
        return this.headers
    }

    getHeaderOption(option: any) {
        return this.getHeaders()[option]
    }
}


