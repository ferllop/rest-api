import { HttpMethod } from './HttpMethod.js'

export class Endpoint {
    constructor(private readonly method: HttpMethod, private readonly url: string) {
        this.method = method
        this.url = url
    }

    getMethod(): HttpMethod {
        return this.method
    }

    getUrl(): string {
        return this.url
    }

    getId(): string {
        const SEPARATOR = '#'
        return this.method + SEPARATOR + this.url
    }
}