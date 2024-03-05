import 'dotenv/config';
import env from 'env-var';

export const envs = {
  PORT: env.get('PORT').required().asPortNumber(),
  BASE_API: env.get('BASE_API').required().asString(),
  BD_NAME: env.get('BD_NAME').required().asString(),
  DB_USERNAME: env.get('DB_USERNAME').required().asString(),
  DB_PASSWORD: env.get('DB_PASSWORD').required().asString(),
  DB_HOST: env.get('DB_HOST').required().asString(),
  DB_DIALECT_MYSQL: env.get('DB_DIALECT_MYSQL').required().asString(),
  JWT_SECRET: env.get('JWT_SECRET').required().asString(),
  CLOUDINARY_CLOUD_NAME: env.get('CLOUDINARY_CLOUD_NAME').required().asString(),
  CLOUDINARY_API_KEY: env.get('CLOUDINARY_API_KEY').required().asString(),
  CLOUDINARY_API_SECRET: env.get('CLOUDINARY_API_SECRET').required().asString(),
};
