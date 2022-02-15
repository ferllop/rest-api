import http from 'http'
import { RestApi } from '../src/index.js'
import { routes } from './routes.js'

const hostname = '127.0.0.1'
const port = Number(process.env.PORT || 3000)

const api = new RestApi(routes)

http.createServer((incomingMessage, serverResponse) => {
  api.onRequest(
      incomingMessage.method ?? 'GET',
      incomingMessage.url ?? '/404'
  ).then(apiResponse => {
    serverResponse.statusCode = apiResponse.statusCode
    Object.keys(apiResponse.headers).forEach(option => {
      serverResponse.setHeader(option, apiResponse.headers[option])
    })
    serverResponse.end(JSON.stringify(apiResponse.data) + '\n')
  })
  })
  .listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}`)
})
