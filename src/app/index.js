import { Endpoint } from './api/endpoint.js'
import { HttpMethod } from './api/httpMethod.js'
import { Response, Router } from './api/router.js'
import { RestApi } from './api/RestApi.js'
import http from 'http'

const hostname = '127.0.0.1'
const port = Number(process.env.PORT || 3000)

const router = new Router()
router.addRoute(new Endpoint(HttpMethod.GET, '/'), new Response({ message: 'In Endpoint' }, 200))

const api = new RestApi(router)

http.createServer((incomingMessage, serverResponse) => {
  const apiResponse = api.onRequest(incomingMessage.method, incomingMessage.url)
  serverResponse.statusCode = apiResponse.statusCode
  Object.keys(apiResponse.headers).forEach(option => {
    serverResponse.setHeader(option, apiResponse.headers[option])
  })
  serverResponse.end(JSON.stringify(apiResponse.data) + '\n')
}).listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}`)
})

