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
  const { movieName, valueArray, setValueArray, truthArray, setTruthArray } =
    useMyContext();
  //   const [multiArrays, setMultiArrays] = useState([]);
  //   const [multiBoolArrays, setMultiBoolArrays] = useState([]);

  useEffect(() => {
    const [l1, l2] = filterAndSplitMovieName(movieName);
    setValueArray(l1);
    // setMultiBoolArrays(l2);
    setTruthArray(l2);
  }, []);

  const movieNameLength = movieName.length;
  const hideArray = new Array(movieNameLength);
  hideArray.fill(false);
  console.log("hideArray of length " + hideArray.length + " has been created.");

  return (
    <>
      <p>{movieName}</p>

      <div className="text-center border-1 border-red-500">
        {valueArray && valueArray.length !== 0 ? (
          valueArray.map((word, index1) => (
            <span className="text-3xl block lg:inline border-1 border-red-500">
              <span className="mr-2" key={index1}>
                {word.map((letter, index2) => {
                  if (truthArray[index1][index2]) {
                    return (
                      <span className="mx-2" key={index2}>
                        {letter}
                      </span>
                    );
                  } else {
                    return (
                      <span
                        className="mx-2 px-4 border-b-2 text-white border-b-black"
                        key={index2}
                      >
                        {""}
                      </span>
                    );
                  }
                })}
              </span>
              {index1 == valueArray.length - 1 ? (
                <></>
              ) : (
                <span className="font-bold text-gray-500 text-5xl">/</span>
              )}
            </span>
          ))
        ) : (
          <p>"processing..."</p>
        )}
      </div>

      <div>Display</div>
    </>
  );
};

export default Display;
