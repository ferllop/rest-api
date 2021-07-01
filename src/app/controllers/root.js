import { Response } from "../../../lib/api/src/Response.js"

export default {
    root: (url) => {
        return new Response({ message: 'In Endpoint' }, 200)
    }
}