import PropTypes from 'prop-types';
import { Header } from '../organims/Header';
import Footer from '../organims/Footer';
import { useShow } from '@/context/show.context';
import { ReserveModal } from '../modals/reserve.modal';

export const LayOut = ({ children }) => {
  const { show } = useShow();

  return (
    <>
      <Header />
      <div className="w-full h-[80px]"></div>
      <div className="w-full min-h-[calc(100vh-24rem)] px-1.5 md:container mx-auto">
        {children}
      </div>
      <Footer />
      {show && <ReserveModal />}
    </>
  );
};

LayOut.propTypes = {
  children: PropTypes.node.isRequired,
};
