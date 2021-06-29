import { suite, assert } from '../testing.js'
import { Router, Response } from '../../app/api/router.js'
import { HttpMethod } from '../../app/api/httpMethod.js'
import { PreconditionError } from '../../app/utils/precondition.js'

const router = suite('router')
const url = '/'
const method = HttpMethod.GET
const code = 200
const endpoint = [method, url,  new Response({message: 'works'}, code)]
let routerSUT

router.before.each(() => {
  routerSUT = new Router()
})

router('should throw an error when adding an endpoint that is already added to the router', () => {
  routerSUT.add(...endpoint) 
  assert.throws(() => routerSUT.add(...endpoint), PreconditionError) 
})

router('should add an endpoint that differs from other already present only in http method', () => {
  routerSUT.add(...endpoint) 
  const endpointB = Array.from(endpoint)
  endpointB[0] = HttpMethod.POST
  routerSUT.add(...endpointB)
  assert.strictEqual(routerSUT.endpoints.size, 2) 
})

router('should add an endpoint that differs from other already present only in url', () => {
  routerSUT.add(...endpoint) 
  const endpointB = Array.from(endpoint)
  endpointB[1] = '/other-url'
  routerSUT.add(...endpointB)
  assert.strictEqual(routerSUT.endpoints.size, 2) 
})

router.run()
