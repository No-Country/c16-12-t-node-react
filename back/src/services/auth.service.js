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
    const userExists = await this.repository.getUserByEmail(email);
    if (!userExists) throw CustomeError.unauthorized('Invalid credentials');

    const userFound = await this.repository.getUserById(userExists.id);
    const { password, ...user } = userFound;

    let isMatch, token;
    try {
      isMatch = BcryptAdapter.compare(data.password, password);
      token = await JwtAdapter.generateToken(
        {
          id: user.id,
          name: user.name,
          last_name: user.last_name,
          email: user.email,
          role: user.role,
          city_id: user.city_id,
          rating: user.rating,
          avatar: user.avatar,
        },
        this.jwt_secret,
      );
    } catch (error) {
      throw CustomeError.serverError(`${error}`);
    }

    if (!isMatch) throw CustomeError.unauthorized('Invalid credentials');
    if (!token) throw CustomeError.serverError('Error generating token');

    return { user, token };
  }

  async register(data) {
    const { email } = data;

    const userExists = await this.repository.getUserByEmail(email);
    if (userExists) throw CustomeError.conflict(`User with email '${email}' already exists`);

    const passWordHashed = BcryptAdapter.hash(data.password);

    const userData = {
      ...data,
      password: passWordHashed,
      role: +data.role,
    };

    const newUser = await this.repository.createUser(userData);
    if (!newUser) throw CustomeError.serverError('Error creating user');

    const getNewUser = await this.repository.getUserById(newUser.id);
    const { password, ...user } = getNewUser;

    let token;
    try {
      token = await JwtAdapter.generateToken(
        {
          id: user.id,
          name: user.name,
          last_name: user.last_name,
          email: user.email,
          role: user.role,
          city_id: user.city_id,
          rating: user.rating,
          avatar: user.avatar,
        },
        this.jwt_secret,
      );
    } catch (error) {
      throw CustomeError.serverError(`${error}`);
    }
    if (!token) throw CustomeError.serverError('Error generating token');

    return { user, token };
  }
}
