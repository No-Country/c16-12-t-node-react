export class Validator {
  static getValidator() {
    return {
      isEmail: (email) => {
        const re = /\S+@\S+\.\S+/;
        return re.test(email);
      },
      isLength: (value, { min }) => {
        return value.length >= min;
      },
      isNumber: (value) => {
        return !isNaN(value);
      },
      isBetween: (value, { min, max }) => {
        return value >= min && value <= max;
      },
    };
  }

  static validateId(id) {
    return this.getValidator().isNumber(id);
  }

  static validateRating(rating) {
    return this.getValidator().isBetween(rating, { min: 0, max: 5 });
  }

  static validateEmail(email) {
    return this.getValidator().isEmail(email);
  }

  static validatePassword(password) {
    return this.getValidator().isLength(password, { min: 6 });
  }

  static validateName(name) {
    return this.getValidator().isLength(name, { min: 3 });
  }

  static validatePhone(phone) {
    return this.getValidator().isLength(phone, { min: 8 }) && this.getValidator().isNumber(phone);
  }

  static validateDni(dni) {
    return this.getValidator().isLength(dni, { min: 8 }) && this.getValidator().isNumber(dni);
  }

  static validateZipCode(zipCode) {
    return (
      this.getValidator().isLength(zipCode, { min: 5 }) && this.getValidator().isNumber(zipCode)
    );
  }

  static validateCity(city) {
    return this.getValidator().isLength(city, { min: 3 });
  }

  static validateCountry(country) {
    return this.getValidator().isLength(country, { min: 3 });
  }

  static validateSeats(seats) {
    return this.getValidator().isLength(seats, { min: 1 }) && this.getValidator().isNumber(seats);
  }

  static validateDistance(distance) {
    return (
      this.getValidator().isLength(distance, { min: 1 }) && this.getValidator().isNumber(distance)
    );
  }

  static validateLatitud(latitud) {
    return (
      this.getValidator().isLength(latitud, { min: 4 }) && this.getValidator().isNumber(latitud)
    );
  }

  static validateLongitud(latitud) {
    return (
      this.getValidator().isLength(latitud, { min: 4 }) && this.getValidator().isNumber(latitud)
    );
  }
}
