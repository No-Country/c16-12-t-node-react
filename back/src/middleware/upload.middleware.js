import fs from 'fs';
import path from 'path';
import multer from 'multer';

import { UuidAdapter } from '../config/adapters/uuid.adapter.js';

export class UploadMiddleware {
  static uploadFile = (req, res, next) => {
    const type = req.url?.split('/').at(-1);
    const filePath = path.resolve('./uploads', type);

    const isPathExists = fs.existsSync(filePath);
    if (!isPathExists) {
      fs.mkdirSync(filePath, { recursive: true });
    }

    const storage = multer.diskStorage({
      destination: function (req, file, cb) {
        cb(null, filePath);
      },
      filename: function (req, file, cb) {
        const extension = path.extname(file.originalname);
        const filename = `${UuidAdapter.generate()}${extension}`;
        cb(null, filename);
      },
    });

    const upload = multer({
      storage,
      limits: {
        fileSize: 1024 * 1024 * 5,
      },
      fileFilter: (req, file, cb) => {
        const validExtensions = ['.png', '.jpg', '.jpeg'];
        const ext = path.extname(file.originalname);
        if (!validExtensions.includes(path.extname(file.originalname))) {
          return cb(
            new Error(`Invalid file type '${ext}'. Valid types: ${validExtensions.join(', ')}`),
          );
        }
        cb(null, true);
      },
    });

    upload.array('files', 5)(req, res, (err) => {
      if (err) {
        return res.status(400).send({
          status: 400,
          message: err.message,
        });
      }

      if (!req.files) {
        return res.status(400).send({
          statusCode: 400,
          name: 'Bad Request',
          message: 'No files were uploaded',
        });
      }

      req.body.files = req.files;
      req.body.type = type;

      next();
    });
  };

  static validateType = (req, res, next) => {
    const type = req.url.split('/').pop();
    const validTypes = ['car', 'user'];

    if (!validTypes.includes(type)) {
      return res
        .status(400)
        .json({ message: `Invalid type '${type}'. Valid types: ${validTypes.join(', ')}` });
    }
    next();
  };
}
