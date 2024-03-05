import { HandleError } from '../errors/index.js';

export class UploadController {
  constructor({ service }) {
    this.service = service;
  }

  uploadFiles = (req, res) => {
    const data = req.body;

    return this.service
      .upload(data)
      .then((files) => res.status(200).json(files))
      .catch((err) => HandleError.handle(err, res));
  };

  deleteFiles = (req, res) => {
    const { type } = req.params;
    const data = req.body;

    return this.service
      .remove({ type, ...data })
      .then((data) => res.status(200).json(data))
      .catch((err) => HandleError.handle(err, res));
  };
}
