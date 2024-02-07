import React, { useEffect } from "react";
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
  const {
    movieName,
    valueArray,
    setValueArray,
    truthArray,
    setTruthArray,
    guessArray,
    setGuessArray,
  } = useMyContext();
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

  console.log("User guesses: " + guessArray);
  console.log(truthArray);

  return (
    <div className="flex w-fit overflow-hidden border-1 border-red-600">
      <div className="text-center border-1 border-red-500">
        {valueArray && valueArray.length !== 0 ? (
          valueArray.map((word, index1) => (
            <span
              key={index1}
              className="flex items-center justify-center font-semibold p-2 ml-0.5 mb-0.5 lg:inline border-1 border-red-500"
            >
              <span className="mr-2">
                {word.map((letter, index2) => {
                  if (truthArray[index1][index2]) {
                    return (
                      <span className="mx-2 text-2xl" key={index2}>
                        {letter}
                      </span>
                    );
                  } else {
                    return (
                      <span
                        className="mx-2 px-1 lg:px-4 border-b-2 text-white border-b-black"
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
                <span className="font-bold text-gray-500 text-xl">/</span>
              )}
            </span>
          ))
        ) : (
          <p>"processing..."</p>
        )}
      </div>
    </div>
  );
};

export default Display;
