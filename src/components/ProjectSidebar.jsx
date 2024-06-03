import React from "react";
import Button from "./Button";

const ProjectSidebar = ({ onStartAddProject, project }) => {
  return (
    <aside className="w-full md:w-1/3 px-8 py-16 bg-stone-900 text-stone-50 rounded-r-xl flex flex-col items-center md:items-start">
      <div className="w-full flex items-center justify-between mb-8">
        <h2 className="font-bold uppercase text-xl text-stone-200">
          Your Projects
        </h2>
        <Button
          onClick={onStartAddProject}
          className="w-12 h-12 bg-blue-500 hover:bg-blue-700 text-white font-bold text-lg flex items-center justify-center rounded-full transition duration-300 ease-in-out transform hover:scale-105"
        >
          +
        </Button>
      </div>
      <ul className="w-full flex-grow space-y-4">
        {project.map((project) => (
          <li
            key={project.id}
            className="flex items-center p-4  bg-stone-800 rounded-lg shadow-sm hover:shadow-lg transition-shadow duration-300 ease-in-out"
          >
            <button className="flex-grow text-left p-4 text-sm font-medium text-white border-l-4 border-blue-500 hover:border-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-300 transition-all duration-300 ease-in-out">
              {project.title}
            </button>
          </li>
        ))}
      </ul>
    </aside>
  );
};

export default ProjectSidebar;
