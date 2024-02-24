import { CustomeError } from '../../../errors/index.js';
import { Validator } from '../../../helpers/validator.helper.js';

export class UpdateUserDto {
  constructor(props) {
    this.id = props.id;
    this.name = props.name;
    this.lastNane = props.lastNane;
    this.email = props.email;
    this.password = props.password;
    this.phone = props.phone;
    this.dni = props.dni;
    this.address = props.address;
    this.role = props.role;
    this.avatar = props.avatar;
    this.rating = props.rating;
  }

  static create(props) {
    const { user, id, ...data } = props;

    const roles = ['admin', 'passenger', 'driver'];

    if (!Object.values(data).length)
      return [CustomeError.badRequest('Missing user properties in request')];
    if (!id) return [CustomeError.badRequest('Missing user Id property in request')];
    if (!Validator.validateId(id))
      return [CustomeError.badRequest(`Invalid user Id '${id}'  property in request`)];
    if (data.role && !roles.includes(data.role))
      return [
        CustomeError.badRequest(
          `Invalid role '${data.role}' property in request. Allowed roles: ${data.roles.join(', ')}`,
        ),
      ];
    if (data.email && !Validator.validateEmail(data.email))
      return [CustomeError.badRequest(`Invalid email '${data.email}' property in request`)];
    if (data.dni && !Validator.validateDni(data.dni))
      return [CustomeError.badRequest(`Invalid dni '${data.dni}' property in request`)];
    if (data.phone && !Validator.validatePhone(data.phone))
      return [CustomeError.badRequest(`Invalid phone '${data.phone}' property in request`)];
    if (data.rating && !Validator.validateRating(data.rating))
      return [CustomeError.badRequest(`Ranking value '${data.rating}' must be between 0 and 5`)];

    return [
      undefined,
      new UpdateUserDto({
        id: +data.id,
        ...props,
      }),
    ];
  }
}
