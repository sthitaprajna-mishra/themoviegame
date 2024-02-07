import React from "react";
import Home from "./home/Home";
import { useMyContext } from "./MyContext";
import Arena from "./arena/Arena";
import Signature from "./Signature";

const Container = () => {
  // CONTEXT
  const { movieName } = useMyContext();
  return (
    <>
      <Signature />
      {movieName == "" ? (
        <Home />
      ) : (
        <>
          <Arena />
        </>
      )}
    </>
  );
};

export default Container;
