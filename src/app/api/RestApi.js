import { Endpoint } from "./endpoint.js"
import { HttpMethod } from "./httpMethod.js"
import { Response } from "./response.js"
import { Router } from "./router.js"

export class RestApi {
    /** @type {Router} */
    #router

    /**
     * @param {Router} router
     */
    constructor(router) {
        this.#router = router
    }

    /**
     * 
     * @param {Endpoint} endpoint
     * @param {Response} response 
     */
    addRoute(endpoint, response) {
        this.#router.addRoute(endpoint, response)
    }

    /**
     * 
     * @param {string} method
     * @param {string} url 
     * @returns {{statusCode: number, headers: object, data: object}} 
     */
    onRequest(method, url) {
        const routerResponse = this.#router.respond(
            new Endpoint(HttpMethod.ofValue(method), url)
        )
        return {
            statusCode: routerResponse.getCode(),
            headers: routerResponse.getHeaders(),
            data: routerResponse.getData()
        }
    }
}

