import { Link, useParams } from 'react-router-dom';

import { FaBabyCarriage, FaSmokingBan } from 'react-icons/fa';
import { MdPets, MdEventSeat } from 'react-icons/md';
import { LuMapPin } from 'react-icons/lu';
import { LiaMapPinSolid } from 'react-icons/lia';
import { IoCalendarOutline } from 'react-icons/io5';
import { IoMdTime } from 'react-icons/io';
import { TbSmokingNo } from 'react-icons/tb';

import { Button, DataContent } from '@/components/atoms/index';
import { UserAvatar } from '../molecules/userAvatar';
import { useEffect } from 'react';
import { useTrip } from '@/context/Trips.context';

export const TripDetails = () => {
  // todo: Se debe recupera desde el context useContext el usuario logeado
  // const { user } = useUser();
  const user = true;

  // todo: llamar a useTrip de context trip para recuperar solo el trip con el id
  // const { id: tripId } = useParams();
  // const { getTrip, trip } = useTrip(); // <<-- el objeto trip debe contener los mismos campos que el ejemplo.

  // useEffect(() => {
  //   getTrip(tripId);
  // }, []);

  //! se tiene que eliminar este ejemplo
  const trip = {
    id: 1,
    distance: 2.5,
    time_estimated: 3,
    seats: 5,
    seat_price: 20,
    total_price: 100,
    trip_date: '2024-03-20',
    departure_time: '10:00',
    pets_allowed: true,
    smoking_allowed: false,
    child_seat_available: true,
    trip_status: 'not_started',
    seats_reserved: 3,
    origin: 'Cordoba',
    destiny: 'Buenos Aires',
    driver: {
      id: 1,
      name: 'Lucas',
      last_name: 'Perez',
      email: 'zOqFP@example.com',
      phone: '123456789',
      avatarUrl: 'https://i.pravatar.cc/300',
      rating: 4,
    },
    passengers: [],
  };

  return (
    <div className=" min-w-11 md:max-w-[900px] mx-auto">
      <article className="bg-white shadow-lg rounded-xl p-4 md:p-20 w-full">
        <aside className="flex flex-col justify-between gap-10">
          <section className="flex">
            <UserAvatar
              avatarUrl={trip.driver?.avatarUrl}
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
                  description={trip.origin}
                />
                <DataContent
                  icon={<LuMapPin size={24} color="#1C1C1C" />}
                  aperture="Hasta"
                  description={trip.destiny}
                />
                <DataContent
                  icon={<IoCalendarOutline size={24} color="#1C1C1C" />}
                  aperture="Fecha"
                  description={trip.trip_date}
                />
                <DataContent
                  icon={<IoMdTime size={24} color="#1C1C1C" />}
                  aperture="Fecha"
                  description={trip.departure_time}
                />
              </div>
              <div className="flex flex-col gap-2">
                <DataContent
                  icon={<MdEventSeat size={24} />}
                  aperture={trip.seats - trip.seats_reserved}
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
          <div className="flex flex-col gap-2 justify-center items-center border border-primary-400 p-6 rounded-md w-full md:w-auto">
            {user ? (
              <>
                <Button size="medium" content="Reservar asiento" />
              </>
            ) : (
              <>
                <p className="text-xl w-[250px]">
                  Inicia Sesión o Registrate para reservar un asiento
                </p>
                <Link to="/login">
                  <Button content="Iniciar Sesion" />
                </Link>
              </>
            )}
          </div>
        </div>
      </article>
    </div>
  );
};
