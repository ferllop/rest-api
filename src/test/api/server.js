import { Endpoint } from '../../app/api/endpoint.js'
import { HttpMethod } from '../../app/api/httpMethod.js'
import { Response, Router } from '../../app/api/router.js'
import { Server } from '../../app/api/server.js'
import { suite, assert } from '../testing.js'

const server = suite('Server')

/** @type {Server} */
let serverSUT
server.before.each(() => {
    serverSUT = new Server(new Router())
})

server('should respond to a request', () => {
    const request = {}
    assert(serverSUT.respond(request))
})

server('should respond with the response predefined in an endpoint', () => {
    const url = '/'
    const method = HttpMethod.GET
    const response = new Response({message: 'testing'}, 200)
    serverSUT.addRoute(new Endpoint(method, url), response)
    assert.equal(serverSUT.respond({method, url}).getData(), response.getData())
}) 

server('should be capable of create an http server', () => {
    
})

server.run()