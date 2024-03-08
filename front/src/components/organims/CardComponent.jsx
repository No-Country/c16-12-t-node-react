import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { LuMapPin } from 'react-icons/lu';
import { LiaMapPinSolid } from 'react-icons/lia';
import { IoCalendarOutline } from 'react-icons/io5';
import { IoMdTime } from 'react-icons/io';

import {
  Avatar,
  UserName,
  StarRating,
  Button,
  DataContent,
} from '../atoms/index';
import { getDate, tranformFormatTwentyFour } from '@/utils/shared';

export const CardComponent = ({
  id,
  seats,
  driver,
  origin,
  destiny,
  tripDate,
  DepartureTime,
  spots,
}) => {
  const { name, last_name, avatar, rating } = driver;
  const userDriver = `${name} ${last_name}`;
  const hour = tranformFormatTwentyFour(DepartureTime);
  const date = getDate(tripDate);
  const spot = spots === null ? seats : `${seats - Number(spots)}`;

  return (
    <div className="bg-white shadow-lg rounded-xl p-6 w-[356px] h-[446px] flex flex-col justify-between">
      <div className="flex space-x-8">
        <Avatar avatarUrl={avatar} userName={userDriver} size="small" />
        <div className="flex flex-col gap-2 justify-center">
          <UserName username={userDriver} size="medium" />
          <StarRating userId={driver.id} userRating={rating} />
        </div>
      </div>
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
      <div className="flex justify-center items-center">
        <span className="text-gray-600">{`Lugares disponibles: ${spot}`}</span>
      </div>
      <Link to={`/trips/${id}`} className="flex justify-center items-center">
        <Button content="Ver viaje" size="full" color="primary_normal" />
      </Link>
    </div>
  );
};

CardComponent.propTypes = {
  id: PropTypes.number,
  seats: PropTypes.number,
  driver: PropTypes.object,
  userRating: PropTypes.number,
  avatarUrl: PropTypes.string,
  origin: PropTypes.string,
  destiny: PropTypes.string,
  tripDate: PropTypes.string,
  DepartureTime: PropTypes.string,
  spots: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};
