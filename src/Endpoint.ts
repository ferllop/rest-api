import { HttpMethod } from "./HttpMethod.js"

export class Endpoint {
    /**type {HttpMethod} */
    #method

    /**type {string} */
    #url

    constructor(method, url) {
        this.#method = method
        this.#url = url
    }

    /** @returns {HttpMethod} */
    getMethod() {
        return this.#method
    }

    /** @returns {string} */
    getUrl() {
        return this.#url
    }

    /** @returns {string} */
    getId() {
        const SEPARATOR = '#'
        return this.#method + SEPARATOR + this.#url
    }
}