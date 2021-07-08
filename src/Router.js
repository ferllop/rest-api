import { Response } from './Response.js'
import { Endpoint } from './Endpoint.js'
import { Route } from './Route.js'
import { precondition } from './preconditions.js'

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
    precondition(!this.hasRoute(route))
    this.#routes.set(route.endpoint.getId(), route.controller)
  }

  /**
   * @param {Route} route 
   * @returns {boolean}
   */
  hasRoute(route) {
    return this.#routes.has(route.endpoint.getId())
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
