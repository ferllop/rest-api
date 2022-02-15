import { Endpoint } from "./Endpoint.js"
import { HttpMethod } from "./HttpMethod.js"
import { Route } from "./Route.js"
import { Router } from "./Router.js"

export class RestApi {
    private router: Router

    constructor(routes: Route[]) {
        this.router = new Router()
        routes.forEach(route => this.addRoute(route))
    }

    addRoute(route: Route) {
        this.router.addRoute(route)
    }

    onRequest(method: string, url: string): {statusCode: number, headers: object, data: object} {
        const controller = this.router.respond(
            new Endpoint(HttpMethod.ofValue(method), url)
        )
        
        const response = controller(url)
        return {
            statusCode: response.getCode(),
            headers: response.getHeaders(),
            data: response.getData()
        }
    }
}

