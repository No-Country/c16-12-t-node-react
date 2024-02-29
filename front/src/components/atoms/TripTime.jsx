
import { FaClock } from 'react-icons/fa';
import PropTypes from 'prop-types';

export const TripTime = ({ time }) => {
  return (
    <div className="flex items-center">
      <FaClock className="mr-2" />
      <p>{`Hora de salida: ${time}`}</p> 
    </div>
  );
};

TripTime.propTypes = {
  time: PropTypes.number
}


