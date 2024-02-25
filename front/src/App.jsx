import React from 'react';

import LugaresLibres from './components/atoms/AvailablePlaces';

const App = () => {
  return (
    <div>
      <LugaresLibres numero={5} />
    </div>
  );
};

export default App;