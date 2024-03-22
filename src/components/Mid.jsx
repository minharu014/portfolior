import React from "react";
import Laptop from "../assets/laptop.jpg";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";

const Mid = () => {
  return (
    <div className="w-full bg-white py-16 px-4">
      <div className="max-w-[1240px] mx-auto grid md:grid-cols-2">
        <img className="w-[500px] mx-auto my-4" src={Laptop} alt="/" />
        <div className="flex flex-col justify-center">
          <p className="text-main font-bold">GITHUB & LINKEDIN</p>
          <h1 className="md:text-3xl sm:text-2xl text-2xl font-bold py-2">
            Connect with me!
          </h1>
          <div className="bg-black text-main w-[200px] rounded-md font-medium my-2 mx-auto md:mx-0 py-3 relative flex items-center justify-center">
            <FaGithub size={30} className="absolute left-4" />
            <span>GitHub</span>
          </div>
          <div className="bg-black text-main w-[200px] rounded-md font-medium my-2 mx-auto md:mx-0 py-3 relative flex items-center justify-center">
            <FaLinkedinIn size={30} className="absolute left-4" />
            <span>LinkedIn</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Mid;
