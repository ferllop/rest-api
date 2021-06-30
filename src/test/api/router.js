import { suite, assert } from '../testing.js'
import { Router, Response } from '../../app/api/router.js'
import { HttpMethod } from '../../app/api/httpMethod.js'
import { PreconditionError } from '../../app/utils/precondition.js'
import { EndpointMother } from './EndpointMother.js'
import { Route } from '../../app/api/Route.js'

const router = suite('router')
const code = 200
const endpoint = EndpointMother.default()
const response = new Response({ message: 'works' }, code)

/** @type {Router} */
let routerSUT

router.before.each(() => {
  routerSUT = new Router()
})

router('should throw an error when adding an endpoint that is already added to the router', () => {
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

router.run()
