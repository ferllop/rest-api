import { EndpointBuilder } from './EndpointBuilder.js'

export class EndpointMother {
  
  static default() {
    return new EndpointBuilder().build()
  }

  static withMethod(method) {
    return new EndpointBuilder().setMethod(method).build()
  }

  static withUrl(url) {
    return new EndpointBuilder().setUrl(url).build()
  }
}
