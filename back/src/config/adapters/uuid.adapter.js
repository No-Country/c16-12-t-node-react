import { v4 } from 'uuid';

export class UuidAdapter {
  static generate() {
    return v4();
  }
}
