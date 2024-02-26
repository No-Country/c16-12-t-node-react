import React from 'react';

import TripTime from './components/atoms/TripTime';

const App = () => {
  const currentTime = '20:30';
  
  return (
    <div>
      <TripTime time={currentTime} />
    </div>
  );
};

export default App;