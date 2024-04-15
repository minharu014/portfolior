import React from "react";
import { ReactTyped } from "react-typed";
import Profile from "../assets/picture.png";
import { FaAngleDoubleDown } from "react-icons/fa";

const Hero = () => {
  return (
    <div className="text-white">
      <div className="max-w-[800px] mt-[96xpx] w-full h-screen mx-auto text-center flex flex-col justify-center">
        <img className="h-60 bg-cover mx-auto mt-2" src={Profile} alt="/" />
        <p className="text-main font-bold p-2">Welcome to my portfolio!</p>
        <h1 className="md:text-5xl sm:text-4xl text-3xl font-bold md:py-6 text-main">
          Haru Tran 하루
        </h1>
        <div className="flex justify-center items-center">
          <p className="md:text-4xl sm:text-3xl text-xl font-bold py-4">
            I create
          </p>
          <ReactTyped
            className="md:text-4xl sm:text-3xl text-xl font-bold pl-2"
            strings={[
              "responsive designs",
              "intuitive interfaces",
              "interactive UX",
            ]}
            typeSpeed={70}
            backSpeed={140}
            loop
          />
        </div>
        <p className="md:text-2l text-l font-bold md:pl-4 text-gray-500 mx-1">
          Born and raised in Sweden, Eager to excel in software engineering and
          learn modern FE techniques!<br></br>I speak Swedish, English & Korean
        </p>
        <a href="#mid" className="my-6 mx-auto py-3">
          <FaAngleDoubleDown className="fill-main stroke-white" />
        </a>
      </div>
    </div>
  );
};

export default Hero;
