import React from "react";
import { ReactTyped } from "react-typed";

const Hero = () => {
  return (
    <div className="text-white">
      <div className="max-w-[800px] mt-[96xpx] w-full h-screen mx-auto text-center flex flex-col justify-center">
        <p className="text-[#00df9a] font-bold p-2">THE BEST APP</p>
        <h1 className="md:text-7xl sm:text-6xl text-4xl font-bold md:py-6">
          Connecting the people
        </h1>
        <div className="flex justify-center items-center">
          <p className="md:text-5xl sm:text-4xl text-xl font-bold py-4">
            Join us and make new
          </p>
          <ReactTyped
            className="md:text-5xl sm:text-4xl text-xl font-bold pl-2"
            strings={["friends", "relationship", "buddies"]}
            typeSpeed={70}
            backSpeed={140}
            loop
          />
        </div>
        <p className="md:text-2xl text-xl font-bold md:pl-4 text-gray-500">
          Lorem, ipsum dolor ssit amet consectetur adipisicing elit. Itaque{" "}
        </p>
        <button className="bg-[#00df9a] w-[200px] rounded-md font-medium my-6 mx-auto py-3 text-black">
          Get Started
        </button>
      </div>
    </div>
  );
};

export default Hero;
