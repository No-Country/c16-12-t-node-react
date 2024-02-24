import { CustomeError } from '../errors/index.js';
import { Validator } from '../helpers/validator.helper.js';

export class CitiesService {
  constructor({ repository }) {
    this.repository = repository;
  }

  async getAllCities() {
    return await this.repository.getAll();
  }

  async getById(id) {
    this.validateId(id);
    const city = await this.repository.getById(id);
    if (!city) throw CustomeError.notFound(`City with id '${id}' not found`);
    return city;
  }

  async create(data) {
    const cityExists = await this.repository.getCityByName(data.name);
    if (cityExists) throw CustomeError.badRequest(`City with name '${data.name}' already exists`);

    return await this.repository.create({
      ...data,
      zip_code: data.zipCode,
      country_id: data.countryId,
    });
  }

  async update(data) {
    const { id, ...rest } = data;

    return this.repository.update(id, {
      ...rest,
      zip_code: rest.zipCode,
      country_id: rest.countryId,
    });
  }

  async delete(id) {
    this.validateId(id);
    return this.repository.delete(id);
  }

  validateId(id) {
    if (!Validator.validateId(id)) throw CustomeError.badRequest(`Invalid id: '${id}'`);
  }
}
