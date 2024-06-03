import React from "react";
import { NewTask } from "./NewTask";

const Task = ({ tasks, onAdd }) => {
  return (
    <div>
      <h1 className="text-2xl font-bold text-gray-700 mb-4">Tasks</h1>
      <NewTask onAdd={onAdd} />

      {tasks.length > 0 && (
        <ul className="mt-4">
          {tasks.map((task) => (
            <li
              key={task.id}
              className="flex items-center justify-between py-2 border-b border-gray-300"
            >
              <span className="text-gray-800">{task.item}</span>
              <button className="py-1 px-2 bg-red-500 text-white rounded-md hover:bg-red-600">
                Clear
              </button>
            </li>
          ))}
        </ul>
      )}
      {tasks.length === 0 && (
        <p className="text-gray-800 mt-4">
          There are currently no tasks assigned for this project.
        </p>
      )}
    </div>
  );
};

export default Task;
