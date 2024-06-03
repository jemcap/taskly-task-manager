import React from "react";
import Button from "./Button";
import NoProjectImg from "../assets/logo.png";

const NoProjectSelected = ({ onStartAddProject }) => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-4">
      <img
        src={NoProjectImg}
        alt="No Project Selected"
        className="w-1/2 md:w-1/4 mb-8"
      />
      <h1 className="text-2xl font-bold mb-4 text-gray-800">
        No Project Selected
      </h1>
      <p className="text-gray-600 mb-4 text-center">
        Click on 'Create a new Project' to get started
      </p>
      <div className="text-center">
        <Button
          onClick={onStartAddProject}
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded transition duration-300 ease-in-out transform hover:scale-105"
        >
          Create a new Project
        </Button>
      </div>
    </div>
  );
};

export default NoProjectSelected;
