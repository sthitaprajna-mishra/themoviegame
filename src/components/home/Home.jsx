import { useState } from "react";

import { useMyContext } from "../MyContext";

const Home = () => {
  // HOMEPAGE
  const { updateMovieName, movieIndustry, setMovieIndustry } = useMyContext();
  const [userInput, setUserInput] = useState("");

  const handleMovieIndustry = (industry) => {
    console.log(industry);
    setMovieIndustry(industry);
  };

  const submitMovieName = () => {
    console.log("Clicking me!");
    if (userInput == null || userInput.trim() == "") return;
    updateMovieName(userInput);
  };

  const handleUserInput = (e) => {
    if (e.key == "Enter") {
      submitMovieName();
    }
    // setUserInput(e.target.value.toUpperCase());
  };

  return (
    <div className="flex items-center justify-center h-screen">
      <div className="px-4 space-y-6">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-semibold">The Movie Game</h1>
        </div>
        <div className="text-2xl lg:text-xl mb-3 border border-gray-400">
          <input
            type="text"
            className="outline-none p-2"
            value={userInput}
            onKeyDown={(e) => handleUserInput(e)}
            onChange={(e) => setUserInput(e.target.value.toUpperCase())}
          />
        </div>
        <div className="flex justify-around">
          <div>
            <input
              type="radio"
              value="Hollywood"
              checked={movieIndustry == "Hollywood"}
              onChange={handleMovieIndustry}
            />{" "}
            Hollywood
          </div>
          <div>
            <input
              type="radio"
              value="Bollywood"
              checked={movieIndustry == "Bollywood"}
              onChange={() => handleMovieIndustry("Bollywood")}
            />{" "}
            Bollywood
          </div>
        </div>
        <div
          className="bg-green-400 w-1/3 mx-auto rounded text-center text-white font-bold py-2 transition-all hover:cursor-pointer"
          onClick={submitMovieName}
        >
          <h1>Submit</h1>
        </div>
      </div>
    </div>
  );
};

export default Home;
