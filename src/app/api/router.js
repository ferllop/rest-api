import { precondition } from '../utils/precondition.js'
import { Response } from './response.js'
import { HttpMethod } from './httpMethod.js'

class Router {
  endpoints

  constructor() {
    this.endpoints = new Map()
  }

  add(method, url, response) {
    const endpointId = Router.renderId(method, url) 
    precondition(!this.endpoints.has(endpointId))

    this.endpoints.set(endpointId, response)
  }

  /**
   * @param {HttpMethod} method 
   * @param {string} url 
   * @returns {Response}
   */
  respond(method, url) {
    const endpointId = Router.renderId(method, url)
    return this.endpoints.get(endpointId) ?? new Response({error: 'Not Found'}, 404)
  }

  /**
   * @param {HttpMethod} method 
   * @param {string} url 
   * @returns {string}
   */
  static renderId(method, url) {
    const SEPARATOR = '#'
    return method + SEPARATOR + url
  }
}

export {
  Response,
  Router
}
