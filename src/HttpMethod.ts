import { precondition } from "./preconditions.js"


export class HttpMethod {

  private static values = new Map()
  static DELETE = new HttpMethod('DELETE')
  static GET = new HttpMethod('GET')
  static PATCH = new HttpMethod('PATCH')
  static POST = new HttpMethod('POST')
  static PUT = new HttpMethod('PUT')
  static UPDATE = new HttpMethod('UPDATE')

  private constructor(private readonly method: string) {
    HttpMethod.values.set(method, this)
  }

  toString() {
    return this.method
  }

  static ofValue(value: string) {
    precondition(this.values.has(value))
    return HttpMethod.values.get(value)
  }
  
}
