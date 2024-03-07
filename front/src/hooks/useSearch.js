import { useState } from 'react';

export const useSearch = (initialValues) => {
  const [search, setSearch] = useState(initialValues);

  const getProps = (props) => {
    setSearch(props);
  };

  return { search, getProps };
};
