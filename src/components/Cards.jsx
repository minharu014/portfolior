import React, { useState, useEffect } from "react";
import Project from "./project";

const Cards = () => {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    fetch(
      "https://raw.githubusercontent.com/minharu014/portfolior/master/src/assets/projects.json"
    )
      .then((response) => response.json())
      .then((data) => {
        setProjects(data.project);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);

  return (
    <div className="w-full py-[10rem] px-4 bg-white">
      <div className="max-w-[1240px] mx-auto grid md:grid-cols-3 gap-5">
        {projects.map((project, index) => (
          <Project
            key={index}
            image={project.image}
            altText={project.altText}
            title={project.title}
            subtitle={project.subtitle}
            url={project.url}
          />
        ))}
      </div>
    </div>
  );
};

export default Cards;
