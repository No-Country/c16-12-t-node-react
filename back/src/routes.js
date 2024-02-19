import express from 'express';
import cors from 'cors';
import helmet from 'helmet';
import compression from 'compression';

import { notFoundMiddleware } from './middleware/index.js';
import { AuthRoute, UserRoute, UploadRoute } from './routes/index.js';

/**
 * Funtion to create express router
 *
 * @returns {express.Router} Configured express router
 */

export const routes = () => {
  const router = express.Router();
  const apiRoutes = express.Router();

  router
    .use(express.json())
    .use(express.urlencoded({ extended: true }))
    .use(cors())
    .use(compression())
    .use(helmet());

  apiRoutes.use('/auth', AuthRoute.routes());
  apiRoutes.use('/users', UserRoute.routes());
  apiRoutes.use('/upload', UploadRoute.routes());

  router.use('/api', apiRoutes);
  router.use(notFoundMiddleware);

  return router;
};
