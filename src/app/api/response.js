export function Response(data, code, headers) {
    this.data = data
    this.code = code

    const defaultHeaders = {'Content-Type': 'application/json'}
    this.headers = {...defaultHeaders, ...headers}
}

