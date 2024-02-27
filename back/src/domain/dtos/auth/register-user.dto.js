import { CustomeError } from '../../../errors/index.js';
import { Validator } from '../../../helpers/validator.helper.js';

export class RegisterUserDto {
  constructor({
    name,
    lastName,
    email,
    password,
    phone,
    dni,
    address,
    role,
    avatar,
    rating,
    cityId,
  }) {
    this.name = name;
    this.lastName = lastName;
    this.email = email;
    this.password = password;
    this.phone = phone;
    this.dni = dni;
    this.address = address;
    this.role = role;
    this.avatar = avatar;
    this.rating = rating;
    this.cityId = cityId;
  }

  static create(props) {
    const { name, lastName, email, password, phone, dni, role, cityId } = props;
    const fields = {
      name: 'name',
      lastName: 'lastName',
      email: 'email',
      password: 'password',
      phone: 'phone',
      dni: 'dni',
      role: 'role',
      cityId: 'cityId',
    };

    for (const field in fields) {
      if (!props[field])
        return [CustomeError.badRequest(`Missing property '${fields[field]}' in request`)];
    }

    if (!Validator.validateName(name))
      return [CustomeError.badRequest(`Name must be at least 3 characters: ${name}`)];

    if (!Validator.validateName(lastName))
      return [CustomeError.badRequest(`LastName must be at least 5 characters: ${lastName}`)];

    if (!Validator.validateEmail(email))
      return [CustomeError.badRequest(`Invalid email: ${email}`)];

    if (!Validator.validatePassword(password))
      return [CustomeError.badRequest(`Password '${password}' must be at least 6 characters`)];

    if (isNaN(phone)) return [CustomeError.badRequest(`Phone '${phone}' must be a number`)];

    if (!Validator.validatePhone(phone))
      return [CustomeError.badRequest(`Phone must be at least 8 digits: ${phone}`)];

    if (isNaN(dni)) return [CustomeError.badRequest(`Dni '${dni}' must be a number`)];

    if (!Validator.validateDni(dni))
      return [CustomeError.badRequest(`Dni must be at least 8 digits: ${dni}`)];

    if (!Validator.validateId(role))
      return [CustomeError.badRequest(`Invalid role '${role}' must be a number: ${role}`)];

    if (isNaN(cityId)) return [CustomeError.badRequest(`City id '${cityId}' must be a number`)];

    return [undefined, new RegisterUserDto(props)];
  }
}
