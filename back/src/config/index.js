import 'dotenv/config';
import env from 'env-var';

export const envs = {
  PORT: env.get('PORT').required().asPortNumber(),
  BD_NAME: env.get('BD_NAME').required().asString(),
  DB_USERNAME: env.get('DB_USERNAME').required().asString(),
  DB_PASSWORD: env.get('DB_PASSWORD').required().asString(),
  DB_HOST: env.get('DB_HOST').required().asString(),
  DB_DIALECT_MYSQL: env.get('DB_DIALECT_MYSQL').required().asString(),
};
