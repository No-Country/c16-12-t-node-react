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
    const { id, name, lastNane, email, password, phone, dni, address, role, avatar, rating } =
      props;

    const roles = ['admin', 'passenger', 'driver'];

    if (!id) return [CustomeError.badRequest('Missing user Id property in request')];
    if (!Validator.validateId(id))
      return [CustomeError.badRequest(`Invalid user Id '${id}'  property in request`)];
    if (!roles.includes(role))
      return [
        CustomeError.badRequest(
          `Invalid role '${role}' property in request. Allowed roles: ${roles.join(', ')}`,
        ),
      ];

    return [
      undefined,
      new UpdateUserDto({
        id,
        name,
        lastNane,
        email,
        password,
        phone,
        dni,
        address,
        role,
        avatar,
        rating,
      }),
    ];
  }
}
