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
      <input
        type="text"
        value={title}
        onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
          setTitle(e.target.value)
        }
        placeholder="Enter new Task"
        className="border p-2 mr-2 rounded-md"
      />
      <button type="submit" className="bg-cyan-700 text-white p-2 rounded">
        Add Task
      </button>
    </form>
  );
};

export default TaskForm;
