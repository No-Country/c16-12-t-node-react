
import { FaClock } from 'react-icons/fa';

export const TripTime = ({ time }) => {
  return (
    <div style={{ display: 'flex', alignItems: 'center' }}>
      <FaClock />
        
      <span className='ml-1' >Hora de salida</span>
      <span className='font-extralight ml-1' >{time}</span>
    </div>
  );
};


