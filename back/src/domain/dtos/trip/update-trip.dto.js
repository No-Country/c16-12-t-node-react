import { CustomeError } from '../../../errors/index.js';
import { Validator } from '../../../helpers/validator.helper.js';

export class UpdateTripDto {
  constructor(props) {
    console.log('-------> constructor', props);
    this.id = props.id;
    this.distance = props.distance;
    this.time_estimated = props.time_estimated;
    this.seats = props.seats;
    this.seat_price = props.seat_price;
    this.total_price = props.total_price;
    this.trip_status = props.trip_status;
    this.origin = props.origin;
    this.destiny = props.destiny;
  }
  static create(props) {
    const { id, user, ...data } = props;

    const tripStatus = ['not_started', 'in_progress', 'completed'];

    if (!Object.keys(data).length)
      return [CustomeError.badRequest('Missing city properties in request')];
    if (!Validator.validateId(id)) return [CustomeError.badRequest(`'${id}' must be a number`)];

    if (!tripStatus.includes(data.trip_status))
      return [
        CustomeError.badRequest(
          `'${data.trip_status}' is not a valid trip status. Must be one of | ${tripStatus.join(' | ')} |`,
        ),
      ];

    return [
      undefined,
      new UpdateTripDto({
        id: props.id,
        distance: props.distance,
        time_estimated: props.time_estimated,
        seats: props.seats,
        seat_price: props.seat_price,
        total_price: props.total_price,
        trip_status: props.trip_status,
        origin: props.origin,
        destiny: props.destiny,
      }),
    ];
  }
}
