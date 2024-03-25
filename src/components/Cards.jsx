import React, { useState } from "react";
import Single from "../assets/single.png";
import Double from "../assets/double.png";
import Triple from "../assets/triple.png";

const Cards = () => {
  const [projects, setProjects] = useState([
    {
      image: "image_url_here",
      altText: "description_of_image_here",
      title: "title_here",
      subtitle: "subtitle_here",
    },
  ]);
  return (
    <div className="w-full py-[10rem] px-4 bg-white">
      {projects.map((project) => {
        console.log(project);
        return (
          <Project
            image={project.image}
            altText={project.altText}
            title={project.title}
            subtitle={project.subtitle}
          />
        );
      })}
      <div className="max-w-[1240px] mx-auto grid md:grid-cols-2 gap-8">
        <div className="w-full shadow-xl flex flex-col p-4 my-4 rounded-lg hover:scale-105 duration-300 border">
          <img className="mb-2" src={Single} alt="/" />
          <div className="rounded-lg p-4 bg-main flex flex-col">
            <div>
              <h4 className="text-white text-2xl font-bold leading-none ">
                test hemsida
              </h4>
              <span className="text-xs text-gray-200 leading-none">span</span>
            </div>
            <div className="flex items-center">
              <div className="text-lg text-white font-light">234</div>
            </div>
          </div>
        </div>
        <div className="w-full shadow-xl flex flex-col p-4 my-4 rounded-lg hover:scale-105 duration-300">
          <img
            className="w-20 mx-auto mt-[-3rem] bg-white"
            src={Single}
            alt="/"
          />
          <h2 className="text-2xl font-bold text-center py-8">Single User</h2>
          <p className="text-center text-4xl font-bold">100 SEK</p>
          <div className="text-center font-medium">
            <p className="py-2 border-b mx-8 mt-8">100 gratisspins</p>
            <p className="py-2 border-b mx-8">30 rolls</p>
            <p className="py-2 border-b mx-8">2 månader</p>
          </div>
          <button className="bg-main w-[200px] rounded-md font-medium my-6 mx-auto py-3 text-black">
            Start
          </button>
        </div>
        <div className="w-full shadow-xl flex flex-col p-4 my-4 rounded-lg hover:scale-105 duration-300">
          <img
            className="w-20 mx-auto mt-[-3rem] bg-white"
            src={Double}
            alt="/"
          />
          <h2 className="text-2xl font-bold text-center py-8">Single User</h2>
          <p className="text-center text-4xl font-bold">200 SEK</p>
          <div className="text-center font-medium">
            <p className="py-2 border-b mx-8 mt-8">100 gratisspins</p>
            <p className="py-2 border-b mx-8">30 rolls</p>
            <p className="py-2 border-b mx-8">2 månader</p>
          </div>
          <button className="bg-main w-[200px] rounded-md font-medium my-6 mx-auto py-3 text-black">
            Start
          </button>
        </div>
        <div className="w-full shadow-xl flex flex-col p-4 my-4 rounded-lg hover:scale-105 duration-300">
          <img
            className="w-20 mx-auto mt-[-3rem] bg-white"
            src={Triple}
            alt="/"
          />
          <h2 className="text-2xl font-bold text-center py-8">Single User</h2>
          <p className="text-center text-4xl font-bold">500 SEK</p>
          <div className="text-center font-medium">
            <p className="py-2 border-b mx-8 mt-8">1000 gratisspins</p>
            <p className="py-2 border-b mx-8">330 rolls</p>
            <p className="py-2 border-b mx-8">12 månader</p>
          </div>
          <button className="bg-main w-[200px] rounded-md font-medium my-6 mx-auto py-3 text-black">
            Start
          </button>
        </div>
      </div>
    </div>
  );
};

export default Cards;
