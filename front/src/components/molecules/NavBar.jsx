import { Link, useNavigate } from 'react-router-dom';
import PropTypes from 'prop-types';

import { Avatar } from '../atoms/Avatar';
import { useUser } from '@/context/user.context';
import { Button } from '../atoms/Button';

export const NavBar = ({ isClicked }) => {
  const navigation = useNavigate();
  const { user, logout } = useUser();

  const handleClick = () => {
    logout();
    navigation('/');
  };

  const remplate = (
    <div className="md:hidden">
      <nav className="flex flex-col py-4 px-2 absolute top-16 left-0 w-full bg-[#e5e5e5]">
        <Link
          to="/"
          className="text-black hover:bg-primary-300 hover:text-black rounded-lg py-1.5 px-3 block"
        >
          Inicio
        </Link>
        {user ? (
          <>
            <Link
              to={`/trips/${user.id}/my-trips`}
              className="text-black hover:bg-primary-300 hover:text-black rounded-lg py-1.5 px-3"
            >
              Mis viajes
            </Link>
            <Link
              to="/messages"
              className="text-black hover:bg-primary-300 hover:text-black rounded-lg py-1.5 px-3"
            >
              Mis mensajes
            </Link>
            <Button content="Salir" onClick={handleClick} />
          </>
        ) : (
          <>
            <Link
              to="/about"
              className="text-black hover:bg-primary-300 hover:text-black rounded-lg py-1.5 px-3"
            >
              Sobre nosotros
            </Link>
            <Link
              to="/contact"
              className="text-black hover:bg-primary-300 hover:text-black rounded-lg py-1.5 px-3"
            >
              Contacto
            </Link>
          </>
        )}
      </nav>
    </div>
  );

  return (
    <div className="flex justify-end items-center h-16 w-full gap-2">
      <nav className="hidden md:flex md:space-x-4 md:justify-center md:items-center">
        <Link
          to="/"
          className="text-black hover:bg-primary-300 hover:text-black rounded-lg py-1.5 px-3 block"
        >
          Inicio
        </Link>
        {user ? (
          <>
            <Link
              to={`/trips/${user.id}/my-trips`}
              className="text-black hover:bg-primary-300 hover:text-black rounded-lg py-1.5 px-3"
            >
              Mis viajes
            </Link>
            <Link
              to="/messages"
              className="text-black hover:bg-primary-300 hover:text-black rounded-lg py-1.5 px-3"
            >
              Mis mensajes
            </Link>
            <Button content="Salir" onClick={handleClick} />
          </>
        ) : (
          <>
            <Link
              to="/about"
              className="text-black hover:bg-primary-300 hover:text-black rounded-lg py-1.5 px-3"
            >
              Sobre nosotros
            </Link>
            <Link
              to="/contact"
              className="text-black hover:bg-primary-300 hover:text-black rounded-lg py-1.5 px-3"
            >
              Contacto
            </Link>
          </>
        )}
      </nav>
      {isClicked && remplate}
      <div className="flex gap-2 justify-end">
        {user && <Avatar size="mini" avatarUrl={user?.avatar} />}
        {!user && (
          <>
            <Link
              to="/login"
              className="bg-primary-400 text-white hover:bg-primary-600 rounded-lg py-1.5 px-3"
            >
              Ingresar
            </Link>
            <Link
              to="/register"
              className="bg-primary-400 text-white hover:bg-primary-600 rounded-lg py-1.5 px-3"
            >
              Registrarse
            </Link>
          </>
        )}
      </div>
    </div>
  );
};

NavBar.propTypes = {
  isClicked: PropTypes.bool,
};
