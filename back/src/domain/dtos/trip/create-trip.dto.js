import { CustomeError } from '../../../errors/index.js';
import { Validator } from '../../../helpers/validator.helper.js';

export class CreateTripDto {
  constructor(props) {
    this.seats = props.seats;
    this.seat_price = props.seat_price;
    this.total_price = props.total_price;
    this.origin = props.origin;
    this.destiny = props.destiny;
    this.driver = props.driver;
    this.trip_date = props.trip_date;
    this.departure_time = props.departure_time;
    this.pets_allowed = props.pets_allowed;
    this.smoking_allowed = props.smoking_allowed;
    this.child_seat_available = props.child_seat_available;
  }
  static create(props) {
    const { user } = props;
    const tripFields = {
      seats: 'seats',
      seat_price: 'seat_price',
      origin: 'origin',
      destiny: 'destiny',
      trip_date: 'trip_date',
      departure_time: 'departure_time',
    };

    let petAllowed = props.pets_allowed;
    let smokingAllowed = props.smoking_allowed;
    let childSeatAvailable = props.child_seat_available;

    for (const field in tripFields) {
      if (!props[field]) {
        return [CustomeError.badRequest(`'${field}' is required`)];
      }
    }

    if (!Validator.validateSeats(props.seats))
      return [CustomeError.badRequest(`'${tripFields.seats}' must be a number`)];

    if (!Validator.validatePrice(props.seat_price))
      return [CustomeError.badRequest(`'${tripFields.seat_price}' must be a number`)];

    if (!Validator.validateId(props.origin))
      return [CustomeError.badRequest(`'${tripFields.origin}' must be a number`)];

    if (!Validator.validateId(props.destiny))
      return [CustomeError.badRequest(`'${tripFields.destiny}' must be a number`)];

    if (typeof props.pets_allowed !== 'boolean') petAllowed = props.pets_allowed === 'true';
    if (typeof props.smoking_allowed !== 'boolean') smokingAllowed = props.pets_allowed === 'true';
    if (typeof props.child_seat_available !== 'boolean')
      childSeatAvailable = props.pets_allowed === 'true';

    const totalPrice = Number(props.seats) * Number(props.seat_price);

    const tripDate = new Date(props.trip_date);
    const departureTime = new Date(props.departure_time);

    return [
      undefined,
      new CreateTripDto({
        seats: props.seats,
        seat_price: props.seat_price,
        origin: props.origin,
        destiny: props.destiny,
        trip_status: 'not_started',
        driver: user.id,
        total_price: totalPrice,
        trip_date: tripDate,
        departure_time: departureTime,
        pets_allowed: petAllowed,
        smoking_allowed: smokingAllowed,
        child_seat_available: childSeatAvailable,
      }),
    ];
  }
}
