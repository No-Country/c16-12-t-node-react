import PropTypes from 'prop-types';

export const Section = ({ children }) => {
  return <section className="my-16">{children}</section>;
};

Section.propTypes = {
  children: PropTypes.node.isRequired,
};
