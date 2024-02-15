class CustomeError extends Error {
  constructor({ status, name, message }) {
    super(message);
    this.status = status;
    this.name = name;
    this.message = message;
  }

  static getInstance() {
    if (!CustomeError.instance) {
      CustomeError.instance = new CustomeError({});
    }
    return CustomeError.instance;
  }

  badRequest(message) {
    return new CustomeError({ name: 'Bad Request', status: 400, message });
  }
  unauthorized(message) {
    return new CustomeError({ name: 'Unauthorized', status: 401, message });
  }

  forbidden(message) {
    return new CustomeError({ name: 'Forbidden', status: 403, message });
  }

  notFound(message) {
    return new CustomeError({ name: 'Not Found', status: 404, message });
  }

  notAcceptable(message) {
    return new CustomeError({ name: 'Not Acceptable', status: 406, message });
  }

  conflict(message) {
    return new CustomeError({ name: 'Conflict', status: 409, message });
  }

  serverError(message) {
    return new CustomeError({ name: 'Internal Server Error', status: 500, message });
  }
}

export default CustomeError.getInstance();

export { CustomeError };
