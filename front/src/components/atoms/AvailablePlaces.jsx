import React from 'react';

const AvailablePlaces = ({ numero }) => {
  return (
    <div style={{ border: '1px solid #000', padding: '10px', borderRadius: '5px', display: 'flex', alignItems: 'center' }}>
      <div style={{ fontSize: '24px', fontWeight: 'bold', marginRight: '10px' }}>{numero}</div>
      <div>Lugares libres</div>
    </div>
  );
};

export default AvailablePlaces;