import { BcryptAdapter } from '../config/adapters/bcrypt.adapter.js';
import { JwtAdapter } from '../config/adapters/jwt.adapter.js';
import { CustomeError } from '../errors/index.js';

export class AuthService {
  constructor({ repository, jwt_secret }) {
    this.repository = repository;
    this.jwt_secret = jwt_secret;
  }

  async login(data) {
    const { email } = data;
    const userExists = await this.repository.findUserByEmail(email);
    if (!userExists) throw CustomeError.unauthorized('user not found');

    const { password, ...user } = userExists.at(0);

    let isMatch, token;
    try {
      isMatch = BcryptAdapter.compare(data.password, password);
      token = await JwtAdapter.generateToken({ id: user.id, email: user.email }, this.jwt_secret);
    } catch (error) {
      throw CustomeError.serverError(`${error}`);
    }

    if (!isMatch) throw CustomeError.unauthorized('Invalid credentials');
    if (!token) throw CustomeError.serverError('Error generating token');

    return { user, token };
  }

  async register(data) {
    const { email } = data;
    const userExists = await this.repository.findUserByEmail(email);
    if (userExists.length > 0) throw CustomeError.conflict('User already exists');

    const passWordHashed = BcryptAdapter.hash(data.password);
    const newUser = await this.repository.create({
      ...data,
      last_name: data.lastName,
      password: passWordHashed,
      city_id: data.cityId,
    });

    const { password, ...user } = newUser.dataValues;

    let token;
    try {
      token = await JwtAdapter.generateToken({ id: user.id, email: user.email }, this.jwt_secret);
    } catch (error) {
      throw CustomeError.serverError(`${error}`);
    }
    if (!token) throw CustomeError.serverError('Error generating token');

    return { user, token };
  }
}
