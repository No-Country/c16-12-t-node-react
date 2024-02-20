import express from 'express';

import { CitiesController } from '../controller/cities.controller.js';
import { CitiesService } from '../services/cities.service.js';
import { CitiesRepository } from '../repositories/cities.repository.js';
import { ConnectionError } from 'sequelize';

export class CitiesRoute {
  static routes() {
    const router = express.Router();

    const repository = new CitiesRepository({ model: null });
    const service = new CitiesService({ repository });
    const controller = new CitiesController({ service });

    router.get('/', controller.getAll.bind(controller));
    router.get('/:id', controller.getById.bind(controller));
    router.post('/', controller.createCity.bind(controller));
    router.patch('/:id', controller.updateCity.bind(controller));
    router.delete('/:id', controller.deleteCity.bind(controller));
    return router;
  }
}
