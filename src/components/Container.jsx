import React from "react";
import Home from "./home/Home";
import Keys from "./arena/Keys";
import { useMyContext } from "./MyContext";

const Container = () => {
  // CONTEXT
  const { movieName } = useMyContext();
  return (
    <>
      <div className="px-2">{movieName == "" ? <Home /> : <Keys />}</div>
    </>
  );
};

export default Container;
