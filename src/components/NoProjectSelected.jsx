import React from "react";
import Button from "./Button";

const NoProjectSelected = ({ onStartAddProject }) => {
  return (
    <div>
      <h1>No Project Selected</h1>
      <p>
        <Button onClick={onStartAddProject}>Add Project</Button>
      </p>
    </div>
  );
};

export default NoProjectSelected;
