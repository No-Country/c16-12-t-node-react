import React from 'react';
import { FaClock } from 'react-icons/fa';

const TripTime = ({ time }) => {
  return (
    <div style={{ display: 'flex', alignItems: 'center' }}>
      <FaClock style={{ marginRight: '10px' }} />
      <p>{`Hora de salida: ${time}`}</p> 
    </div>
  );
};

export default TripTime;
