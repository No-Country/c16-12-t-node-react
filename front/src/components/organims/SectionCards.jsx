import { useTrip } from '@/context/Trips.context';
import { CardComponent } from './CardComponent';

export const SectionCards = () => {
  const { tripData } = useTrip();

  const { data } = tripData;

  const filterTripByDriverRating = data?.filter(
    (trip) => trip.driver?.rating >= 0
  );

  return (
    <div className="container mx-auto px-4 py-8 flex flex-col justify-center items-center">
      <p className="text-xl md:text-left md:text-4xl font-bold text-gray-800 mb-10">
        Descubre los viajes disponibles
      </p>
      <div className="grid-card-auto-fill gap-8 w-full md:w-[80%] mx-auto">
        {filterTripByDriverRating?.map((trip, i) => (
          <CardComponent
            key={i}
            id={trip.id}
            seats={trip.seats}
            origin={trip.origin?.name}
            destiny={trip.destiny?.name}
            driver={trip.driver}
            tripDate={trip.trip_date}
            DepartureTime={trip.departure_time}
            spots={trip.seats_reserved}
          />
        ))}
      </div>
    </div>
  );
};
