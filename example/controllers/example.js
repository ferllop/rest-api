import { Response } from '../../index.js'

export default {
    root: (url) => {
        return new Response({ message: 'In Endpoint' }, 200)
    }
}