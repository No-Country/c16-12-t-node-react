// import { compareSync, genSaltSync, hashSync } from 'bcryptjs';
import bcrypt from 'bcryptjs';

export class BcryptAdapter {
  static hash(value) {
    const salt = bcrypt.genSaltSync(10);
    return bcrypt.hashSync(value, salt);
  }

  static compare(value, hash) {
    return bcrypt.compareSync(value, hash);
  }
}
