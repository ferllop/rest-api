import { Response, Router } from '../../app/api/Router.js'
import { RestApi } from '../../app/api/RestApi.js'
import { suite, assert } from '../testing.js'
import { EndpointMother } from './EndpointMother.js'
import { Route } from '../../app/api/Route.js'

const restApi = suite('RestApi')

/** @type {RestApi} */
let serverSUT
restApi.before.each(() => {
    serverSUT = new RestApi([])
})

restApi('should respond with the response predefined in an endpoint', () => {
    const endpoint = EndpointMother.default()
    const response = (url) => new Response({ message: 'testing' }, 200)
    serverSUT.addRoute(new Route(endpoint, response))
    const result = serverSUT.onRequest(endpoint.getMethod().toString(), endpoint.getUrl())
    assert.equal(result.data.message, response().getData().message)
})

restApi.run()