import http from 'http'
import { HttpMethod } from './utils/httpMethod.js'
import { Response, Router } from './api/router.js'

const hostname = '127.0.0.1'
const port = Number(process.env.PORT || 3000)
const router = new Router()

router.add(HttpMethod.GET, '/', new Response({ message: 'In Endpoint'}, 200))

const server = http.createServer((req, res) => {
  const response = router.respond(HttpMethod.ofValue(req.method), req.url)
  res.statusCode = response.getCode()
  Object.keys(response.getHeaders()).forEach(option => res.setHeader(option, response.getHeaderOption(option)))
  res.end(JSON.stringify(response.getData()) + '\n')
})

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`)
})
