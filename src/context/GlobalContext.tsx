import { createContext, useEffect, useState } from 'react';
// import { data } from '../data/data';

const initialState = {
  paths: [
    {
      id: 0,
      name: 'name',
      description: 'description',
      contents: [],
    },
  ],
};

export const GlobalContext = createContext(initialState);

export const GlobalProvider = (props: { children: any }) => {
  const [paths, setPaths] = useState([]);

  useEffect(() => {
    fetchPaths();
  }, []);

  const fetchPaths = async () => {
    const response = await fetch(
      `https://infinite-citadel-30300.herokuapp.com/path`,
    );
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
