import { Response, Router } from '../../app/api/router.js'
import { RestApi } from '../../app/api/RestApi.js'
import { suite, assert } from '../testing.js'
import { EndpointMother } from './EndpointMother.js'

const restApi = suite('RestApi')

/** @type {RestApi} */
let serverSUT
restApi.before.each(() => {
    serverSUT = new RestApi(new Router())
})

restApi('should respond with the response predefined in an endpoint', () => {
    const endpoint = EndpointMother.default()
    const response = new Response({message: 'testing'}, 200)
    serverSUT.addRoute(endpoint, response)
    assert.equal(serverSUT.onRequest(endpoint.getMethod().toString(), endpoint.getUrl()).data, response.getData())
}) 

restApi.run()