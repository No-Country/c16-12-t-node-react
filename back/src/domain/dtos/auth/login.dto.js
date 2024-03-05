import { CustomeError } from '../../../errors/index.js';
import { Validator } from '../../../helpers/validator.helper.js';

export class LoginDto {
  constructor({ email, password }) {
    this.email = email;
    this.password = password;
  }

  static create(props) {
    const { email, password } = props;

    const fields = {
      email: 'email',
      password: 'password',
    };

    for (const field in fields) {
      if (!props[field])
        return [CustomeError.badRequest(`Missing property '${fields[field]}' in request`)];
    }

    if (!Validator.validateEmail(email))
      return [CustomeError.badRequest(`Invalid email: ${email}`)];

    if (!Validator.validatePassword(password))
      return [CustomeError.badRequest(`Invalid password: ${password}`)];

    return [undefined, new LoginDto({ email, password })];
  }
}
