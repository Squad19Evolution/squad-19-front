import { createContext, useEffect, useState } from 'react';
// import { data } from '../data/data';

export const GlobalContext = createContext({});

export const GlobalProvider = (props: { children: any }) => {
  const [paths, setPaths] = useState([]);

  useEffect(() => {
    fetchPaths();
  }, []);

  const fetchPaths = async () => {
    const response = await fetch(`http://localhost:3000/path`);
    const data = await response.json();

    setPaths(data);
  };

  return (
    <GlobalContext.Provider
      value={{
        paths,
      }}>
      {props.children}
    </GlobalContext.Provider>
  );
};
