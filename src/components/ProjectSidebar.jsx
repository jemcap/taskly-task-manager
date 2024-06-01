import React from "react";
import Button from "./Button";

const ProjectSidebar = ({ onStartAddProject }) => {
  return (
    <aside>
      <h2>Your Projects</h2>
      <div>
        <Button onClick={onStartAddProject}>+ Add Projects</Button>
      </div>
      <ul></ul>
    </aside>
  );
};

export default ProjectSidebar;
