import { CustomeError } from '../../../errors/index.js';
import { Validator } from '../../../helpers/validator.helper.js';

export class UpdateTripDto {
  constructor(props) {
    this.id = props.id;
    this.seats = props.seats;
    this.seat_price = props.seat_price;
    this.total_price = props.total_price;
    this.trip_status = props.trip_status;
    this.origin = props.origin;
    this.destiny = props.destiny;
    this.trip_date = props.trip_date;
    this.departure_time = props.departure_time;
    this.pets_allowed = props.pets_allowed;
    this.smoking_allowed = props.smoking_allowed;
    this.child_seat_available = props.child_seat_available;
  }
  static create(props) {
    const { id, user, ...data } = props;

    const tripStatus = ['not_started', 'in_progress', 'completed'];

    if (!Object.keys(data).length)
      return [CustomeError.badRequest('Missing city properties in request')];
    if (!Validator.validateId(id)) return [CustomeError.badRequest(`'${id}' must be a number`)];

    if (props.trip_status !== undefined && !tripStatus.includes(data.trip_status))
      return [
        CustomeError.badRequest(
          `'${data.trip_status}' is not a valid trip status. Must be one of | ${tripStatus.join(' | ')} |`,
        ),
      ];

    const total_price = Number(data.seats) * Number(data.seat_price);

    return [
      undefined,
      new UpdateTripDto({
        ...data,
        id: props.id,
        distance: props.distance,
        time_estimated: props.time_estimated,
        seats: props.seats,
        seat_price: props.seat_price,
        total_price: total_price ? total_price : undefined,
        trip_status: props.trip_status,
        origin: props.origin,
        destiny: props.destiny,
      }),
    ];
  }
}
