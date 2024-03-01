import { Input } from '../atoms/Input';
import { useUser } from '@/context/user.context';
import { useChange } from '@/hooks/useChange';
import { Button } from '../atoms/Button';

export const LoginForm = () => {
  const { login } = useUser();

  const initialValues = { email: '', password: '' };

  const { state, handleChange } = useChange(initialValues);
  const handleSubmit = (e) => {
    e.preventDefault();
    login(state);
  };

  return (
    <form className="w-full" onSubmit={handleSubmit}>
      <div className="flex flex-col gap-3 mb-10">
        <Input
          id="email"
          name="email"
          label="Correo electrónico"
          size="large"
          placeholder="Ingrese su email"
          onChange={handleChange}
        />
        <Input
          id="password"
          name="password"
          label="Contraseña"
          size="large"
          placeholder="Ingrese su contraseña"
          onChange={handleChange}
        />
      </div>
      <Button content="Ingresar" type="submit" btnType="primary" size="full" />
    </form>
  );
};
