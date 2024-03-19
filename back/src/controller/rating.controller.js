import { CreateRatingDto } from '../domain/dtos/index.js';
import { HandleError } from '../errors/index.js';

export class RatingController {
  constructor({ service }) {
    this.service = service;
  }

  getAllUserRating = (req, res) => {
    return this.service
      .getAllUserRating()
      .then((data) => res.status(200).json(data))
      .catch((err) => HandleError.handle(err, res));
  };

  createUserRating = (req, res) => {
    const data = req.body;

    const [error, createRatingDto] = CreateRatingDto.create(data);
    if (error) return HandleError.handle(error, res);

    return this.service
      .createUserRating(createRatingDto)
      .then((data) => res.status(200).json(data))
      .catch((err) => HandleError.handle(err, res));
  };

  updateUserRating = (req, res) => {
    const { id } = req.params;
    const data = req.body;

    return this.service
      .updateUserRating(id, data)
      .then((data) => res.status(200).json(data))
      .catch((err) => HandleError.handle(err, res));
  };
}
