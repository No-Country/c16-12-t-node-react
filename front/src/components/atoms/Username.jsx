import PropTypes from 'prop-types';

export const UserName = ({ username, size }) => {
  const usernameClass = {
    small: 'text-lg',
    medium: 'text-xl',
    large: 'text-2xl',
  };

  const classAplicable = size ? usernameClass[size] : 'text-lg';

  return (
    <p className={`text-gray-900 font-semibold ${classAplicable}`}>
      {username}
    </p>
  );
};

UserName.propTypes = {
  username: PropTypes.string,
  size: PropTypes.oneOf(['small', 'medium', 'large']),
};
