import { Endpoint } from "./endpoint.js";
import { HttpMethod } from "./httpMethod.js";
import { Response } from "./response.js";
import { Route } from "./Route.js";

export const routes = [
    new Route(new Endpoint(HttpMethod.GET, '/caca'), new Response({ message: 'In Endpoint caca' }, 200)),
    new Route(new Endpoint(HttpMethod.GET, '/'), new Response({ message: 'In Endpoint' }, 200)),
]