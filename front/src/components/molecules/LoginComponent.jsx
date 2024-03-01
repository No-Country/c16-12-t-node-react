import { Link } from 'react-router-dom';
import { Button } from '../atoms/Button';
import { Divider } from '../atoms/divider';
import { LoginForm } from './LoginForm';
import { FaGoogle, FaFacebook } from 'react-icons/fa';

export const LoginComponent = () => {
  return (
    <div className="container rounded-[20px] shadow-xl flex flex-col justify-evenly p-6 bg-white max-w-[448px] h-[810px] m-auto pb-20">
      <div className="object-cover w-full h-20 flex items-center justify-center">
        <img src="../src/assets/img/logo.png" alt="Logo" />
      </div>
      <div className="flex flex-col gap-2">
        <LoginForm />
        <div className="flex gap-2 justify-start w-full">
          <p className="text-lg">¿No tienes cuenta?</p>
          <Link
            to="/register"
            className="text-primary-500 hover:underline text-lg"
          >
            Regístrate acá
          </Link>
        </div>
      </div>
      <Divider />
      <div className="flex flex-col items-center gap-6 w-full">
        <Button
          size="full"
          btnType="ghost"
          content="login con google"
          leftIcon={<FaGoogle />}
        />
        <Button
          size="full"
          content="login con facebook"
          btnType="ghost"
          leftIcon={<FaFacebook />}
        />
      </div>
    </div>
  );
};
