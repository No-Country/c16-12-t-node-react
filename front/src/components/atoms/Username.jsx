import PropTypes from 'prop-types';

export const UserName = ({ username }) => {
  return <p>{username}</p>;
};

UserName.propTypes = {
  username: PropTypes.string,
};
