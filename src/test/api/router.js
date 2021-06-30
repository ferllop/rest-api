import { suite, assert } from '../testing.js'
import { Router, Response } from '../../app/api/router.js'
import { HttpMethod } from '../../app/api/httpMethod.js'
import { PreconditionError } from '../../app/utils/precondition.js'
import { Endpoint } from '../../app/api/endpoint.js'

class EndpointBuilder {
  /**@type {HttpMethod}*/
  #method
  #url

  constructor() {
    this.#method = HttpMethod.GET
    this.#url = '/'
  }

  /**
   * @param {HttpMethod} method
   * @returns {EndpointBuilder}
   */
  setMethod(method) {
    this.#method = method
    return this
  }

  /**
   * @param {string} url 
   * @returns {EndpointBuilder}
   */
  setUrl(url) {
    this.#url = url
    return this
  }

  /**@returns {Endpoint} */
  build() {
    return new Endpoint(this.#method, this.#url)
  }
}

class EndpointMother {
  static standard() {
    return new EndpointBuilder().build()
  }

  static withMethod(method) {
    return new EndpointBuilder().setMethod(method).build()
  }

  static withUrl(url) {
    return new EndpointBuilder().setUrl(url).build()
  }
}

const router = suite('router')
const code = 200
const endpoint = EndpointMother.standard()
const response = new Response({ message: 'works' }, code)
/** @type {Router} */
let routerSUT

router.before.each(() => {
  routerSUT = new Router()
})

router('should throw an error when adding an endpoint that is already added to the router', () => {
  routerSUT.addRoute(endpoint, response)
  assert.throws(
    () => routerSUT.addRoute(endpoint, response),
    PreconditionError
  )
})

router('should add an endpoint that differs from other already present only in http method', () => {
  routerSUT.addRoute(endpoint, response)
  routerSUT.addRoute(EndpointMother.withMethod(HttpMethod.POST), response)
  assert.equal(routerSUT.routesCount(), 2)
})

router('should add an endpoint that differs from other already present only in url', () => {
  routerSUT.addRoute(endpoint, response)
  routerSUT.addRoute(EndpointMother.withUrl('/other-url'), response)
  assert.equal(routerSUT.routesCount(), 2)
})

router.run()
