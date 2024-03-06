import { useEffect } from 'react';
import PropTypes from 'prop-types';
import { useNavigate } from 'react-router-dom';

import { useChange } from '@/hooks/useChange';
import { Button, Input } from '../atoms/index';
import { CustomeCheckBox } from '../atoms/customeCheckBox';
import { Select } from '../atoms/Select';
import { useUser } from '@/context/user.context';
import { useCity } from '@/context/cities.context';
import { useCountry } from '@/context/countries.context';
import { useRoles } from '@/context/roles.context';

export const RegisterForm = () => {
  const navigate = useNavigate();
  const { register, user } = useUser();
  const initialValues = {
    name: '',
    last_name: '',
    email: '',
    password: '',
    phone: '',
    dni: '',
    role: '',
    city_id: '',
    country_id: '',
    terms: false,
  };

  const { roles } = useRoles();
  const { cities } = useCity();
  const { countries } = useCountry();

  const { state, handleChange } = useChange(initialValues);

  const filterCities = cities.filter(
    (city) => city.country_id === Number(state.country_id)
  );
  const filterRoles = roles.filter((rol) => rol.name !== 'admin');

  const handleSubmit = (e) => {
    e.preventDefault();
    register(state);
  };

  useEffect(() => {
    if (user) {
      navigate('/');
    }
  }, [user, navigate]);

  return (
    <div className="h-content w-[96%] sm:w-[600px]  bg-white rounded-xl mt-4 mx-auto px-8 py-6">
      <span className="flex justify-center p-5 font-bold text-xl text-center">
        Completa el formulario con tus datos personales
      </span>
      <form onSubmit={handleSubmit}>
        <Input
          label="Nombre"
          id="name"
          name="name"
          size="full"
          type="text"
          border
          rounded
          placeholder="Ej. Juan"
          onChange={handleChange}
        />
        <Input
          label="Apellidos"
          id="last_name"
          name="last_name"
          size="full"
          type="text"
          border
          rounded
          placeholder="Ej. Lopez"
          onChange={handleChange}
        />
        <Input
          label="Mail"
          id="email"
          name="email"
          type="email"
          size="full"
          border
          rounded
          placeholder="Ej. juanloper@mail.com"
          onChange={handleChange}
        />
        <Input
          label="Contraseña"
          id="password"
          name="password"
          type="password"
          size="full"
          border
          rounded
          placeholder="Ej. ******"
          onChange={handleChange}
        />
        <span className="ml-2 pb-2 font-bold">
          * Tu contraseña debe tener 5 dígitos e incluir un número.
        </span>
        <Input
          label="Número de telefono"
          id="phone"
          name="phone"
          size="full"
          type="number"
          inputMode="numeric"
          pattern="\d*"
          border
          rounded
          min={0}
          onChange={handleChange}
        />
        <Input
          label="Documento de identidad"
          id="dni"
          name="dni"
          size="full"
          type="number"
          inputMode="numeric"
          pattern="\d*"
          border
          rounded
          min={0}
          onChange={handleChange}
        />
        <Select
          label="Role"
          name="role"
          roles={filterRoles}
          selectOne="---- Seleccionar role ----"
          value={state.role}
          onChange={handleChange}
        />
        <Select
          label="Pais"
          name="country_id"
          roles={countries}
          selectOne="---- Seleccionar pais -----"
          value={state.country_id}
          onChange={handleChange}
        />
        <Select
          label="Ciudad"
          name="city_id"
          roles={filterCities}
          selectOne="---- Seleccionar ciudad -----"
          value={state.city_id}
          onChange={handleChange}
        />
        <CustomeCheckBox
          label="He leído y acepto los términos y servicios."
          name="terms"
          onChange={handleChange}
          checked={state.terms}
        />
        <div className="flex justify-center w-72 mx-auto mt-14">
          <Button
            type="submit"
            btnType="primary"
            size="full"
            content="Registrarme"
            disabled={!state.terms}
          />
        </div>
      </form>
    </div>
  );
};

RegisterForm.propTypes = {
  value: PropTypes.string,
  name: PropTypes.string,
  label: PropTypes.string,
};
