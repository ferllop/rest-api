import { Response } from '../../index.js'

export default {
    root: () => {
        return new Response({ message: 'In Endpoint' }, 200)
    }
}
