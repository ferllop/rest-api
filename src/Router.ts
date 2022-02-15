import { Response } from './Response.js'
import { Endpoint } from './Endpoint.js'
import { Route } from './Route.js'
import { precondition } from './preconditions.js'

export class Router {
  private routes: Map<string, (url: any) => Response>

  constructor() {
    this.routes = new Map()
  }

  addRoute(route: Route) {
    precondition(!this.hasRoute(route))
    this.routes.set(route.endpoint.getId(), route.controller)
  }

  hasRoute(route: Route): boolean {
    return this.routes.has(route.endpoint.getId())
  }

  respond(endpoint: Endpoint): (req: any) => Response {
    const endpointId = endpoint.getId()
    return this.routes.get(endpointId) ?? (() => new Response({error: 'Not Found'}, 404))
  }

  routesCount(): number {
    return this.routes.size
  }

}
