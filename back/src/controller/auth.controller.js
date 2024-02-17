import HandleError from '../errors/handle.error.js';

let _service = null;

/**
 * AuthController class
 *
 * @param {Object} - { service }
 * @returns {Object} - AuthController class
 *
 */
export class AuthController {
  constructor({ service }) {
    _service = service;
  }

  login = (req, res) => {
    const { email, password } = req.body;
    return _service
      .login({ email, password })
      .then((data) => res.status(200).json(data))
      .catch((err) => HandleError.handle(err, res));
  };

  register = (req, res) => {
    const data = req.body;
    return _service
      .register(data)
      .then((data) => res.status(200).json(data))
      .catch((err) => HandleError.handle(err, res));
  };
}
