import RegisterUserController from "./controller/register.controller";


class ApiClient {
  readonly url: string;
  readonly params: any;

  register: RegisterUserController;

  constructor(params = { token: null }) {
    this.url = 'https://stores-tests-api.herokuapp.com';
    this.params = params;
    this.register = new RegisterUserController(this.url, this.params);
  }

  static unauthorized() {
    return new ApiClient();
  }
}

export default ApiClient;