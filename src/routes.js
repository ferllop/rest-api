import { Endpoint, HttpMethod, Route } from '../lib/api/index.js'
import root from './controllers/root.js'

export const routes = [
    new Route(new Endpoint(HttpMethod.GET, '/'), root.root),
]