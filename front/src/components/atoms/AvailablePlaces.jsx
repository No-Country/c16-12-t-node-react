import React from 'react';

export const AvailablePlaces = ({ numero }) => {
  return (
    <div className="border-solid border border-black p-4 rounded-md flex items-center w-40 h-10">
      <div className="text-2xl font-bold mr-4">{numero}</div>
      <div>Lugares libres</div>
    </div>
  );
};
