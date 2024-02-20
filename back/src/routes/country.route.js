import express from 'express';
import { CountryController } from '../controller/country.controller.js';
import { CountryRepository } from '../repositories/country.respository.js';
import { CountryService } from '../services/country.service.js';
import { Country } from '../db/mysql/models/country.model.js';

export class CountryRoute {
  static routes() {
    const router = express.Router();

    const repository = new CountryRepository({ model: Country });
    const service = new CountryService({ repository });
    const controller = new CountryController({ service });

    router.get('/', controller.getAllCountries.bind(controller));
    router.post('/:id', controller.createCountry.bind(controller));

    return router;
  }
}
