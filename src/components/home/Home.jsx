import { useState } from "react";

const Home = () => {
  // HOMEPAGE
  const [movieName, setMovieName] = useState("");

  return (
    <div className="flex items-center justify-center h-screen">
      <div className="px-4">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-semibold">The Movie Game</h1>
        </div>
        <div className="text-2xl mb-3 border border-gray-400">
          <input
            type="text"
            className="outline-none p-2"
            value={movieName}
            onChange={(e) => setMovieName(e.target.value.toUpperCase())}
          />
        </div>
        <div className="bg-green-400 w-1/3 mx-auto rounded text-center text-white font-bold py-2 transition-all hover:cursor-pointer">
          <h1>Submit</h1>
        </div>
      </div>
    </div>
  );
};

export default Home;
