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

  //GET COUNTRY BY ID
  getCountryById = (req, res) => {
    const { id } = req.params;
    return this.service
      .getCountryById(id)
      .then((country) => res.status(200).json(country))
      .catch((err) => handleError.handle(err, res));
  };

  //UPDATE COUNTRY
  updateCountry = (req, res) => {
    const { id } = req.params;
    if (!id) {
      return res.status(400).send({ message: 'Missing country id' });
    }
    return this.service
      .updateCountry(id, req.body)
      .then((country) => res.status(201).json(country))
      .catch((error) => res.status(500).send({ message: error.message }));
  };

  //CREATE NEW COUNTRY
  createCountry = (req, res) => {
    const countryData = req.body;

    return this.service
      .createCountry(countryData)
      .then((newCountry) => res.status(201).json(newCountry))
      .catch((err) => handleError.handle(err, res));
  };

  //DELTE COUNTRY
  deleteCountryById = (req, res) => {
    const { id } = req.params;
    if (!id) {
      return res.status(400).send({ message: 'Missing country id' });
    }
    return this.service
      .deleteCountryById(id)
      .then((country) => res.status(201).json(country))
      .catch((error) => res.status(500).send({ message: error.message }));
  };
}
