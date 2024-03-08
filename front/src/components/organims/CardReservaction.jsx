import propTypes from 'prop-types';
import { Link } from 'react-router-dom';

import { LuMapPin, LuCircleDollarSign } from 'react-icons/lu';
import { LiaMapPinSolid } from 'react-icons/lia';
import { IoCalendarOutline } from 'react-icons/io5';
import { IoMdTime } from 'react-icons/io';
import { MdPets, MdEventSeat } from 'react-icons/md';
import { FaBabyCarriage, FaSmokingBan } from 'react-icons/fa';
import { TbSmokingNo } from 'react-icons/tb';

import { DataContent } from '../atoms/DataContent';
import { getDate, tranformFormatTwentyFour } from '@/utils/shared';
import { useShow } from '@/context/show.context';

export const CardResevation = ({
  id,
  origin,
  destiny,
  seatReserved,
  reservedStatus,
  trip,
}) => {
  const { handleCancelTrip, getID } = useShow();
  const hour = tranformFormatTwentyFour(trip.departure_time);
  const date = getDate(trip.trip_date);

  const totalPay = seatReserved * trip.seat_price;

  return (
    <div className="bg-white shadow-lg rounded-xl p-6">
      <div className="flex justify-between">
        <div className="flex flex-col gap-1">
          <DataContent
            icon={<LiaMapPinSolid size={24} color="#1C1C1C" />}
            aperture="Desde"
            description={origin}
          />
          <DataContent
            icon={<LuMapPin size={24} color="#1C1C1C" />}
            aperture="Hasta"
            description={destiny}
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
        <div className="flex flex-col gap-1">
          <DataContent
            icon={<MdEventSeat size={24} color="#1C1C1C" />}
            aperture={seatReserved}
            description="Asientos reservados"
          />
          <DataContent
            icon={<MdPets size={24} color="#1C1C1C" />}
            aperture="Mascotas"
            description={trip.pets_allowed ? 'Permitido 😊' : 'No permitido 😟'}
          />
          <DataContent
            icon={<LuCircleDollarSign size={24} color="#1C1C1C" />}
            aperture={totalPay}
            description="Monto a pagar"
          />
          <DataContent
            icon={<FaBabyCarriage size={24} color="#1C1C1C" />}
            description={
              trip.children_allowed
                ? 'Asiento para niños'
                : 'No hay asientos para niños'
            }
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
      <div className="flex gap-4 justify-between mt-4">
        {reservedStatus === 'reserved' ? (
          <span className="bg-green-600  text-white px-2 rounded-md py-1 flex justify-center items-center self-start">
            Reservado
          </span>
        ) : (
          <span className="bg-red-600  text-white px-2 rounded-md py-1">
            Cancelado
          </span>
        )}
        <div className="flex gap-2 justify-end items-center">
          <Link
            to={`/trips/${trip.id}`}
            className="bg-blue-400 text-white px-2 rounded-md py-1 hover:bg-blue-700 flex justify-center items-center self-end"
          >
            Ver detalles
          </Link>
          <button
            className="bg-red-600 text-white px-2 rounded-md py-1"
            onClick={() => {
              handleCancelTrip();
              getID(id);
            }}
          >
            Cancelar
          </button>
        </div>
      </div>
    </div>
  );
};

CardResevation.propTypes = {
  id: propTypes.number,
  origin: propTypes.string,
  destiny: propTypes.string,
  seatReserved: propTypes.string,
  reservedStatus: propTypes.string,
  trip: propTypes.object,
};
