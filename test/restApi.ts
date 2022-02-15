import { Response } from '../src/Response.js'
import { RestApi } from '../src/RestApi.js'
import { suite, assert } from './testing.config.js'
import { EndpointMother } from './EndpointMother.js'
import { Route } from '../src/Route.js'

const restApi = suite('RestApi')

let serverSUT: RestApi
restApi.before.each(() => {
    serverSUT = new RestApi([])
})

restApi('should respond with the response predefined in an endpoint', () => {
    const endpoint = EndpointMother.default()
    const response = () => new Response({ message: 'testing' }, 200)
    serverSUT.addRoute(new Route(endpoint, response))
    const result = serverSUT.onRequest(endpoint.getMethod().toString(), endpoint.getUrl())
    assert.equal(result.data.message, response().getData().message)
})

restApi.run()
