import {Response} from '../../src/index.js'

export default {
    root: async () => {
        return new Response(await delayedResponse(), 200)
    },
}

async function delayedResponse() {
    return new Promise(resolve => {
        setTimeout(() => resolve({message: 'In Async Endpoint'}), 1000)
    })
}
