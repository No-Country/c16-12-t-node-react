import { useState } from 'react';
import { Link } from 'react-router-dom';
import { IoMdClose } from 'react-icons/io';
import { MdMenu } from 'react-icons/md';

import Logo from '@/assets/img/logo.png';
import { NavBar } from '../molecules/NavBar';

export const Header = () => {
  const [showMenu, setShowMenu] = useState(false);

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  return (
    <header className="w-full py-2">
      <div className="flex px-1.5 justify-between gap-1.5 items-center md:container mx-auto relative">
        <Link to="/" className="inline-block">
          <img src={Logo} alt="Logo" className="object-cover" />
        </Link>
        <NavBar isClicked={showMenu} />
        <span
          className="md:hidden inline-flex items-center justify-center cursor-pointer"
          onClick={toggleMenu}
        >
          {showMenu ? (
            <IoMdClose size={24} className="text-black transition-transform" />
          ) : (
            <MdMenu size={24} className="text-black transition-transform" />
          )}
        </span>
      </div>
    </header>
  );
};
