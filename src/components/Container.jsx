import React from "react";
import Home from "./home/Home";
import Keys from "./arena/Keys";
import { useMyContext } from "./MyContext";
import Display from "./arena/Display";

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
            <Display />
            <Keys />
          </>
        )}
      </div>
    </>
  );
};

export default Container;
