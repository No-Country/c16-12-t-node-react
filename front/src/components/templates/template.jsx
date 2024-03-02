import PropTypes from 'prop-types';
import { Header } from '../organims/Header';
import Footer from '../organims/Footer';

export const LayOut = ({ children }) => {
  return (
    <>
      <Header />
      <div className="w-full min-h-[calc(100vh-300px)] px-1.5 md:container mx-auto py-9">
        {children}
      </div>
      <Footer />
    </>
  );
};

LayOut.propTypes = {
  children: PropTypes.node.isRequired,
};
