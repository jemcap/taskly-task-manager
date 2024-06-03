import React from "react";
import { NewTask } from "./NewTask";

const Task = ({ tasks, onAdd }) => {
  return (
    <div>
      <h1 className="text-2xl font-bold text-stone-700 mb-4">Tasks</h1>
      <NewTask onAdd={onAdd} />
      <p className="text-stone-800 my-4">
        There are currently no tasks assigned for this project.
      </p>
      <ul></ul>
    </div>
  );
};

export default Task;
