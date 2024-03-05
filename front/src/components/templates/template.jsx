import PropTypes from 'prop-types';
import { Header } from '../organims/Header';
import Footer from '../organims/Footer';

export const LayOut = ({ children }) => {
  return (
    <>
      <Header />
      <div className="w-full h-[80px]"></div>
      <div className="w-full min-h-[calc(100vh-24rem)] px-1.5 md:container mx-auto">
        {children}
      </div>
      <Footer />
    </>
  );
};

LayOut.propTypes = {
  children: PropTypes.node.isRequired,
};
