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
        name: error.name,
        message: error.message,
      });
    }

    return res.status(500).json({
      status: 500,
      name: 'Internal Server Error',
      message: 'Something went wrong, please try again later',
    });
  }
}

export default HandleError.getInstance();
