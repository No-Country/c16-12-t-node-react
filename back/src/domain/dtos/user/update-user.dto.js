import { CustomeError } from '../../../errors/index.js';
import { Validator } from '../../../helpers/validator.helper.js';

export class UpdateUserDto {
  constructor(props) {
    this.id = props.id;
    this.name = props.name;
    this.last_nane = props.last_nane;
    this.email = props.email;
    this.password = props.password;
    this.phone = props.phone;
    this.dni = props.dni;
    this.address = props.address;
    this.role = props.role;
    this.avatar = props.avatar;
    this.rating = props.rating;
    this.city_id = props.city_id;
    this.information = props.information;
  }

  static create(props) {
    const { user, id, ...data } = props;

    if (!Object.keys(data).length)
      return [CustomeError.badRequest('Missing user properties in request')];
    if (!id) return [CustomeError.badRequest('Missing user Id property in request')];
    if (!Validator.validateId(id))
      return [CustomeError.badRequest(`Invalid user Id '${id}'  property in request`)];
    if (data.email && !Validator.validateEmail(data.email))
      return [CustomeError.badRequest(`Invalid email '${data.email}' property in request`)];
    if (data.dni && !Validator.validateDni(data.dni))
      return [CustomeError.badRequest(`Invalid dni '${data.dni}' property in request`)];
    if (data.phone && !Validator.validatePhone(data.phone))
      return [CustomeError.badRequest(`Invalid phone '${data.phone}' property in request`)];
    if (data.rating && !Validator.validateRating(data.rating))
      return [CustomeError.badRequest(`Ranking value '${data.rating}' must be between 0 and 5`)];
    if (data.city_id && !Validator.validateId(data.city_id))
      return [CustomeError.badRequest(`Invalid city id '${data.city_id}' property in request`)];

    return [
      undefined,
      new UpdateUserDto({
        id: +data.id,
        city_id: data.city_id,
        ...props,
      }),
    ];
  }
}
