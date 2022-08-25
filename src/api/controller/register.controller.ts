import validate from '../validator';
import Requests from '../requests';
import BaseController from './base.controller';
import { LoginModel } from '../../models/login';

const client = new Requests();
class RegisterUserController extends BaseController {
  async register(data: LoginModel, schema: any) {
    const response = await client.url(`${(this.url)}/register`).headers(this.params.token).method('POST').body(data)
      .send();
    validate(schema, response.data);
    return response;
  }
}

export default RegisterUserController;