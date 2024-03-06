import { CustomeError } from '../../../errors/index.js';
import { Validator } from '../../../helpers/validator.helper.js';

export class RegisterUserDto {
  constructor({
    name,
    last_name,
    email,
    password,
    phone,
    dni,
    address,
    role,
    avatar,
    rating,
    city_id,
  }) {
    this.name = name;
    this.last_name = last_name;
    this.email = email;
    this.password = password;
    this.phone = phone;
    this.dni = dni;
    this.address = address;
    this.role = role;
    this.avatar = avatar;
    this.rating = rating;
    this.city_id = city_id;
  }

  static create(props) {
    const { name, last_name, email, password, phone, dni, role, city_id } = props;
    const fields = {
      name: 'name',
      last_name: 'last_name',
      email: 'email',
      password: 'password',
      phone: 'phone',
      dni: 'dni',
      role: 'role',
      city_id: 'city_id',
    };

    for (const field in fields) {
      if (!props[field])
        return [CustomeError.badRequest(`Missing property '${fields[field]}' in request`)];
    }

    if (!Validator.validateName(name))
      return [CustomeError.badRequest(`Name must be at least 3 characters: ${name}`)];

    if (!Validator.validateName(last_name))
      return [CustomeError.badRequest(`Last_name must be at least 5 characters: ${last_name}`)];

    if (!Validator.validateEmail(email))
      return [CustomeError.badRequest(`Invalid email: ${email}`)];

    if (!Validator.validatePassword(password))
      return [CustomeError.badRequest(`Password '${password}' must be at least 6 characters`)];

    if (isNaN(phone)) return [CustomeError.badRequest(`Phone '${phone}' must be a number`)];

    if (Validator.validatePhone(phone))
      return [CustomeError.badRequest(`Phone must be at least 8 digits: ${phone}`)];

    if (isNaN(dni)) return [CustomeError.badRequest(`Dni '${dni}' must be a number`)];

    if (Validator.validateDni(dni))
      return [CustomeError.badRequest(`Dni must be at least 8 digits: ${dni}`)];

    if (!Validator.validateId(role))
      return [CustomeError.badRequest(`Invalid role '${role}' must be a number: ${role}`)];

    if (isNaN(city_id)) return [CustomeError.badRequest(`City id '${city_id}' must be a number`)];

    return [undefined, new RegisterUserDto(props)];
  }
}
