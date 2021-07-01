import { suite, assert } from './testing.config.js'
import { Response } from '../src/Response.js'

const response = suite('Response')

let responseSUT
response.before.each(() => {
    responseSUT = new Response({}, 200)
})

response('should have default Content-Type header', () => {
    assert(responseSUT.getHeaderOption('Content-Type'))    
})

response('should be able to replace the default Content-Type header', () => {
    const otherResponse = new Response({}, 200, {'Content-Type': 'test/content'})
    assert(otherResponse.getHeaderOption('Content-Type') !== responseSUT.getHeaderOption('Content-Type'))    
})


response.run()

