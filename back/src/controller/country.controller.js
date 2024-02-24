import { CreateCountryDto } from '../domain/dtos/country/create-country.dto.js';
import { UpdateCountryDto } from '../domain/dtos/country/update-country.dto.js';
import { HandleError } from '../errors/index.js';

export class CountryController {
  constructor({ service }) {
    this.service = service;
  }

  //GET ALL COUNTRIES
  getAllCountries = (req, res) => {
    return this.service
      .getAllCountries()
      .then((countries) => res.status(200).json(countries))
      .catch((err) => HandleError.handle(err, res));
  };

  //GET COUNTRY BY ID
  getCountryById = (req, res) => {
    const { id } = req.params;
    return this.service
      .getCountryById(id)
      .then((country) => res.status(200).json(country))
      .catch((err) => HandleError.handle(err, res));
  };

  //UPDATE COUNTRY
  updateCountry = (req, res) => {
    const { id } = req.params;

    const [error, updateCountryDto] = UpdateCountryDto.create({ id, ...req.body });
    if (error) return HandleError.handle(error, res);

    return this.service
      .updateCountry(updateCountryDto)
      .then((country) => res.status(201).json(country))
      .catch((error) => res.status(500).send({ message: error.message }));
  };

  //CREATE NEW COUNTRY
  createCountry = (req, res) => {
    const countryData = req.body;

    const [error, countryDto] = CreateCountryDto.create(countryData);
    if (error) return HandleError.handle(error, res);

    return this.service
      .createCountry(countryDto)
      .then((newCountry) => res.status(201).json(newCountry))
      .catch((err) => HandleError.handle(err, res));
  };

  //DELTE COUNTRY
  deleteCountryById = (req, res) => {
    const { id } = req.params;

    return this.service
      .deleteCountryById(id)
      .then((country) => res.status(201).json(country))
      .catch((error) => res.status(500).send({ message: error.message }));
  };
}
