import HandleError from '../errors/handle.error.js';

let _service = null;

/**
 * AuthController class
 *
 * @param {Object} - { service }
 * @returns {Object} - AuthController class
 *
 */

export class CitiesController {
  constructor({ service }) {
    _service = service;
  }

  getAll = (req, res) => {
    const { page, limit } = req.body;
    return _service
      .getAll(page, limit)
      .then((data) => res.status(200).json(data))
      .catch((err) => HandleError.handle(err, res));
  };
  getById = (req, res) => {
    const { id } = req.body;
    return _service
      .getById(id)
      .then((data) => res.status(200).json(data))
      .catch((err) => HandleError.handle(err, res));
  };

  createCity = (req, res) => {
    const data = req.body;
    return _service
      .create(data)
      .then((data) => res.status(200).json(data))
      .catch((err) => HandleError.handle(err, res));
  };

  updateCity = (req, res) => {
    const { id, data } = req.body;
    return _service
      .update(id, data)
      .then((data) => res.status(200).json(data))
      .catch((err) => HandleError.handle(err, res));
  };

  deleteCity = (req, res) => {
    const { id } = req.body;
    return _service
      .delete(id)
      .then((data) => res.status(200).json(data))
      .catch((err) => HandleError.handle(err, res));
  };
}
