import { Endpoint } from "./Endpoint.js";
// eslint-disable-next-line no-unused-vars
import { Response } from "./Response.js";

export class Route {
    /**@type {Endpoint} */
    endpoint

    /** @type {(url) => Response} */
    controller

    /**
     * @param {Endpoint} endpoint 
     * @param {() => Response} controller 
     */
    constructor(endpoint, controller) {
        this.endpoint = endpoint;
        this.controller = controller;
    }
}
