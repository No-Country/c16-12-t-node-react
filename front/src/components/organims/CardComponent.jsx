import React from 'react';
import FromTo from '../atoms/FromTo';
import { Avatar } from '../atoms/Avatar';
import { UserName } from '../atoms/Username';
import { StarRating } from '../atoms/StarRating';
import TripTime from '../atoms/TripTime';
import AvailablePlaces from '../atoms/AvailablePlaces';
import { FaRegCalendarAlt } from 'react-icons/fa';
import { Button } from '../atoms/Button';

const CardComponent = ({
  driver,
  userRating,
  avatarUrl,
  from,
  to,
  date,
  time,
  spots,
}) => {
    let fecha = new Date()

    let day = fecha.getDate()
    let month = fecha.getMonth() + 1
    let year = fecha.getFullYear()

  return (
    <div className="bg-white shadow-lg rounded-xl p-4 w-80">
      <div className="flex items-center justify-between mb-2">
        <div className="flex items-center">
          <span className="font-bold text-gray-800">
            <div className="object-cover w-full h-full">
              <Avatar avatarUrl={avatarUrl} userName={driver} />
            </div>
          </span>
        </div>
        <div className="flex justify-start flex-col ml-9">
          <span className="text-gray-100 font-extralight flex items-right justify-end cursor-pointer">
            Ver perfil
          </span>
          <UserName username={driver} />
          <StarRating userRating={userRating} />
        </div>
      </div>

      <div className="flex items-center justify-between mb-4 flex-1 gap-4 ">
        <div className="flex flex-col">
          <FromTo from={from} to={to} />
          <div className="flex flex-col">
            <span className="text-gray-800">
              <FaRegCalendarAlt className="inline mr-1" />
              Fecha <span className="font-extralight">{`${day}-0${month}-${year}`}</span>
            </span>

            <TripTime time={time} />
          </div>
        </div>
      </div>
      <div className="flex items-center justify-center">
        <AvailablePlaces numero={spots} />
      </div>

      <div className="flex justify-center items-center">
        <Button content="viewTravel" size="medium" />
      </div>
    </div>
  );
};

export default CardComponent;
