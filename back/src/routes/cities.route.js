import express from 'express';

import { CitiesController } from '../controller/cities.controller.js';
import { CitiesService } from '../services/cities.service.js';
import { CitiesRepository } from '../repositories/cities.repository.js';
import { City } from '../db/mysql/models/city.model.js';

export class CitiesRoute {
  static routes() {
    const router = express.Router();

    const repository = new CitiesRepository({ model: City });
    const service = new CitiesService({ repository });
    const controller = new CitiesController({ service });

    router.get('/', controller.getAllCities.bind(controller));
    router.get('/:id', controller.getById.bind(controller));
    router.post('/', controller.createCity.bind(controller));
    router.patch('/:id', controller.updateCityById.bind(controller));
    router.delete('/:id', controller.deleteCityById.bind(controller));
    return router;
  }
}
