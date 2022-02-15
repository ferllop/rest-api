import { suite } from 'uvu'
import { strict as assert } from 'assert'

const testingConfig = suite('Testing config')

testingConfig('Preconditions should be enabled when testing', () => {
    assert(process.env.ENABLE_PRECONDITIONS === "true")
})

testingConfig.run()

export { test } from 'uvu'
export { suite, assert }
