
import { FaClock } from 'react-icons/fa';
import PropTypes from 'prop-types'

export const TripTime = ({ time }) => {
  return (
    <div className="flex items-center">
      <FaClock className="mr-2" />
      <p>{`Hora de salida: ${time}`}</p> 
    </div>
  );
};
<<<<<<< HEAD


=======
>>>>>>> 6b8924dbd659cadc87bb9d96e8b6f2fd8a29ea4c
