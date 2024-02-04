import React, { useState } from "react";
import { MyContext } from "./MyContext";

// Step 2: Create a provider component
const MyProvider = ({ children }) => {
  const [movieName, setMovieName] = useState("");

  const updateMovieName = (newMovieName) => {
    setMovieName(newMovieName);
  };

  return (
    <MyContext.Provider value={{ movieName, updateMovieName }}>
      {children}
    </MyContext.Provider>
  );
};

export default MyProvider;
