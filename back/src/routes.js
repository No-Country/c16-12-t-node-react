import express from 'express';
import cors from 'cors';
import helmet from 'helmet';
import compression from 'compression';

import { envs } from './config/index.js';
import { notFoundMiddleware } from './middleware/index.js';
import {
  AuthRoute,
  TripRoute,
  UserRoute,
  UploadRoute,
  CitiesRoute,
  CountryRoute,
  RoleRoute,
  RatingRoute,
  ChatRoute,
} from './routes/index.js';

/**
 * Funtion to create express router
 *
 * @returns {express.Router} Configured express router
 */

export const routes = (baseUriApi) => {
  const router = express.Router();
  const apiRoutes = express.Router();

  router
    .use(express.json())
    .use(express.urlencoded({ extended: true }))
    .use(cors())
    .use(compression())
    .use(helmet());

  apiRoutes.use('/cities', CitiesRoute.routes());
  apiRoutes.use('/auth', AuthRoute.routes());
  apiRoutes.use('/users', UserRoute.routes());
  apiRoutes.use('/trips', TripRoute.routes());
  apiRoutes.use('/upload', UploadRoute.routes());
  apiRoutes.use('/countries', CountryRoute.routes());
  apiRoutes.use('/roles', RoleRoute.routes());
  apiRoutes.use('/ratings', RatingRoute.routes());
  apiRoutes.use('/chats', ChatRoute.routes());

  router.use(baseUriApi, apiRoutes);

  router.use(notFoundMiddleware);

  return router;
};
