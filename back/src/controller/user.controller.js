import { UpdateUserDto } from '../domain/dtos/index.js';
import { HandleError } from '../errors/index.js';

export class UserController {
  constructor({ service }) {
    this.service = service;
  }

  getAllUsers = (req, res) => {
    return this.service
      .getAllUsers()
      .then((users) => res.status(200).json(users))
      .catch((err) => HandleError.handle(err, res));
  };

  getUserById = (req, res) => {
    const { id } = req.params;
    return this.service
      .getUserById(id)
      .then((user) => res.status(200).json(user))
      .catch((err) => HandleError.handle(err, res));
  };

  updateUserById = (req, res) => {
    const { id } = req.params;
    const dataUserUpdate = req.body;

    const [error, updateDto] = UpdateUserDto.create({ id, ...dataUserUpdate });
    if (error) return HandleError.handle(error, res);

    return this.service
      .updateUserById(updateDto)
      .then((user) => res.status(200).json(user))
      .catch((err) => HandleError.handle(err, res));
  };

  deleteUserById = (req, res) => {
    const { id } = req.params;
    return this.service
      .deleteUserById(id)
      .then((user) => res.status(200).json(user))
      .catch((err) => HandleError.handle(err, res));
  };

  updateUserRating = (req, res) => {
    const { userId } = req.params;
    const { rating } = req.body;

    return this.service
      .updateUserRating(userId, rating)
      .then((user) => res.status(200).json(user))
      .catch((err) => HandleError.handle(err, res));
  };
}
