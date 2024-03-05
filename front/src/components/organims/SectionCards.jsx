import { useTrip } from '@/context/Trips.context';
import { CardComponent } from './CardComponent';
import { useEffect } from 'react';

export const SectionCards = () => {
  const { tripData, getTrips } = useTrip();

  useEffect(() => {
    getTrips();
  }, []);

  return (
    <div className="container mx-auto px-4 py-8 flex flex-col justify-center items-center">
      <p className="text-xl md:text-left md:text-4xl font-bold text-gray-800 mb-10">
        Descubre los viajes disponibles
      </p>
      <div className="flex flex-wrap justify-center gap-x-20 gap-y-14">
        {tripData?.data?.map((trip, i) => (
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
