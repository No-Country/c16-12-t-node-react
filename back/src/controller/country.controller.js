import handleError from '../errors/handle.error.js';

export class CountryController {
  constructor({ service }) {
    this.service = service;
  }

  //GET ALL COUNTRIES
  getAllCountries = (req, res) => {
    return this.service
      .getAllCountries()
      .then((countries) => res.status(200).json(countries))
      .catch((err) => handleError.handle(err, res));
  };

  //CREATE NEW COUNTRY
  createCountry = (req, res) => {
    const countryData = req.body;

    return this.country
      .createCountry(countryData)
      .then((newCountry) => res.status(201).json(newCountry))
      .catch((err) => handleError.handle(err, res));
  };
}
