import { Endpoint } from "./Endpoint.js"
import { HttpMethod } from "./HttpMethod.js"
import { Route } from "./Route.js"
import { Router } from "./Router.js"

export class RestApi {
    /** @type {Router} */
    #router

    /**
     * @param {Router} router
     * @param {Route[]} routes
     */
    constructor(router, routes) {
        this.#router = router
        routes.forEach(route => this.addRoute(route))
    }

    /**
     * 
     * @param {Route} route
     */
    addRoute(route) {
        this.#router.addRoute(route)
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

