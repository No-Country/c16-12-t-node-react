import { IoClose } from 'react-icons/io5';

import { useShow } from '@/context/show.context';
import { Button } from '../atoms/Button';
import { useTrip } from '@/context/Trips.context';

export const CancelTripModal = () => {
  const { stateId, handleCancelTrip } = useShow();
  const { cancelTrip } = useTrip();

  const reserved = {
    seats_reserved: 0,
    trip_id: stateId,
  };

  const handleClick = (e) => {
    e.preventDefault();
    cancelTrip(stateId, reserved);
    handleCancelTrip();
  };

  return (
    <div className="absolute top-0 left-0 right-0 -bottom-[10rem] bg-[rgba(0,0,0,0.5)] bg z-50 grid place-items-center">
      <div className="flex flex-col gap-2 p-6 w-[4rem mx-auto bg-white  rounded-2xl drop-shadow-2xl bg-opacity-85">
        <div className=" relative">
          <button
            className=" absolute right-0 top-0 text-2xl font-bold text-center"
            onClick={handleCancelTrip}
          >
            <IoClose />
          </button>
          <div className="flex justify-center p-7">
            <Button
              content="¿Esta seguro de cancelar?"
              type="submit"
              onClick={handleClick}
            />
          </div>
        </div>
      </div>
    </div>
  );
};
