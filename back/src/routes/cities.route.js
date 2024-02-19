import express from 'express';

import { CitiesController } from '../controller/cities.controller.js';
import { CitiesService } from '../services/cities.service.js';
import { CitiesRepository } from '../repositories/cities.repository.js';

export class CitiesRoute {
  routes() {
    const router = express.Router();

    const repository = new CitiesRepository({ model: null });
    const service = new CitiesService({ repository });
    const controller = new CitiesController({ service });

    router.get('/', controller.getAll);
    router.get('/:id', controller.getById);
    router.post('/', controller.createCity);
    router.patch('/:id', controller.updateCity);
    router.delete('/:id', controller.deleteCity);
    return router;
  }
}
