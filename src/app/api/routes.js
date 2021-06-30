import { Endpoint } from "./Endpoint.js";
import { HttpMethod } from "./HttpMethod.js";
import { Route } from "./Route.js";
import root from './controllers/root.js'

export const routes = [
    new Route(new Endpoint(HttpMethod.GET, '/'), root.root),
]