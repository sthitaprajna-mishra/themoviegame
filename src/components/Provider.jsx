import React, { useState } from "react";
import { MyContext } from "./MyContext";

// Step 2: Create a provider component
const MyProvider = ({ children }) => {
  const [movieName, setMovieName] = useState("");
  const [truthArray, setTruthArray] = useState([]);
  const [valueArray, setValueArray] = useState([]);
  const [chances, setChances] = useState(9);

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
        chances,
        setChances,
      }}
    >
      {children}
    </MyContext.Provider>
  );
};

export default MyProvider;
