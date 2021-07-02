import { HttpMethod } from '../src/HttpMethod.js'
import { PreconditionError } from '../lib/preconditions/precondition.js'
import { suite, assert } from './testing.config.js'

const httpMethod = suite('HttpMethod')

httpMethod(
    'should return a httpMethod whe providing a string representing a valid method', () => {
        assert(HttpMethod.ofValue('GET') === HttpMethod.GET)
    })

    httpMethod('should throw a PreconditionError', () => {
        assert.throws(() => HttpMethod.ofValue('NONEXISTENT'), PreconditionError )
    })

httpMethod.run()
