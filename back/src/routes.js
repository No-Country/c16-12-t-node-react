import express from 'express';
import cors from 'cors';
import helmet from 'helmet';
import compression from 'compression';

import { notFoundMiddleware } from './middleware/index.js';
import { AuthRoute } from './routes/index.js';
import { CitiesRoute } from './routes/cities.route.js';

/**
 * Funtion to create express router
 *
 * @returns {express.Router} Configured express router
 */

export const routes = () => {
  const router = express.Router();
  const apiRoutes = express.Router();

  const helleRoute = new AuthRoute();
  const citiesRoute = new CitiesRoute();

  router
    .use(express.json())
    .use(express.urlencoded({ extended: true }))
    .use(cors())
    .use(compression())
    .use(helmet());

  apiRoutes.use('/auth', helleRoute.routes());
  apiRoutes.use('/cities', citiesRoute.routes());
  router.use('/api', apiRoutes);

  router.use(notFoundMiddleware);

  return router;
};
