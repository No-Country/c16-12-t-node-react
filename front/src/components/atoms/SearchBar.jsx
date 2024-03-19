import { useNavigate } from 'react-router-dom';

import { IoSearch } from 'react-icons/io5';

import { Button } from './Button';
import { Input } from './Input';
import { useChange } from '@/hooks/useChange';
import { useTrip } from '@/context/Trips.context';

export const SearchBar = () => {
  const navigate = useNavigate();
  const initialValue = {
    origin: '',
    destiny: '',
    date: '',
    time: '',
  };

  const { state, handleChange } = useChange(initialValue);
  const { getPropsToFilter } = useTrip();

  const handleSubmit = (e) => {
    e.preventDefault();
    getPropsToFilter(state);
    navigate('/result');
  };

  return (
    <div className="absolute top-0 left-0 w-full">
      <form
        onSubmit={handleSubmit}
        className="flex flex-wrap gap-2 p-6 md:w-4/5 lg:w-2/3 mx-auto bg-primary-300 rounded-2xl drop-shadow-2xl bg-opacity-85"
      >
        <div className="input_wrap">
          <Input
            label="Origen"
            placeholder="Origen de viaje"
            size="full"
            type="text"
            name="origin"
            id="origin"
            onChange={handleChange}
          />
        </div>
        <div className="input_wrap">
          <Input
            label="Destino"
            placeholder="Destino de viaje"
            size="full"
            type="text"
            name="destiny"
            id="destiny"
            onChange={handleChange}
          />
        </div>
        <div className="input_wrap">
          <Input
            label="Fecha"
            placeholder="Fecha de viaje"
            size="full"
            type="date"
            name="date"
            id="date"
            onChange={handleChange}
          />
        </div>
        <div className="input_wrap">
          <Input
            label="Hora"
            placeholder="Hora de viaje"
            size="full"
            type="time"
            name="time"
            id="time"
            onChange={handleChange}
          />
        </div>
        <div className="button_wrap flex flex-col">
          <div className="w-full h-10 block"></div>
          <Button
            size="full"
            color="primary"
            type="submit"
            RighIcon={
              <IoSearch size={40} color="white" className="rotate-90 " />
            }
          />
        </div>
      </form>
    </div>
  );
};
