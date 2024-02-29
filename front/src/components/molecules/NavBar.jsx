import { Link } from 'react-router-dom';
import { useState } from 'react';
import { Button } from '../atoms/index.js';
import { MdMenu } from 'react-icons/md';
import Logo from '../../assets/img/logo.png';
export const NavBar = () => {

  const [showMenu, setShowMenu] = useState(false);

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  return (
    <nav className='flex flex-col sm:flex-row md:flex-row justify-between items-center h-20 mx-8'>
        {/* logo */}
        <div>
          <Link to="/">
            <img src={Logo} alt="Logo" className='h-14' />
          </Link>
        </div>
        
        {/* menu desplegable */}
        <div className='block lg:hidden md:hidden' >
          <button onClick={toggleMenu} className="text-white hover:text-gray-300 focus:outline-none">
            <MdMenu size={24} />
          </button>
        </div>

        {/* menu principal */}
        <div className={`flex items-center ${showMenu ? 'block' : 'hidden'} lg:block lg:relative lg:bg-transparent lg:p-0 lg:space-x-0`}>
          <Link to="/" className="hover:bg-primary-300 inline-block px-4 py-2 rounded-lg">Home</Link>
          <Link to="/" className="hover:bg-primary-300 inline-block px-4 py-2 rounded-lg">Sobre nosotros</Link>
          <Link to="/" className="hover:bg-primary-300 inline-block px-4 py-2 rounded-lg">Contactanos</Link>
        </div>
      {/* luego de inicar la sesion debe renderizar el avatar.*/}
        <Button content="login" size="small" color="primary_normal">
          <Link to="/login"></Link>
        </Button>
    </nav>
  );
}
