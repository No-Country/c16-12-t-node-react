import { CustomeError } from '../../../errors/index.js';
import { Validator } from '../../../helpers/validator.helper.js';

export class CreateTripDto {
  constructor(props) {
    this.distance = props.distance;
    this.timeEstimated = props.timeEstimated;
    this.seats = props.seats;
    this.seatsReserved = props.seatsReserved;
    this.seatPrice = props.seatPrice;
    this.totalPrice = props.totalPrice;
    this.origin = props.origin;
    this.destiny = props.destiny;
    this.passenger = props.passenger;
    this.driver = props.driver;
  }
  static create(props) {
    const { user } = props;
    const tripFields = {
      seats: 'seats',
      seatPrice: 'seatPrice',
      totalPrice: 'totalPrice',
      origin: 'origin',
      destiny: 'destiny',
    };

    const driver = user.role === 'driver' ? user.id : null;

    for (const field in tripFields) {
      if (!props[field]) {
        return [CustomeError.badRequest(`'${field}' is required`)];
      }
    }

    if (!Validator.validateSeats(props.seats))
      return [CustomeError.badRequest(`'${tripFields.seats}' must be a number`)];

    if (!Validator.validatePrice(props.seatPrice))
      return [CustomeError.badRequest(`'${tripFields.seatPrice}' must be a number`)];

    if (!Validator.validatePrice(props.totalPrice))
      return [CustomeError.badRequest(`'${tripFields.totalPrice}' must be a number`)];

    if (!Validator.validateId(props.origin))
      return [CustomeError.badRequest(`'${tripFields.origin}' must be a number`)];

    if (!Validator.validateId(props.destiny))
      return [CustomeError.badRequest(`'${tripFields.destiny}' must be a number`)];

    if (!Validator.validateId(driver))
      return [CustomeError.badRequest(`'${driver}' must be a number`)];

    return [undefined, new CreateTripDto({ ...props, driver })];
  }
}
