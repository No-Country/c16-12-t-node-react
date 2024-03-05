import PropTypes from 'prop-types';

export const DataContent = ({ icon, aperture, description }) => (
  <div className="flex justify-start items-center space-x-2">
    <span>{icon}</span>
    <p className="text-lg text-gray-600 space-x-2">
      {aperture && <span className="font-semibold">{aperture}</span>}
      <span className="font-regular">{description}</span>
    </p>
  </div>
);

DataContent.propTypes = {
  icon: PropTypes.node,
  aperture: PropTypes.string,
  description: PropTypes.string,
};
