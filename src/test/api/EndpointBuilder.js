import { HttpMethod } from '../../app/api/httpMethod.js';
import { Endpoint } from '../../app/api/endpoint.js';

export class EndpointBuilder {
  /**@type {HttpMethod}*/
  #method;
  #url;

  constructor() {
    this.#method = HttpMethod.GET;
    this.#url = '/';
  }

  /**
   * @param {HttpMethod} method
   * @returns {EndpointBuilder}
   */
  setMethod(method) {
    this.#method = method;
    return this;
  }

  /**
   * @param {string} url
   * @returns {EndpointBuilder}
   */
  setUrl(url) {
    this.#url = url;
    return this;
  }

  /**@returns {Endpoint} */
  build() {
    return new Endpoint(this.#method, this.#url);
  }
}
