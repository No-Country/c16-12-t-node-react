import { CustomeError } from '../../../errors/index.js';
import { Validator } from '../../../helpers/validator.helper.js';

export class UpdateCityDto {
  constructor({ id, name, zipCode, latitud, longitud, countryId }) {
    this.id = id;
    this.name = name;
    this.zipCode = zipCode;
    this.latitud = latitud;
    this.longitud = longitud;
    this.countryId = countryId;
  }

  static create(props) {
    const { id, ...data } = props;
    if (!Object.keys(data).length)
      return [CustomeError.badRequest('Missing city properties in request')];
    if (!Validator.validateId(id)) return [CustomeError.badRequest(`id must be a number: ${id}`)];
    if (data.zipCode && !Validator.validateZipCode(data.zipCode))
      return [CustomeError.badRequest(`zipCode must be a number and at least 5: ${data.zipCode}`)];
    if (data.latitud && !Validator.validateLatitud(data.latitud))
      return [CustomeError.badRequest(`latitud must be a number and at least 4: ${data.latitud}`)];
    if (data.longitud && !Validator.validateLongitud(data.longitud))
      return [
        CustomeError.badRequest(`longitud must be a number and at least 4: ${data.longitud}`),
      ];

    return [undefined, new UpdateCityDto({ id, ...data })];
  }
}
