import axios from "axios";

interface Options {
    readonly url?: string,
    readonly method?: string,
    readonly data?: any,
    headers?: any,
    params?: any,
}

class Requests {
  options: Options = {};

  constructor() {
    this.options = {};
  }

  url(url: string) {
    this.options = { ...this.options, url };
    return this;
  }

  method(method: string) {
    this.options = { ...this.options, method };
    return this;
  }

  body(data: any) {
    const { ...object } = data;
    this.options = { ...this.options, data: object };
    return this;
  }

  params(params) {
    this.options = { ...this.options, params };
    return this;
  }

  headers(token: string) {
    const headers = (token === null) ? null : { Authorization: `JWT ${token}` };
    this.options = { ...this.options, headers };
    return this;
  }

  async send() {
    try {
      const response = await axios({
        ...this.options,
      });
      return response;
    } catch (e) {
      return e.response;
    }
  }
}

export default Requests;