import PropTypes from 'prop-types';

import { useChange } from '@/hooks/useChange';
import { Button, Input } from '../atoms/index';
import { CustomeCheckBox } from '../atoms/customeCheckBox';
import { Select } from '../atoms/Select';
import { useUser } from '@/context/user.context';

export const RegisterForm = () => {
  const { register } = useUser();
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

  // todo: recuperador de la base de datos
  const roles = [
    { id: 1, name: 'Admin' },
    { id: 2, name: 'Moderador' },
    { id: 3, name: 'Usuario' },
  ];

  // todo: recuperador de la base de datos
  const citys = [
    { id: 1, name: 'Cali' },
    { id: 2, name: 'Medellín' },
    { id: 3, name: 'Barranquilla' },
  ];

  // todo: recuperador de la base de datos
  const countries = [
    { id: 1, name: 'Colombia' },
    { id: 2, name: 'Ecuador' },
    { id: 3, name: 'Perú' },
  ];

  const { state, handleChange } = useChange(initialValues);

  const handleSubmit = (e) => {
    e.preventDefault();
    register(state);
  };

  return (
    <div className="h-content w-[600px]  bg-white rounded-xl mt-4 mx-auto px-8 py-6">
      <span className="flex justify-center p-5 font-bold text-xl text-center">
        Completa el formulario con tus datos personales
      </span>
      <form onSubmit={handleSubmit}>
        <Input
          label="Nombre"
          id="name"
          name="name"
          size="full"
          placeholder="Ej. Juan"
          onChange={handleChange}
        />
        <Input
          label="Nombre"
          id="last_name"
          name="last_name"
          size="full"
          placeholder="Ej. Lopez"
          onChange={handleChange}
        />
        <Input
          label="Mail"
          id="email"
          name="email"
          type="email"
          size="full"
          placeholder="Ej. juanloper@mail.com"
          onChange={handleChange}
        />
        <Input
          label="Contraseña"
          id="password"
          name="password"
          type="password"
          size="full"
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
          onChange={handleChange}
        />
        <Select
          label="Role"
          name="role"
          roles={roles}
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
          roles={citys}
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
