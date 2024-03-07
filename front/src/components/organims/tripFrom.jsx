import { useNavigate } from 'react-router-dom';

import { useChange } from '@/hooks/useChange';
import { Button } from '../atoms/Button';
import { Input } from '../atoms/Input';
import { CustomeCheckBox } from '../atoms/customeCheckBox';
import { Select } from '../atoms/Select';
import { useUser } from '@/context/user.context';
import { useCity } from '@/context/cities.context';
import { useTrip } from '@/context/Trips.context';

export const TripForm = () => {
  const { user } = useUser();
  const { cities } = useCity();
  const { createTrip } = useTrip();
  const { country } = user;
  const navigate = useNavigate();

  const initialValues = {
    seats: 0,
    seat_price: 0,
    origin: '',
    destiny: '',
    trip_date: '',
    departure_time: '',
    pets_allowed: false,
    smoking_allowed: false,
    child_seat_available: false,
  };

  const { state, handleChange } = useChange(initialValues);

  const handleSubmit = (e) => {
    e.preventDefault();
    createTrip(state);
    navigate(`/trips/${user.id}/my-trips`);
  };

  const filterCities = cities.filter((city) => city.country_id === country?.id);

  return (
    <div className="shadow-lg mx-auto p-4 bg-primary-200 rounded-xl sm:w-fit opacity-85 flex sm:justify-center sm:items-center">
      <form
        onSubmit={handleSubmit}
        className="flex flex-col justify-center w-full sm:w-fit"
      >
        <div className="flex flex-col flex-wrap sm:flex-row sm:gap-4">
          <Input
            label="Número de asientos"
            id="seats"
            name="seats"
            type="number"
            size="full"
            border
            value={state.seats}
            placeholder="Ingrese el número de asientos"
            onChange={handleChange}
          />
          <Input
            label="Precio por asiento"
            id="seat_price"
            name="seat_price"
            type="number"
            size="full"
            border
            value={state.seat_price}
            placeholder="Ingrese el precio por asiento"
            onChange={handleChange}
          />
        </div>
        <div className="flex flex-col flex-wrap sm:flex-row sm:gap-4">
          <Select
            label="Origen"
            id="origin"
            name="origin"
            roles={filterCities}
            value={state.origin}
            selectOne="--- Origen ---"
            onChange={handleChange}
          />
          <Select
            label="Destino"
            id="destiny"
            name="destiny"
            roles={filterCities}
            value={state.destiny}
            selectOne="--- Destino ---"
            onChange={handleChange}
          />
        </div>
        <div className="flex flex-col flex-wrap sm:flex-row sm:gap-4">
          <Input
            label="Fecha de salida"
            id="trip_date"
            name="trip_date"
            type="date"
            size="full"
            border
            value={state.trip_date}
            placeholder="Ingrese la fecha de salida"
            onChange={handleChange}
          />
          <Input
            label="Hora de salida"
            id="departure_time"
            name="departure_time"
            type="time"
            size="full"
            border
            value={state.departure_time}
            placeholder="Ingrese la hora de salida"
            onChange={handleChange}
          />
        </div>
        <div className="flex flex-col flex-wrap sm:flex-row sm:gap-4">
          <CustomeCheckBox
            label="Mascotas permitidas"
            name="pets_allowed"
            checked={state.pets_allowed}
            onChange={handleChange}
          />
          <CustomeCheckBox
            label="Se permite fumar"
            name="smoking_allowed"
            checked={state.smoking_allowed}
            onChange={handleChange}
          />
          <CustomeCheckBox
            label="Asientos para niños"
            name="child_seat_available"
            checked={state.child_seat_available}
            onChange={handleChange}
          />
        </div>
        <Button content="Crear viaje" type="submit" />
      </form>
    </div>
  );
};
