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
    return await this._repository.createCountry(data);
  }

  async updateCountry(id, data) {
    return await this._repository.updateCountry(id, data);
  }

  async deleteCountryById(id) {
    return await this._repository.deleteCountryById(id);
  }
}
