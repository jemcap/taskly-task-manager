import React, { useState } from "react";

export const NewTask = ({ onAdd }) => {
  const [enteredTask, setEnteredTask] = useState("");

  function handleClick() {
    setEnteredTask("");
    onAdd(enteredTask);
  }

  return (
    <div className="flex items-center justify-center">
      <input
        type="text"
        className="py-2 px-4 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
        placeholder="Enter task"
        onChange={(e) => setEnteredTask(e.target.value)}
        value={enteredTask}
      />
      <button
        onClick={handleClick}
        className="ml-4 py-2 px-4 border border-transparent rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
      >
        Add Task
      </button>
    </div>
  );
};
