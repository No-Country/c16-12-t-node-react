import jwt from 'jsonwebtoken';

export class JwtAdapter {
  static async generateToken(payload, jwt_secret, duration = '1h') {
    return new Promise((resolve) => {
      jwt.sign(payload, jwt_secret, { expiresIn: duration }, (err, token) => {
        if (err) return resolve(null);
        resolve(token);
      });
    });
  }

  static async verifytoken(token, jwt_secret) {
    return new Promise((resolve) => {
      jwt.verify(token, jwt_secret, (err, decored) => {
        if (err) return resolve(null);
        resolve(decored);
      });
    });
  }
}
