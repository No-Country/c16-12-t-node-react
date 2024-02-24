import { CustomeError } from '../errors/index.js';
import { BaseRepository } from './base.repository.js';

export class CountryRepository extends BaseRepository {
  constructor({ model }) {
    super({ model });
    this.model = model;
  }
}
