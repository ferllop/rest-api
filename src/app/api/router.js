import { precondition } from '../utils/precondition.js'
import { Response } from './response.js'
import { Endpoint } from './endpoint.js'
import { Route } from './Route.js'

class Router {
  /**@type {Map<string, Response>} */
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

    this.#routes.set(endpointId, route.response)
  }

  /**
   * @param {Endpoint} endpoint 
   * @returns {Response}
   */
  respond(endpoint) {
    const endpointId = endpoint.getId()
    return this.#routes.get(endpointId) ?? new Response({error: 'Not Found'}, 404)
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
