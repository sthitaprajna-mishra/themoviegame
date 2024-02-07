import React, { useState } from "react";
import { MyContext } from "./MyContext";

// Step 2: Create a provider component
const MyProvider = ({ children }) => {
  const [movieName, setMovieName] = useState("");
  const [truthArray, setTruthArray] = useState([]);
  const [valueArray, setValueArray] = useState([]);

  const updateMovieName = (newMovieName) => {
    setMovieName(newMovieName);
  };

  return (
    <MyContext.Provider
      value={{
        movieName,
        updateMovieName,
        valueArray,
        setValueArray,
        truthArray,
        setTruthArray,
      }}
    >
      {children}
    </MyContext.Provider>
  );
};

export default MyProvider;
