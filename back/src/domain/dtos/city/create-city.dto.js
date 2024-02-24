import { CustomeError } from '../../../errors/index.js';
import { Validator } from '../../../helpers/validator.helper.js';

export class CreateCityDto {
  constructor({ name, zipCode, latitud, longitud, countryId }) {
    this.name = name;
    this.zipCode = zipCode;
    this.latitud = latitud;
    this.longitud = longitud;
    this.countryId = countryId;
  }

  static create(props) {
    const cityFields = {
      name: 'name',
      zipCode: 'zipCode',
      latitud: 'latitud',
      longitud: 'longitud',
      countryId: 'countryId',
    };

    for (const field in cityFields) {
      if (!props[field])
        return [CustomeError.badRequest(`Missing property '${cityFields[field]}' in request`)];
    }
    if (!Validator.validateName(props.name)) return [CustomeError.badRequest('name is required')];
    if (!Validator.validateZipCode(props.zipCode))
      return [CustomeError.badRequest(`zipCode must be a number and at least 5: ${props.zipCode}`)];
    if (!Validator.validateLatitud(props.latitud))
      return [CustomeError.badRequest(`latitud must be a number and at least 4: ${props.latitud}`)];
    if (!Validator.validateLongitud(props.longitud))
      return [
        CustomeError.badRequest(`longitud must be a number and at least 4: ${props.longitud}`),
      ];
    if (!Validator.validateId(props.countryId))
      return [CustomeError.badRequest(`countryId must be a number: ${props.countryId}`)];

    return [undefined, new CreateCityDto(props)];
  }
}
