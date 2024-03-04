import { Navigate } from 'react-router-dom';

import upsIllustrator from '../../assets/svg/ups-illustrator.svg';
import { Button } from '../atoms/Button';

export const SectionError = () => {
  const handleClick = () => {
    Navigate();
  };

  return (
    <>
      <div className="flex justify-center">
        <img src={upsIllustrator} alt="ups iluustator" />
      </div>
      <div className="text-center">
        <strong className="text-3xl">Ups!</strong>
        <p className="text-xl mt-4">No hay viajes disponibles</p>
        <p className="text-xl mt-4">Intenta con otros</p>
      </div>
      <div className="flex justify-center mt-10">
        <Button content="Realizar nueva búsqueda" onClick={handleClick} />
      </div>
    </>
  );
};
