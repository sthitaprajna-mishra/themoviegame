import React from "react";
import { useMyContext } from "../MyContext";

const Display = () => {
  const { movieName } = useMyContext();
  const numberOfWords = movieName.split(" ");
  const movieNameLength = movieName.length;
  const hideArray = new Array(movieNameLength);
  hideArray.fill(false);
  console.log("hideArray of length " + hideArray.length + " has been created.");

  return (
    <>
      <div>Display</div>
    </>
  );
};

export default Display;
