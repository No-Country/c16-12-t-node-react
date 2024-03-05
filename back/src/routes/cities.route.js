import express from 'express';

import { CitiesController } from '../controller/index.js';
import { CitiesService } from '../services/index.js';
import { CitiesRepository } from '../repositories/index.js';
import { City, Country } from '../db/mysql/models/index.js';

export class CitiesRoute {
  static routes() {
    const router = express.Router();

    const repository = new CitiesRepository({ cityModel: City, countryModel: Country });
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
