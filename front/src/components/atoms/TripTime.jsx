import React from 'react';
import { FaClock } from 'react-icons/fa';

export const TripTime = ({ time }) => {
  return (
    <div className="flex items-center">
      <FaClock className="mr-2" />
      <p>{`Hora de salida: ${time}`}</p> 
    </div>
  );
};
