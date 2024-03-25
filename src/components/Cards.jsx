import React, { useState, useEffect } from "react";
import Project from "./project";
import projectData from "../assets/projects.json";

const Cards = () => {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    setProjects(projectData.project);
  }, []);

  return (
    <div className="w-full py-[10rem] px-4 bg-white">
      <div className="max-w-[1240px] mx-auto grid md:grid-cols-2 gap-8">
        {projects.map((project, index) => (
          <Project
            key={index} // It's better to use unique keys, e.g., project.id if available
            image={project.image}
            altText={project.altText}
            title={project.title}
            subtitle={project.subtitle}
          />
        ))}
      </div>
    </div>
  );
};

export default Cards;
