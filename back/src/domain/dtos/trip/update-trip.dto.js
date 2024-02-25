import { CustomeError } from '../../../errors/index.js';
import { Validator } from '../../../helpers/validator.helper.js';

export class UpdateTripDto {
  constructor(props) {
    this.id = props.id;
    this.distance = props.distance;
    this.timeStimated = props.timeStimated;
    this.seats = props.seats;
    this.seatsReserved = props.seatsReserved;
    this.seatPrice = props.seatPrice;
    this.totalPrice = props.totalPrice;
    this.origin = props.origin;
    this.destiny = props.destiny;
  }
  static create(props) {
    const { id, user, ...data } = props;
    console.log(data);

    if (!Object.keys(data).length)
      return [CustomeError.badRequest('Missing city properties in request')];
    if (!Validator.validateId(id)) return [CustomeError.badRequest(`'${id}' must be a number`)];

    return [
      undefined,
      new UpdateTripDto({
        id: props.id,
        distance: props.distance,
        timeStimated: props.timeStimated,
        seats: props.seats,
        seatsReserved: props.seatsReserved,
        seatPrice: props.seatPrice,
        totalPrice: props.totalPrice,
        origin: props.origin,
        destiny: props.destiny,
      }),
    ];
  }
}
