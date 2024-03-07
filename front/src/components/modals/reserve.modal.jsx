import { IoClose } from 'react-icons/io5';

import { useShow } from '@/context/show.context';
import { Button } from '../atoms/Button';
import { Input } from '../atoms/Input';
import { useTrip } from '@/context/Trips.context';
import { useChange } from '@/hooks/useChange';

export const ReserveModal = () => {
  const { handleShow, stateId } = useShow();
  const { reserveTrip } = useTrip();
  const initialValue = {
    seats_reserved: '',
  };
  const { state, handleChange } = useChange(initialValue);

  const reserved = {
    seats_reserved: state.seats_reserved,
    trip_id: stateId,
  };

  const handleSubmmit = (e) => {
    e.preventDefault();
    reserveTrip(stateId, reserved);
    handleShow();
  };

  console.log(state, stateId);
  return (
    <div className="absolute top-0 left-0 right-0 -bottom-[10rem] bg-[rgba(0,0,0,0.5)] bg z-50 grid place-items-center">
      <div className="flex flex-col gap-2 p-6 w-[4rem mx-auto bg-white  rounded-2xl drop-shadow-2xl bg-opacity-85">
        <div className=" relative">
          <button
            className=" absolute right-0 text-2xl font-bold text-center"
            onClick={handleShow}
          >
            <IoClose />
          </button>
          <form onSubmit={handleSubmmit} action="m-auto">
            <Input
              label="Seats"
              type="number"
              name="seats_reserved"
              onChange={handleChange}
            />
            <Button content="Reserve" type="submit" />
          </form>
        </div>
      </div>
    </div>
  );
};
