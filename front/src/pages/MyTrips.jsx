import { Link, useParams } from 'react-router-dom';

import { Section } from '@/components/templates/Section';
import { LayOut } from '@/components/templates/template';
import { useEffect } from 'react';
import { useTrip } from '@/context/Trips.context';
import { CardComponent } from '@/components/organims/CardComponent';
import { Button } from '@/components/atoms/Button';

export const MyTrips = () => {
  const { userId } = useParams();
  const { TripsByUser, getTripsByUser } = useTrip();

  useEffect(() => {
    if (userId) {
      getTripsByUser(userId);
    }
  }, []);

  return (
    <LayOut>
      <Section>
        <Link to={`/trips/${userId}/create-new-trip`}>
          <Button content="Crear nuevo viaje" />
        </Link>
        <section>
          <h1 className="text-3xl text-center my-10">Mis viajes</h1>
          <div className="grid md:grid-cols-3 gap-8 w-fit mx-auto">
            {TripsByUser.map((trip, i) => (
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
        </section>
      </Section>
    </LayOut>
  );
};
