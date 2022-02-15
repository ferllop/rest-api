import { HttpMethod } from '../src/HttpMethod.js'
import { Endpoint } from '../src/Endpoint.js'

export class EndpointBuilder {
  private method: HttpMethod
  private url

  constructor() {
    this.method = HttpMethod.GET
    this.url = '/'
  }

  setMethod(method: HttpMethod): EndpointBuilder {
    this.method = method
    return this
  }

  setUrl(url: string): EndpointBuilder {
    this.url = url
    return this
  }

  build(): Endpoint {
    return new Endpoint(this.method, this.url)
  }
}
