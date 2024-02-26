import { CustomeError } from './custome.error.js';

class HandleError {
  static getInstance() {
    if (!HandleError.instance) {
      HandleError.instance = new HandleError();
    }
    return HandleError.instance;
  }

  handle(error, res) {
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

export default HandleError.getInstance();
