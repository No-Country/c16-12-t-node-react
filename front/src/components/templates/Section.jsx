import PropTypes from 'prop-types';

export const Section = ({ children }) => {
  return <div className="my-16">{children}</div>;
};

Section.propTypes = {
  children: PropTypes.node.isRequired,
};
