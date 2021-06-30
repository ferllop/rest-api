import { Endpoint } from "./Endpoint.js";
import { Response } from "./Response.js";

export class Route {
    /**@type {Endpoint} */
    endpoint

    /** @type {Response} */
    response

    /**
     * @param {Endpoint} endpoint 
     * @param {Response} response 
     */
    constructor(endpoint, response) {
        this.endpoint = endpoint;
        this.response = response;
    }
}
