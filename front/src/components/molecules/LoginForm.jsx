import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

import { Input } from '../atoms/Input';
import { useUser } from '@/context/user.context';
import { useChange } from '@/hooks/useChange';
import { Button } from '../atoms/Button';

export const LoginForm = () => {
  const navigate = useNavigate();
  const { user, login } = useUser();

  const initialValues = { email: '', password: '' };

  const { state, handleChange } = useChange(initialValues);
  const handleSubmit = (e) => {
    e.preventDefault();
    login(state);
  };

  useEffect(() => {
    if (user) {
      navigate('/');
    }
  }, [user, navigate]);

  return (
    <form className="w-full" onSubmit={handleSubmit}>
      <div className="flex flex-col gap-3 mb-10">
        <Input
          id="email"
          name="email"
          label="Correo electrónico"
          size="large"
          type="email"
          border
          rounded
          placeholder="Ingrese su email"
          onChange={handleChange}
        />
        <Input
          id="password"
          name="password"
          label="Contraseña"
          size="large"
          type="password"
          border
          rounded
          placeholder="Ingrese su contraseña"
          onChange={handleChange}
        />
      </div>
      <Button content="Ingresar" type="submit" btnType="primary" size="full" />
    </form>
  );
};
