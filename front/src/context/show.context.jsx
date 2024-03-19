import { createContext, useContext, useState } from 'react';
import PropTypes from 'prop-types';

const ShowContext = createContext();

function ShowProvider({ children }) {
  const [show, setShow] = useState(false);
  const [showCancelModel, setShowCancelModel] = useState(false);
  const [stateId, setStateId] = useState('');

  function handleShow() {
    setShow(!show);
  }

  function handleCancelTrip() {
    setShowCancelModel(!showCancelModel);
  }

  const getID = (id) => {
    setStateId(id);
  };

  return (
    <ShowContext.Provider
      value={{
        show,
        stateId,
        showCancelModel,
        getID,
        handleShow,
        handleCancelTrip,
      }}
    >
      {children}
    </ShowContext.Provider>
  );
}

function useShow() {
  return useContext(ShowContext);
}

export { useShow, ShowProvider };

ShowProvider.propTypes = {
  children: PropTypes.node,
};
