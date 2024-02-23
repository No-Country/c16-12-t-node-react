export class CountryService {
  constructor({ repository }) {
    this._repository = repository;
  }

  async getAllCountries() {
    return await this._repository.getAllCountries();
  }

  async getCountryById(id) {
    return await this._repository.getCountryById(id);
  }

  async createCountry(data) {
    return await this._repository.create(data);
  }

  async updateCountry(id, data) {
    return await this._repository.update(id, data);
  }

  async deleteCountryById(id) {
    return await this._repository.delete(id);
  }
}
