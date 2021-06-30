import { Endpoint } from "./endpoint.js"
import { Response } from "./response.js"
import { Router } from "./router.js"
export class Server {

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
     * @param {*} request 
     * @returns {Response}
     */
    respond(request) {
        return this.#router.respond(new Endpoint(request.method, request.url))
    }


    /**
     * 
     * @param {Endpoint} endpoint
     * @param {Response} response 
     */
    addRoute(endpoint, response) {
        this.#router.addRoute(endpoint, response)
    }
}