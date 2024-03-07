import { createContext, useContext, useState } from 'react';
import PropTypes from 'prop-types';

const ShowContext = createContext();

function ShowProvider({ children }) {
  const [show, setShow] = useState(false);
  const [stateId, setStateId] = useState('');

  function handleShow() {
    setShow(!show);
  }

  const getID = (id) => {
    setStateId(id);
  };

  return (
    <ShowContext.Provider value={{ show, stateId, getID, handleShow }}>
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
