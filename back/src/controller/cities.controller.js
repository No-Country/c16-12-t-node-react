import HandleError from '../errors/handle.error.js';

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
    return this.service
      .create(data)
      .then((data) => res.status(200).json(data))
      .catch((err) => HandleError.handle(err, res));
  };

  updateCityById = (req, res) => {
    const { id } = req.params;
    const data = req.body;
    return this.service
      .update(id, data)
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
