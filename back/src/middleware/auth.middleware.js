import { envs } from '../config/index.js';
import { JwtAdapter } from '../config/adapters/jwt.adapter.js';
import { User } from '../db/mysql/models/index.js';

export class AuthMiddleware {
  static authentication = async (req, res, next) => {
    const { authorization } = req.headers;
    if (!authorization) return this.unAuthorized('Token not found', res);
    if (!authorization.startsWith('Bearer ')) return this.unAuthorized('Invalid Bearer token', res);
    const token = authorization.split(' ').at(1);

    try {
      const payload = await JwtAdapter.verifytoken(token, envs.JWT_SECRET);
      if (!payload) return this.unAuthorized('Invalid token', res);

      const user = await User.findOne({ where: { id: payload?.id } });
      if (!user) return this.unAuthorized('User not found', res);

      req.body.user = user?.dataValues;

      next();
    } catch (error) {
      return this.serveError(error.message, res);
    }
  };

  static unAuthorized(message, res) {
    return res.status(401).json({ name: 'Unauthorized', statusCode: 401, message });
  }

  static serveError(message, res) {
    return res.status(500).json({ name: 'Server Error', statusCode: 500, message });
  }
}
