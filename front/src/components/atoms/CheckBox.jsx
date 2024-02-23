import React, { useState } from 'react';

const CheckBox = () => {
  // Definición de estados para los checkboxes
  const [idaChecked, setIdaChecked] = useState(false);
  const [idaYVueltaChecked, setIdaYVueltaChecked] = useState(false);

  // Manejador de cambio para el checkbox de IDA
  const handleIdaChange = () => {
    // Verificar si el checkbox de IDA no está marcado
    if (!idaChecked) {
      // Marcar el checkbox de IDA y desmarcar el checkbox de IDA Y VUELTA
      setIdaChecked(true);
      setIdaYVueltaChecked(false);
    }
  };

  // Manejador de cambio para el checkbox de IDA Y VUELTA
  const handleIdaYVueltaChange = () => {
    // Verificar si el checkbox de IDA Y VUELTA no está marcado
    if (!idaYVueltaChecked) {
      // Marcar el checkbox de IDA Y VUELTA y desmarcar el checkbox de IDA
      setIdaYVueltaChecked(true);
      setIdaChecked(false);
    }
  };

  // Renderizar los checkboxes
  return (
    <div>
      {/* Checkbox para seleccionar solo IDA */}
      <label>
        <input
          type="checkbox"
          checked={idaChecked}
          onChange={handleIdaChange} // Manejador de cambio para el checkbox de IDA
        />
        IDA
      </label>
      <br />
      {/* Checkbox para seleccionar solo IDA Y VUELTA */}
      <label>
        <input
          type="checkbox"
          checked={idaYVueltaChecked}
          onChange={handleIdaYVueltaChange} // Manejador de cambio para el checkbox de IDA Y VUELTA
        />
        IDA Y VUELTA
      </label>
    </div>
  );
};

export default CheckBox;