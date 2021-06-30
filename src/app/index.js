import http from 'http'
import { RestApi } from './api/RestApi.js'
import { routes } from './api/routes.js'
import { Router } from './api/router.js'

const hostname = '127.0.0.1'
const port = Number(process.env.PORT || 3000)

const router = new Router()
const api = new RestApi(router, routes)

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

