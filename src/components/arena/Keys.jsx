import React from "react";

const Keys = () => {
  // PLAY ARENA
  const alphabet = "abcdefghijklmnopqrstuvwxyz".toUpperCase().split("");
  console.log(alphabet);

  return (
    <>
      <div className="flex justify-center my-2 mx-auto gap-2 lg:w-1/2 flex-wrap border border-orange-500">
        {alphabet.map((item, index) => {
          return (
            <div
              key={index}
              className="font-semibold py-2 px-2 w-[3rem] rounded text-center transition-all border border-gray-700 hover:cursor-pointer hover:bg-white hover:text-gray-700 bg-gray-700 text-white"
            >
              {item}
            </div>
          );
        })}
        <div className="font-semibold py-2 px-8 rounded text-center transition-all border border-gray-700 hover:cursor-pointer hover:bg-white hover:text-gray-700 bg-gray-700 text-white">
          Enter
        </div>
      </div>
    </>
  );
};

export default Keys;
