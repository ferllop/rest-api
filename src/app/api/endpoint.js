export class Endpoint {
    /**type {HttpMethod} */
    #method

    /**type {string} */
    #url

    constructor(method, url) {
        this.#method = method
        this.#url = url
    }

    getMethod() {
        return this.#method
    }

    getUrl() {
        return this.#url
    }

    /**
   * @returns {string}
   */
    getId() {
        const SEPARATOR = '#'
        return this.#method + SEPARATOR + this.#url
    }
}