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

    async onRequest(method: string, url: string): Promise<{statusCode: number, headers: Record<string, string>, data: object}> {
        const controller = this.router.respond(
            new Endpoint(HttpMethod.ofValue(method), url)
        )
        
        const response = await controller(url)
        return {
            statusCode: response.getCode(),
            headers: response.getHeaders(),
            data: response.getData()
        }
    }
}

