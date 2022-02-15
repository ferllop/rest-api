import { Endpoint } from "./Endpoint.js"
import { Response } from "./Response.js"

export class Route {
    constructor(public endpoint: Endpoint, public controller: (url: any) => Response) {
        this.endpoint = endpoint;
        this.controller = controller;
    }
}
