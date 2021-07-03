import { Response } from './Response.js'
import { Endpoint } from './Endpoint.js'
import { Route } from './Route.js'

export class Router {
  /** @type {Map<string, (url) => Response>} */
  #routes

  constructor() {
    this.#routes = new Map()
  }

  /**
   * @param {Route} route 
   */
  addRoute(route) {
    const endpointId = route.endpoint.getId() 
    
    if (this.#routes.has(endpointId)) {
      throw new Error('Route already exists')
    }

    this.#routes.set(endpointId, route.controller)
  }

  /**
   * @param {Endpoint} endpoint 
   * @returns {(req, res) => Response}
   */
  respond(endpoint) {
    const endpointId = endpoint.getId()
    return this.#routes.get(endpointId) ?? (() => new Response({error: 'Not Found'}, 404))
  }

  /**@returns {number} */
  routesCount() {
    return this.#routes.size
  }

}
