import { CustomeError } from '../../../errors/index.js';
import { Validator } from '../../../helpers/validator.helper.js';

export class UpdateCountryDto {
  constructor({ id, name, code }) {
    this.id = id;
    this.name = name;
    this.code = code;
  }

  static create(props) {
    const { id, ...data } = props;

    if (!Object.keys(data).length)
      return [CustomeError.badRequest('Missing city properties in request')];
    if (!Validator.validateId(id))
      return [CustomeError.badRequest(`country Id '${id}' must be a number`)];

    const country = data.name.charAt(0).toUpperCase() + data.name.substr(1);
    const countryCode = data.name?.slice(0, 3).toUpperCase();

    return [
      undefined,
      new UpdateCountryDto({
        id,
        name: country,
        code: data.code ?? countryCode,
      }),
    ];
  }
}
