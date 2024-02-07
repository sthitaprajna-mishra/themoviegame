import React, { useState, useEffect } from "react";
import { useMyContext } from "../MyContext";

const filterAndSplitMovieName = (movieName) => {
  let splitParts = movieName.split(" ");
  //   console.log(splitParts);

  // remove additional spaces in between words
  splitParts = splitParts.filter((e) => e.trim() != "");
  //   console.log(splitParts);

  // store it as an array of arrays
  let multiArrays = [];
  splitParts.map((part) => multiArrays.push(part.split("")));
  //   console.log(multiArrays);

  let multiBoolArrays = [];

  // create a boolean array of arrays
  for (let i = 0; i < multiArrays.length; i++) {
    let tempArr = new Array(multiArrays[i].length).fill(false);
    // loop over each letter
    for (let j = 0; j < multiArrays[i].length; j++) {
      if (isVowel(multiArrays[i][j])) {
        tempArr[j] = true;
      }
    }
    multiBoolArrays.push(tempArr);
  }
  //   console.log(multiBoolArrays);

  return [multiArrays, multiBoolArrays];
};

const isVowel = (letter) => {
  return "aeiouAEIOU".indexOf(letter) != -1;
};

const Display = () => {
  const { movieName } = useMyContext();
  const [multiArrays, setMultiArrays] = useState([]);
  const [multiBoolArrays, setMultiBoolArrays] = useState([]);

  useEffect(() => {
    const [l1, l2] = filterAndSplitMovieName(movieName);
    setMultiArrays(l1);
    setMultiBoolArrays(l2);
  }, []);

  const numberOfWords = movieName.split(" ");
  const movieNameLength = movieName.length;
  const hideArray = new Array(movieNameLength);
  hideArray.fill(false);
  console.log("hideArray of length " + hideArray.length + " has been created.");

  return (
    <>
      <p>{movieName}</p>

      {multiArrays && multiArrays.length !== 0 ? (
        multiArrays.map((word, index1) => (
          <div key={index1}>
            {word.map((letter, index2) => {
              if (multiBoolArrays[index1][index2]) {
                return <span key={index2}>{letter + " "}</span>;
              } else {
                return <span key={index2}>{"@ "}</span>;
              }
            })}
          </div>
        ))
      ) : (
        <p>"processing..."</p>
      )}

      <div>Display</div>
    </>
  );
};

export default Display;
