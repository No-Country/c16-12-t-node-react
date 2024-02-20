import express from 'express';

import { UploadController } from '../controller/index.js';
import { UploadMiddleware } from '../middleware/upload.middleware.js';
import { UploadService } from '../services/index.js';
import { CloudinaryAdaper } from '../config/adapters/cloudinary.adapter.js';
import { envs } from '../config/index.js';

export class UploadRoute {
  static routes() {
    const router = express.Router();

    const cloudinary = new CloudinaryAdaper({
      cloudinary_cloud_name: envs.CLOUDINARY_CLOUD_NAME,
      cloudinary_api_key: envs.CLOUDINARY_API_KEY,
      cloudinary_api_secret: envs.CLOUDINARY_API_SECRET,
    });
    const service = new UploadService({ uploadAdapter: cloudinary });
    const controller = new UploadController({ service });

    router.use(UploadMiddleware.validateType);

    router.post(
      '/:type',
      [UploadMiddleware.uploadFile],
      controller.uploadFiles.bind(UploadController),
    );
    router.delete('/:type', controller.deleteFiles.bind(UploadController));

    return router;
  }
}
