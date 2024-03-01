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
      <div className="flex flex-col my-4 border-[1px] border-gray-400">
        <Input
          id="email"
          name="email"
          label="Email"
          size="large"
          onChange={handleChange}
        />
        <Input
          id="password"
          name="password"
          label="password"
          size="large"
          onChange={handleChange}
        />
      </div>
      <div className="flex flex-col my-4">
        <p className="text-lg text-left">
          ¿No tienes cuenta?{' '}
          <a href="#" className="text-primary-500 hover:underline">
            Regístrate acá
          </a>
        </p>
      </div>
      <Button content="login" type="submit" btnType="primary" size="full" />
    </form>
  );
};
