import { CustomeError } from '../../../errors/index.js';

export class CreateRoleDto {
  constructor({ name }) {
    this.name = name;
  }

  static create(props) {
    const { name } = props;

    const roles = ['admin', 'passenger', 'driver'];

    if (!roles.includes(name))
      return [
        CustomeError.badRequest(
          `Invalid role '${name}' property in request. Allowed roles: ${roles.join(', ')}`,
        ),
      ];

    return [undefined, new CreateRoleDto({ name })];
  }
}
