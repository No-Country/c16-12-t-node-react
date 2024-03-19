import { Link, useParams } from 'react-router-dom';

import { Button } from '../atoms/Button';
import { CardComponent } from './CardComponent';
import { useTrip } from '@/context/Trips.context';
import { useEffect } from 'react';

export const DriverTrips = () => {
  const { userId } = useParams();
  const { tripsByUser, getTripsByUser } = useTrip();

  useEffect(() => {
    getTripsByUser(userId);
  }, []);

  return (
    <div>
      <Link to={`/trips/${userId}/create-new-trip`}>
        <Button content="Crear nuevo viaje" />
      </Link>
      <h1 className="text-3xl text-center my-10">Mis viajes</h1>
      <div className="grid-card-auto-fill gap-8 w-fit mx-auto">
        {tripsByUser.map((trip, i) => (
          <CardComponent
            key={i}
            id={trip.id}
            seats={trip.seats}
            origin={trip.origin?.name}
            destiny={trip.destiny?.name}
            tripDate={trip.trip_date}
            DepartureTime={trip.departure_time}
            spots={trip.seats_reserved}
            driver={trip.driver}
          />
        ))}
      </div>
    </div>
  );
};
