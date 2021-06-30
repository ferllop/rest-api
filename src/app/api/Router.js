import { precondition } from '../utils/precondition.js'
import { Response } from './Response.js'
import { Endpoint } from './Endpoint.js'
import { Route } from './Route.js'
import notFound from './controllers/notFound.js'

class Router {
  /** @type {Map<string, (url) => Response>} */
  #routes

  constructor() {
    this.#routes = new Map()
  }

  /**
   * 
   * @param {Route} route 
   */
  addRoute(route) {
    const endpointId = route.endpoint.getId() 
    precondition(!this.#routes.has(endpointId))

    this.#routes.set(endpointId, route.controller)
  }

  /**
   * @param {Endpoint} endpoint 
   * @returns {(req, res) => Response}
   */
  respond(endpoint) {
    const endpointId = endpoint.getId()
    return this.#routes.get(endpointId) ?? notFound.notFound
  }

  /**@returns {number} */
  routesCount() {
    return this.#routes.size
  }

}

export {
  Response,
  Router
}
