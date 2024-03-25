import React from "react";
import MacBook from "../assets/macbook_blank.png";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";

const Mid = () => {
  return (
    <div className="w-full bg-white py-16 px-4">
      <div className="max-w-[1240px] mx-auto grid md:grid-cols-2">
        <img className="w-[500px] mx-auto my-4" src={MacBook} alt="/" />
        <div className="flex flex-col justify-center">
          <p className="text-main font-bold">GITHUB & LINKEDIN</p>
          <h1 className="md:text-3xl sm:text-2xl text-2xl font-bold py-2">
            Connect with me!
          </h1>
          <a
            href="https://github.com/minharu014"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-black text-main w-[200px] rounded-md font-medium my-2 mx-auto md:mx-0 py-3 relative flex items-center justify-center"
          >
            <FaGithub size={30} className="absolute left-4" />
            <span>GitHub</span>
          </a>
          <a
            href="https://www.linkedin.com/in/harutran/"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-black text-main w-[200px] rounded-md font-medium my-2 mx-auto md:mx-0 py-3 relative flex items-center justify-center"
          >
            <FaLinkedinIn size={30} className="absolute left-4" />
            <span>LinkedIn</span>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Mid;
