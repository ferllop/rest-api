import { precondition } from "../lib/precondition.js"

export class HttpMethod {

  static #values = new Map()
  static DELETE = new HttpMethod('DELETE')
  static GET = new HttpMethod('GET')
  static PATCH = new HttpMethod('PATCH')
  static POST = new HttpMethod('POST')
  static PUT = new HttpMethod('PUT')
  static UPDATE = new HttpMethod('UPDATE')

  constructor(method) {
    this.method = method
    HttpMethod.#values.set(method, this)
  }

  toString() {
    return this.method
  }

  /**
   * @param {string} value 
   */
  static ofValue(value) {
    precondition(this.#values.has(value))
    return HttpMethod.#values.get(value)
  }
  
}
