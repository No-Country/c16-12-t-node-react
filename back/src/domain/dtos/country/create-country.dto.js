import { CustomeError } from '../../../errors/index.js';
import { Validator } from '../../../helpers/validator.helper.js';

export class CreateCountryDto {
  constructor({ name, code }) {
    this.name = name;
    this.code = code;
  }

  static create(props) {
    const { name } = props;
    const countryFields = {
      name: 'name',
    };

    for (const field in countryFields) {
      if (!props[countryFields[field]])
        return [CustomeError.badRequest(`${countryFields[field]} is required`)];
    }
    if (!Validator.validateCountry(name)) return [CustomeError.badRequest('name is required')];

    const country = name.charAt(0).toUpperCase() + name.substr(1);
    const countryCode = name.slice(0, 3).toUpperCase();

    return [undefined, new CreateCountryDto({ name: country, code: countryCode })];
  }
}
