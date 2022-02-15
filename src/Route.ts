import { Endpoint } from "./Endpoint.js"
import { Response } from "./Response.js"

export class Route {
    constructor(public endpoint: Endpoint, public controller: () => Promise<Response>) {
        this.endpoint = endpoint
        this.controller = controller
    }
}
