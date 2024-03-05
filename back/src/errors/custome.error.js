export class CustomeError extends Error {
  constructor({ status, name, message }) {
    super(message);
    this.status = status;
    this.name = name;
    this.message = message;
  }

  static badRequest(message) {
    return new CustomeError({ name: 'Bad Request', status: 400, message });
  }

  static unauthorized(message) {
    return new CustomeError({ name: 'Unauthorized', status: 401, message });
  }

  static forbidden(message) {
    return new CustomeError({ name: 'Forbidden', status: 403, message });
  }

  static notFound(message) {
    return new CustomeError({ name: 'Not Found', status: 404, message });
  }

  static notAcceptable(message) {
    return new CustomeError({ name: 'Not Acceptable', status: 406, message });
  }

  static conflict(message) {
    return new CustomeError({ name: 'Conflict', status: 409, message });
  }

  static serverError(message) {
    return new CustomeError({ name: 'Internal Server Error', status: 500, message });
  }
}
