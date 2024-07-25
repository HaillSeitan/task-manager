import React, { useState } from "react";
import { TaskFormProps } from "../types";

const TaskForm = ({ onAddTask }: TaskFormProps) => {
  const [title, setTitle] = useState("");

  const handleSubmit = (e: React.FocusEvent<HTMLFormElement>) => {
    e.preventDefault(); // prevents reload
    //checks title isn´t empty after trimming
    if (title.trim()) {
      onAddTask(title.trim()); // calling add function
      setTitle(""); //resets Input
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="flex w-full">
        <input
          type="text"
          value={title}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            setTitle(e.target.value)
          }
          placeholder="Enter new Task"
          className="border p-2 rounded-l-md"
        />
        <button
          type="submit"
          className="bg-blue-500 text-white p-2 rounded-r-lg"
        >
          Add Task
        </button>
      </div>
    </form>
  );
};

export default TaskForm;
