import { HttpMethod } from '../../app/api/HttpMethod.js'
import { PreconditionError } from '../../app/utils/precondition.js'
import { suite, assert } from '../testing.js'

const httpMethod = suite('HttpMethod')

httpMethod(
    'should return a httpMethod whe providing a string representing a valid method', () => {
        assert(HttpMethod.ofValue('GET') === HttpMethod.GET)
    })

    httpMethod('should throw a PreconditionError', () => {
        assert.throws(() => HttpMethod.ofValue('NONEXISTENT'), PreconditionError )
    })

httpMethod.run()