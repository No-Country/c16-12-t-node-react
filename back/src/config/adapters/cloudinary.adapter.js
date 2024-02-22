import { v2 as cloudinary } from 'cloudinary';

import { CustomeError } from '../../errors/index.js';

export class CloudinaryAdaper {
  constructor({ cloudinary_cloud_name, cloudinary_api_key, cloudinary_api_secret }) {
    cloudinary.config({
      cloud_name: cloudinary_cloud_name,
      api_key: cloudinary_api_key,
      api_secret: cloudinary_api_secret,
    });
  }

  async upload(filesData) {
    const options = {
      unique_filename: true,
      overwrite: true,
      folder: `noCountry/${filesData?.type}`,
    };

    try {
      const files = [];
      for (const file of filesData?.files) {
        const response = await cloudinary.uploader.upload(file.path, options);
        files.push(response);
      }
      return files;
    } catch (error) {
      throw CustomeError.serverError(`${error}`);
    }
  }

  async remove(filesData) {
    const { files, type } = filesData;

    try {
      const filesWithFolder = files?.map((files) => {
        const fileName = files.split('/').pop()?.split('.').at(0);
        return `noCountry/${type}/${fileName}`;
      });
      const { length } = filesWithFolder;
      const filesDeleted =
        length > 0
          ? await cloudinary.api.delete_resources(filesWithFolder, {
              type: 'upload',
              resource_type: 'image',
            })
          : [];

      const resultDeleted = Object.values(filesDeleted?.deleted);

      if (resultDeleted.includes('not_found')) {
        throw CustomeError.notFound('File not found');
      }

      return resultDeleted.includes('deleted');
    } catch (error) {
      throw CustomeError.serverError(`${error}`);
    }
  }
}
