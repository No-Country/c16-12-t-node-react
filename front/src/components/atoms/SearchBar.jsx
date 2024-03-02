import { IoSearch } from 'react-icons/io5';

import { Button } from './Button';
import { Input } from './Input';

export const SearchBar = () => {
  return (
    <div className="flex absolute top-0 left-0 w-full">
      <form className="flex w-11/12 sm:w-9/12 lg:w-fit flex-col lg:flex-row gap-2 mx-auto bg-primary-300 rounded-2xl p-4 drop-shadow-2xl bg-opacity-85">
        <div className="w-full lg:w-[10rem]">
          <Input
            label="Origen"
            placeholder="Origen de viaje"
            size="full"
            type="text"
            name="origin"
            id="origin"
          />
        </div>
        <div className="lg:w-[10rem]">
          <Input
            label="Destino"
            placeholder="Destino de viaje"
            size="full"
            type="text"
            name="destiny"
            id="destiny"
          />
        </div>
        <div className="lg:w-[10rem]">
          <Input
            label="Fecha"
            placeholder="Fecha de viaje"
            size="full"
            type="date"
            name="date"
            id="date"
          />
        </div>
        <div className="lg:w-[10rem]">
          <Input
            label="Viajeros"
            placeholder="Cant. de viajeros"
            size="full"
            type="number"
            name="viajeros"
            id="viajeros"
          />
        </div>
        <div className=" m-auto w-full sm:w-[20rem] lg:w-[5rem]">
          <div className="w-1 h-8 hidden lg:block"></div>
          <Button
            size="full"
            color="primary"
            RighIcon={
              <IoSearch size={40} color="white" className="rotate-90 " />
            }
          />
        </div>
      </form>
    </div>
  );
};
