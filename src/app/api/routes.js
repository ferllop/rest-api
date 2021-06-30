import { Endpoint } from "./Endpoint.js";
import { HttpMethod } from "./HttpMethod.js";
import { Response } from "./Response.js";
import { Route } from "./Route.js";

export const routes = [
    new Route(new Endpoint(HttpMethod.GET, '/'), new Response({ message: 'In Endpoint' }, 200)),
]