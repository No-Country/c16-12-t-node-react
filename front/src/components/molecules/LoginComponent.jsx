import React from 'react';
import { Input } from '../atoms/Input';
import { Button } from '../atoms/Button';

export const LoginComponent = () => {
  return (
    <div className="container rounded-lg shadow-xl flex flex-col items-center justify-center" style={{ width: '448px', height: '810px' }}>
      <div className="flex flex-col items-center justify-center my-4">
        <img src="../src/assets/img/logo.png" alt="Logo" className="mb-2" />
      </div>
      <div className="flex flex-col my-4">
        <Input size="medium" inputs="email" label="sesion" placeHolder="iniciarSesion" />
      </div>
      <div className="flex flex-col my-4">
        <Input size="medium" inputs="password" label="contraseña" placeHolder="contraseña" />
        <p className="text-lg text-left">
          ¿No tienes cuenta?{' '}
          <a href="#" className="text-primary-500 hover:underline">Regístrate acá</a>
        </p>
      </div>
      <Button size="medium" content="login" className="my-4" />
      <hr className="my-8 w-full border-gray-400" />
      <div className="flex flex-col items-center justify-center my-4">
        <Button size="mediumlogin" content="logingoogle" />
        <Button size="mediumlogin" content="loginfacebook" />
      </div>
    </div>
  );
};