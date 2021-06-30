import { precondition } from '../utils/precondition.js'
import { Response } from './response.js'
import { Endpoint } from './endpoint.js'

class Router {
  #routes

  constructor() {
    this.#routes = new Map()
  }

  /**
   * 
   * @param {Endpoint} endpoint 
   * @param {Response} response 
   */
  addRoute(endpoint, response) {
    const endpointId = endpoint.getId() 
    precondition(!this.#routes.has(endpointId))

    this.#routes.set(endpointId, response)
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
