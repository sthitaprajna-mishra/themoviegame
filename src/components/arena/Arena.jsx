import React from "react";
import Display from "./Display";
import Keys from "./Keys";
import CounterBoard from "./CounterBoard";

const Arena = () => {
  return (
    <div className="flex flex-col items-center justify-between py-6 h-screen">
      <CounterBoard />
      <Display />
      <Keys />
    </div>
  );
};

export default Arena;
