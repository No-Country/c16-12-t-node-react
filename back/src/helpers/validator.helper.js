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
    };
  }

  static validateEmail(email) {
    return this.getValidator().isEmail(email);
  }

  static validatePassword(password) {
    return this.getValidator().isLength(password, { min: 6 });
  }

  static validateName(name) {
    return this.getValidator().isLength(name, { min: 5 });
  }

  static validatePhone(phone) {
    return this.getValidator().isLength(phone, { min: 8 });
  }

  static validateDni(dni) {
    return this.getValidator().isLength(dni, { min: 8 });
  }

  static validateZipCode(zipCode) {
    return this.getValidator().isLength(zipCode, { min: 5 });
  }

  static validateCity(city) {
    return this.getValidator().isLength(city, { min: 3 });
  }

  static validateCountry(country) {
    return this.getValidator().isLength(country, { min: 3 });
  }

  static validateSeats(seats) {
    return this.getValidator().isLength(seats, { min: 1 });
  }

  static validateDistance(distance) {
    return this.getValidator().isLength(distance, { min: 1 });
  }
}
