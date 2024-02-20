import fs from 'fs';
import path from 'path';

import customeError from '../errors/custome.error.js';

export class UploadService {
  constructor({ uploadAdapter }) {
    this.uploadAdapter = uploadAdapter;
  }

  async upload(data) {
    try {
      const filePath = path.resolve('./uploads', data.type);
      const files = await this.uploadAdapter.upload(data);

      if (files.length > 0) {
        for (const file of data.files) {
          fs.unlinkSync(`${filePath}/${file.filename}`);
        }
      }

      return files;
    } catch (error) {
      throw customeError.serverError(`${error}`);
    }
  }

  async remove(data) {
    if (!data.files) {
      throw customeError.notFound('File not found');
    }

    const files = JSON.parse(data.files);
    return await this.uploadAdapter.remove({ ...data, files });
  }
}
