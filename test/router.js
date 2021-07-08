import { suite, assert } from './testing.config.js'
import { Router } from '../src/Router.js'
import { HttpMethod } from '../src/HttpMethod.js'
import { EndpointMother } from './EndpointMother.js'
import { Route } from '../src/Route.js'
import { Response } from '../src/Response.js'
import { PreconditionError } from 'preconditions'

const router = suite('router')
const code = 200
const endpoint = EndpointMother.default()
const response = () => new Response({ message: 'works' }, code)

/** @type {Router} */
let routerSUT

router.before.each(() => {
  routerSUT = new Router()
})

router('should throw a PreconditionError when adding an endpoint that is already added to the router', () => {
  const route = new Route(endpoint, response)
  routerSUT.addRoute(route)
  assert.throws(
    () => routerSUT.addRoute(route),
    PreconditionError
  )
})

router('should add an endpoint that differs from other already present only in http method', () => {
  const route = new Route(endpoint, response)
  routerSUT.addRoute(route)

  const differentMethodRoute = new Route(EndpointMother.withMethod(HttpMethod.POST), response)
  routerSUT.addRoute(differentMethodRoute)
  assert.equal(routerSUT.routesCount(), 2)
})

router('should add an endpoint that differs from other already present only in url', () => {
  const route = new Route(endpoint, response)
  routerSUT.addRoute(route)
  const differentUrlRoute = new Route(EndpointMother.withUrl('/other-url'), response)
  routerSUT.addRoute(differentUrlRoute)
  assert.equal(routerSUT.routesCount(), 2)
})

router('should know when an endpoint is already added in routes list', () => {
  const route = new Route(endpoint, response)
  routerSUT.addRoute(route)
  assert(routerSUT.hasRoute(route))
})

router('should know when an endpoint is not present in routes list', () => {
  const route = new Route(endpoint, response)
  assert(!routerSUT.hasRoute(route))
})

router.run()
