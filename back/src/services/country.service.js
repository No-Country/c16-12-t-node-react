export class CountryService {
  constructor({ repository }) {
    this.repository = repository;
  }

  async getAllCountries() {
    return await this.repository.getAllCountries();
  }

  async getCountryById(id) {
    return await this.repository.getCountryById(id);
  }

  async createCountry(data) {
    return await this.repository.create(data);
  }

  async updateCountry(id, data) {
    return await this.repository.update(id, data);
  }

  async deleteCountryById(id) {
    return await this.repository.delete(id);
  }
}
