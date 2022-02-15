import { Endpoint, HttpMethod, Route } from '../src/index.js'
import exampleController from './controllers/example.js'

export const routes = [
    new Route(new Endpoint(HttpMethod.GET, '/'), exampleController.root),
]