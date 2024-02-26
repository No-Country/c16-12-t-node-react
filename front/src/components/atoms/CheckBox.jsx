import React, { useState } from 'react';

const CheckBox = () => {

  const [idaChecked, setIdaChecked] = useState(false);
  const [idaYVueltaChecked, setIdaYVueltaChecked] = useState(false);

  const handleIdaChange = () => {
    if (!idaChecked) {
      setIdaChecked(true);
      setIdaYVueltaChecked(false);
    }
  };

  const handleIdaYVueltaChange = () => {
    if (!idaYVueltaChecked) {
      setIdaYVueltaChecked(true);
      setIdaChecked(false);
    }
  };

  return (
    <div>
      <label>
        <input
          type="checkbox"
          checked={idaChecked}
          onChange={handleIdaChange}
        />
        Ida
      </label>
      <br />
      <label>
        <input
          type="checkbox"
          checked={idaYVueltaChecked}
          onChange={handleIdaYVueltaChange}
        />
        Ida y vuelta
      </label>
    </div>
  );
};

export default CheckBox;