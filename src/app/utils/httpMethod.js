export class HttpMethod {
  static DELETE = new HttpMethod('DELETE')
  static GET = new HttpMethod('GET')
  static PATCH = new HttpMethod('PATCH')
  static POST = new HttpMethod('POST')
  static PUT = new HttpMethod('PUT')
  static UPDATE = new HttpMethod('UPDATE')

  constructor(method) {
    this.method = method
  }

  toString() {
    return this.method
  }
  
}
