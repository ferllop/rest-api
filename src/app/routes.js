import { Endpoint } from "./api/src/Endpoint.js";
import { HttpMethod } from "./api/src/HttpMethod.js";
import { Route } from "./api/src/Route.js";
import root from './controllers/root.js'

export const routes = [
    new Route(new Endpoint(HttpMethod.GET, '/'), root.root),
]