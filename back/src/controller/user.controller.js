import handleError from '../errors/handle.error.js';

export class UserController {
  constructor({ service }) {
    this.service = service;
  }

  getAllUsers = (req, res) => {
    return this.service
      .getAllUsers()
      .then((users) => res.status(200).json(users))
      .catch((err) => handleError.handle(err, res));
  };

  getUserById = (req, res) => {
    const { id } = req.params;
    return this.service
      .getUserById(id)
      .then((user) => res.status(200).json(user))
      .catch((err) => handleError.handle(err, res));
  };

  updateUserById = (req, res) => {
    const { id } = req.params;
    const dataUserUpdate = req.body;
    return this.service
      .updateUserById(id, dataUserUpdate)
      .then((user) => res.status(200).json(user))
      .catch((err) => handleError.handle(err, res));
  };

  deleteUserById = (req, res) => {
    const { id } = req.params;
    return this.service
      .deleteUserById(id)
      .then((user) => res.status(200).json(user))
      .catch((err) => handleError.handle(err, res));
  };
}
