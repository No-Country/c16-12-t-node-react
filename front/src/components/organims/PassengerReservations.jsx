import { useEffect } from 'react';

import { useTrip } from '@/context/Trips.context';
import { CardResevation } from './CardReservaction';
import { useUser } from '@/context/user.context';

export const PassengerReservations = () => {
  const { user } = useUser();
  const { userReservations, getUserReservations } = useTrip();

  useEffect(() => {
    getUserReservations(user.id);
  }, []);

  return (
    <div>
      <h1 className="text-3xl text-center my-10">Mis viajes reservados</h1>
      <div className=" grid gap-8 wgrid-card-auto-fill-fit mx-auto">
        {userReservations?.map((tripReserved, i) => (
          <CardResevation
            key={i}
            id={tripReserved.id}
            origin={tripReserved.origin?.name}
            destiny={tripReserved.destiny?.name}
            trip={tripReserved.trip}
            seatReserved={tripReserved.seats_reserved}
            reservedStatus={tripReserved.reserved_status}
          />
        ))}
      </div>
    </div>
  );
};
