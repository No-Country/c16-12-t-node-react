import { useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';

import { FaBabyCarriage, FaSmokingBan } from 'react-icons/fa';
import { MdPets, MdEventSeat } from 'react-icons/md';
import { LuMapPin } from 'react-icons/lu';
import { LiaMapPinSolid } from 'react-icons/lia';
import { IoCalendarOutline } from 'react-icons/io5';
import { IoMdTime } from 'react-icons/io';
import { TbSmokingNo } from 'react-icons/tb';

import { getDate, tranformFormatTwentyFour } from '@/utils/shared';
import { Button, DataContent } from '@/components/atoms/index';
import { UserAvatar } from '../molecules/userAvatar';
import { useTrip } from '@/context/Trips.context';
import { useUser } from '@/context/user.context';

export const TripDetails = () => {
  const { user } = useUser();

  const { tripId } = useParams();
  const { getTrip, trip, userReservations, tripsByUser } = useTrip();

  useEffect(() => {
    getTrip(Number(tripId));
  }, []);

  const isTripReserved = userReservations?.some(
    (reservation) => reservation?.trip.id === Number(tripId)
  );

  const isUserTrip = tripsByUser?.some((trip) => trip?.id === Number(tripId));

  console.log({ isTripReserved, isUserTrip });

  const hour = tranformFormatTwentyFour(trip?.departure_time);
  const date = getDate(trip?.trip_date);
  const seatsAvailable = trip?.seats - trip?.seats_reserved;
  const spots = trip.seats_reserved === null ? trip.seats : seatsAvailable;

  return (
    <div className=" min-w-11 md:max-w-[900px] mx-auto">
      <article className="bg-white shadow-lg rounded-xl p-4 md:p-20 w-full">
        <aside className="flex flex-col justify-between gap-10">
          <section className="flex">
            <UserAvatar
              avatarUrl={trip?.driver?.avatar}
              username={trip.driver?.name + ' ' + trip.driver?.last_name}
              rating={trip.driver?.rating}
            />
          </section>
          <section className="font-bold">
            <h2>Detaller del viaje</h2>
            <div className="flex flex-wrap gap-2 justify-between">
              <div className="flex flex-col gap-2">
                <DataContent
                  icon={<LiaMapPinSolid size={24} color="#1C1C1C" />}
                  aperture="Desde"
                  description={trip?.origin?.name}
                />
                <DataContent
                  icon={<LuMapPin size={24} color="#1C1C1C" />}
                  aperture="Hasta"
                  description={trip?.destiny?.name}
                />
                <DataContent
                  icon={<IoCalendarOutline size={24} color="#1C1C1C" />}
                  aperture="Fecha"
                  description={date}
                />
                <DataContent
                  icon={<IoMdTime size={24} color="#1C1C1C" />}
                  aperture="Hora"
                  description={hour}
                />
              </div>
              <div className="flex flex-col gap-2">
                <DataContent
                  icon={<MdEventSeat size={24} />}
                  aperture={spots}
                  description="Asientos disponibles"
                />
                <DataContent
                  icon={<MdPets size={24} />}
                  description="Puedo llevar mascotas"
                />
                <DataContent
                  icon={<FaBabyCarriage size={24} />}
                  description="tengo asiento para niños"
                />
                <DataContent
                  icon={
                    trip.smoking_allowed ? (
                      <FaSmokingBan size={24} />
                    ) : (
                      <TbSmokingNo size={24} />
                    )
                  }
                  description={`${trip.smoking_allowed ? 'Se permite fumar' : 'No está permitido fumar'}`}
                />
              </div>
            </div>
          </section>
          <section>
            <h1 className="pb-6 font-bold">Sobre el viaje</h1>
            <ul className="list-disc pl-10">
              <li>Tengo espacio para valijas</li>
            </ul>
          </section>
        </aside>
        <div className="flex flex-col justify-center items-end mt-7">
          <div className="flex flex-col gap-2 justify-center items-center p-6 rounded-md w-full md:w-auto">
            {user?.role.name === 'passenger' && !isTripReserved && (
              <Button
                size="medium"
                type="button"
                content="Reservar asiento"
                onClick={() => console.log('abrir popup')}
              />
            )}

            {user?.role.name === 'passenger' && isTripReserved && (
              <Button
                size="medium"
                type="button"
                content="Cancelar"
                onClick={() => console.log('abrir popup para cancelar')}
              />
            )}

            {user?.role.name === 'driver' && isUserTrip && (
              <Button
                size="medium"
                type="button"
                content="Editar"
                onClick={() => console.log('redirección para editar')}
              />
            )}

            {!user && (
              <div className="flex flex-col items-center gap-2">
                <p className="text-xl w-[250px]">
                  Inicia Sesión o Registrate para reservar un asiento
                </p>
                <Link to="/login">
                  <Button content="Iniciar Sesion" />
                </Link>
              </div>
            )}
          </div>
        </div>
      </article>
    </div>
  );
};
