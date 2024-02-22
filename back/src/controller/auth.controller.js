import { LoginDto, RegisterUserDto } from '../domain/dtos/index.js';
import { HandleError } from '../errors/index.js';

/**
 * AuthController class
 *
 * @param {Object} - { service }
 * @returns {Object} - AuthController class
 *
 */
export class AuthController {
  constructor({ service }) {
    this.service = service;
  }

  login = (req, res) => {
    const { email, password } = req.body;

    const [error, loginDto] = LoginDto.create({ email, password });
    if (error) throw HandleError.handle(error, res);

    return this.service
      .login(loginDto)
      .then((data) => res.status(200).json(data))
      .catch((err) => HandleError.handle(err, res));
  };

  register = (req, res) => {
    const data = req.body;
    const [error, registerDto] = RegisterUserDto.create(data);
    if (error) throw HandleError.handle(error, res);

    return this.service
      .register(registerDto)
      .then((data) => res.status(200).json(data))
      .catch((err) => HandleError.handle(err, res));
  };
}
