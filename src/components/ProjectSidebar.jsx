import React from "react";
import Button from "./Button";

const ProjectSidebar = ({ onStartAddProject, project }) => {
  return (
    <aside className="w-full md:w-1/3 px-8 py-16 bg-stone-900 text-stone-50 rounded-r-xl flex flex-col items-center md:items-start">
      <h2 className="mb-8 font-bold uppercase text-xl text-stone-200">
        Your Projects
      </h2>
      <div className="w-full mb-8">
        <Button
          onClick={onStartAddProject}
          className="w-full bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded transition duration-300 ease-in-out transform hover:scale-105"
        >
          + Add Projects
        </Button>
      </div>
      <ul className="w-full flex-grow">
        {project.map((project) => (
          <li>{project.title}</li>
        ))}
      </ul>
    </aside>
  );
};

export default ProjectSidebar;
