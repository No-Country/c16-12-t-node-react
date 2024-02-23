import { CustomeError } from '../errors/index.js';
import { BaseRepository } from './base.repository.js';

export class CountryRepository extends BaseRepository {
  constructor({ model }) {
    super({ model });
    this.model = model;
  }

  // GET ALL COUNTRIES
  async getAllCountries() {
    try {
      const allCountries = await this.model.findAll();
      if (!allCountries) return { message: 'No country was found' };

      return allCountries;
    } catch (error) {
      throw customeError.notFound(`${error}`);
    }
  }

  //GET COUNTRY BY ID
  async getCountryById(id) {
    try {
      const countryId = await this.model.findOne({ where: { id } });
      if (!countryId) return { message: 'Country not found' };

      return countryId;
    } catch (error) {
      throw CustomeError.serverError(`${error}`);
    }
  }

  //CREATE NEW COUNTRY
  async createCountry(countryData) {
    try {
      const new_country = await this.model.create(countryData);
      if (!new_country) return { message: 'Failed to create a new country' };

      return {
        message: 'Country created successfully',
        country: new_country,
      };
    } catch (error) {
      throw new Error(error);
    }
  }

  //UPDATE COUNTRY
  async updateCountry(id, countryData) {
    try {
      await this.model.update(countryData, {
        where: { id: id },
      });
      return {
        message: 'Country updated successfully',
        country: countryData,
      };
    } catch (error) {
      throw new Error(error);
    }
  }

  //DELETE COUNTRY
  async deleteCountryById(id) {
    try {
      const deleteCountry = await this.model.delete({
        where: { id: id },
      });

      const deletedRows = await this.model.destroy({
        where: { id: id },
      });
      return {
        message: 'Country deleted successfully',
        row: deletedRows,
        country_deleted: deleteCountry,
      };
    } catch (error) {
      throw new Error(error);
    }
  }
}
