import { CustomeError } from './custome.error.js';

export class HandleError {
  static handle(error, res) {
    if (error instanceof CustomeError) {
      return res.status(error.status).json({
        statusCode: error.status,
        name: error.name,
        message: error.message,
      });
    }

    return res.status(500).json({
      statusCode: 500,
      name: 'Internal Server Error',
      message: `Internal Server Error: ${error.message}`,
    });
  }
}
