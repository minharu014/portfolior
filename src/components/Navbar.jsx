import React, { useState } from "react";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";

function Navbar() {
  const [nav, setNav] = useState(false);

  const handleNav = () => {
    setNav(!nav);
  };

  return (
    <div className="flex justify-between  items-center h-24 max-w-[1240px] mx-auto px-4 text-white">
      <h1 className="w-full text-3xl font-bold text-main">Haru Tran 하루</h1>
      <ul className="hidden md:flex">
        <li className="p-4">
          <a href="#projects">Projects</a>
        </li>
        <li className="p-4">
          <a href="#mid">Linkedin</a>
        </li>
        <li className="p-4">
          <a href="#mid">GitHub</a>
        </li>
      </ul>
      {/* Small Screen - Menu */}
      <div onClick={handleNav} className="block md:hidden">
        {nav ? <AiOutlineClose size={20} /> : <AiOutlineMenu size={20} />}
      </div>
      <div
        className={
          nav
            ? "absolute left-0 top-0 w-[60%] h-full border-r border-r-gray-900 bg-[#000300] ease-in-out duration-500"
            : "fixed left-[-100%] top-0 ease-in-out duration-500"
        }
      >
        <div className="w-full text-3xl font-bold m-8 flex justify-evenly">
          <h1 className="text-main">Haru Tran</h1>
          <div onClick={handleNav}>
            <AiOutlineClose size={20} />
          </div>
        </div>
        <ul className="uppercase p-4">
          <li className="p-4 border-b border-gray-600">
            {" "}
            <a href="#projects">Projects</a>
          </li>{" "}
          <li className="p-4 border-b border-gray-600">
            {" "}
            <a href="#mid">Linkedin</a>
          </li>{" "}
          <li className="p-4">
            {" "}
            <a href="#mid">GitHub</a>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Navbar;
