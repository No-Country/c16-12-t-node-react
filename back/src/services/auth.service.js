import { BcryptAdapter } from '../config/adapters/bcrypt.adapter.js';
import { JwtAdapter } from '../config/adapters/jwt.adapter.js';
import customeError from '../errors/custome.error.js';
import { Validator } from '../helpers/validator.helper.js';

export class AuthService {
  constructor({ repository, jwt_secret }) {
    this.repository = repository;
    this.jwt_secret = jwt_secret;
  }

  async login(data) {
    if (!data.email) throw customeError.badRequest('Email is required');
    if (!Validator.validateEmail(data.email)) throw customeError.badRequest('Invalid email');
    if (!data.password) throw customeError.badRequest('Password is required');
    if (!Validator.validatePassword(data.password))
      throw customeError.badRequest(`Must be at least 6 characters`);

    const userExists = await this.repository.getUserByEmail(data.email);
    if (!userExists) throw customeError.unauthorized('Invalid credentials');

    const { password, ...user } = userExists.dataValues;

    let isMatch, token;
    try {
      isMatch = BcryptAdapter.compare(data.password, password);
      token = await JwtAdapter.generateToken({ id: user.id, email: user.email }, this.jwt_secret);
    } catch (error) {
      throw customeError.serverError(`${error}`);
    }

    if (!isMatch) throw customeError.unauthorized('Invalid credentials');
    if (!token) throw customeError.serverError('Error generating token');

    return { user, token };
  }

  async register(data) {
    this.validateAuthData(data);
    const userExists = await this.repository.getUserByEmail(data.email);

    if (userExists) throw customeError.badRequest('User already exists');

    const passWordHashed = BcryptAdapter.hash(data.password);

    const newUser = await this.repository.create({
      ...data,
      password: passWordHashed,
    });

    const { password, ...user } = newUser.dataValues;

    let token;
    try {
      token = await JwtAdapter.generateToken({ id: user.id, email: user.email }, this.jwt_secret);
    } catch (error) {
      throw customeError.serverError(`${error}`);
    }
    if (!token) throw customeError.serverError('Error generating token');

    return { user, token };
  }

  validateAuthData(data) {
    const fields = {
      email: 'email',
      name: 'name',
      password: 'password',
      phone: 'phone',
      dni: 'dni',
      role: 'role',
      city_id: 'city_id',
    };
    const validRoles = ['admin', 'passenger', 'driver'];

    for (const field in fields) {
      if (!data[field]) throw customeError.badRequest(`Missing property '${fields[field]}'`);
    }

    if (!data.role || !validRoles.includes(data.role))
      throw customeError.badRequest(
        `Invalid role: ${data.role}. Valid roles: '${validRoles.join(', ')}'`,
      );

    if (!Validator.validateEmail(data.email))
      throw customeError.badRequest(`Invalid email: ${data.email}`);

    if (!Validator.validateName(data.name))
      throw customeError.badRequest(`Name must be at least 5 characters: ${data.name}`);

    if (!Validator.validatePassword(data.password))
      throw customeError.badRequest(`Invalid password: ${data.password}`);

    if (isNaN(data.phone)) throw customeError.badRequest(`Phone '${data.phone}' must be a number`);

    if (!Validator.validatePhone(data.phone))
      throw customeError.badRequest(`Phone must be at least 8 digits: ${data.phone}`);

    if (isNaN(data.dni)) throw customeError.badRequest(`Dni '${data.dni}' must be a number`);

    if (!Validator.validateDni(data.dni))
      throw customeError.badRequest(`Dni must be at least 8 digits: ${data.dni}`);
  }
}
