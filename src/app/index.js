import http from 'http'
import { HttpMethod } from './utils/httpMethod.js'
import { Response, Router } from './api/router.js'

const hostname = '127.0.0.1'
const port = process.env.PORT || 3000
const router = new Router()

router.add(HttpMethod.GET, '/', new Response({ message: 'In Endpoint'}, 200))

const server = http.createServer((req, res) => {
  const response = router.respond(req.method, req.url)
  res.statusCode = response.code
  Object.keys(response.headers).forEach(option => res.setHeader(option, response.headers[option]))
  res.end(JSON.stringify(response.data) + '\n')
})

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`)
})
