import { useState } from 'react';

export const CheckBox = () => {

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
    <div className="flex items-center">
      <label className="flex items-center mr-4">
        <input
          type="checkbox"
          checked={idaChecked}
          onChange={handleIdaChange}
          className="rounded-full mr-2"
        />
        IDA
      </label>
      <label className="flex items-center">
        <input
          type="checkbox"
          checked={idaYVueltaChecked}
          onChange={handleIdaYVueltaChange}
          className="rounded-full mr-2"
        />
        IDA Y VUELTA
      </label>
    </div>
  );
};
