import { createContext, useEffect, useState } from 'react';

const initialState = {
  paths: [
    {
      id: 0,
      name: 'name',
      description: 'description',
      contents: [],
    },
  ],
  handleComplete: null,
  handleNotFinished: null,
  completedContents: [],
};

export const GlobalContext = createContext(initialState);

export const GlobalProvider = (props: { children: any }) => {
  const [paths, setPaths] = useState([]);
  const [completedContents, setCompletedContents] = useState([]);

  useEffect(() => {
    fetchPaths();
  }, []);

  const handleComplete = (content) => {
    setCompletedContents([...completedContents, content]);
  };

  const handleNotFinished = (content) => {
    setCompletedContents(
      completedContents.filter((el) => el.id !== content.id),
    );
  };

  const fetchPaths = async () => {
    const response = await fetch(
      // o Heroku deixou de ser gratuito no dia 28/11. Modifiquei a request para localhost.
      `http://localhost:3000/path`,
    );
    const data = await response.json();

    setPaths(data);
  };

  return (
    <GlobalContext.Provider
      value={{
        paths,
        handleComplete,
        handleNotFinished,
        completedContents,
      }}>
      {props.children}
    </GlobalContext.Provider>
  );
};
