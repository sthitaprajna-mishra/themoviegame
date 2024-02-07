import React from "react";
import Home from "./home/Home";
import { useMyContext } from "./MyContext";
import Arena from "./arena/Arena";

const Container = () => {
  // CONTEXT
  const { movieName } = useMyContext();
  return (
    <>
      <div className="px-2">
        {movieName == "" ? (
          <Home />
        ) : (
          <>
            <Arena />
          </>
        )}
      </div>
    </>
  );
};

export default Container;
