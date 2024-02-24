import { CreateCityDto, UpdateCityDto } from '../domain/dtos/index.js';
import { HandleError } from '../errors/index.js';

export class CitiesController {
  constructor({ service }) {
    this.service = service;
  }

  getAllCities = (req, res) => {
    return this.service
      .getAllCities()
      .then((data) => res.status(200).json(data))
      .catch((err) => HandleError.handle(err, res));
  };

  getById = (req, res) => {
    const { id } = req.params;
    return this.service
      .getById(id)
      .then((data) => res.status(200).json(data))
      .catch((err) => HandleError.handle(err, res));
  };

  createCity = (req, res) => {
    const data = req.body;

    const [error, cityDto] = CreateCityDto.create(data);
    if (error) return HandleError.handle(error, res);

    return this.service
      .create(cityDto)
      .then((data) => res.status(200).json(data))
      .catch((err) => HandleError.handle(err, res));
  };

  updateCityById = (req, res) => {
    const { id } = req.params;

    const [error, updateDto] = UpdateCityDto.create({ id, ...req.body });
    if (error) return HandleError.handle(error, res);

    return this.service
      .update(updateDto)
      .then((data) => res.status(200).json(data))
      .catch((err) => HandleError.handle(err, res));
  };

  deleteCityById = (req, res) => {
    const { id } = req.params;
    return this.service
      .delete(id)
      .then((data) => res.status(200).json(data))
      .catch((err) => HandleError.handle(err, res));
  };
}
