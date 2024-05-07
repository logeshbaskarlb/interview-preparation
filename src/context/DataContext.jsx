import React, { createContext, useState } from "react";

const DataContext = createContext();

export const UseData = ({ children }) => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const handleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
  };

  return (
    <DataContext.Provider value={{ isDarkMode, handleDarkMode }}>
      {children}
    </DataContext.Provider>
  );
};


export default DataContext;
