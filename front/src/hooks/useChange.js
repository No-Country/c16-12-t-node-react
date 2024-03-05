import { useState } from 'react';

export const useChange = (initialValues) => {
  const [state, setState] = useState(initialValues);

  const handleChange = (e) => {
    const { name, type, value, checked } = e.target;
    setState((prevState) => ({
      ...prevState,
      [name]:
        type === 'checkbox'
          ? checked
          : type === 'number'
            ? parseFloat(value)
            : type === 'select-one'
              ? value
              : value,
    }));
  };

  return { state, handleChange };
};
