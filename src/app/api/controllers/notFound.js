import { Response } from "../Response.js"

export default {
    notFound: (url) => {
        return new Response({error: 'Not Found'}, 404)
    }
}

