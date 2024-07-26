import { useState } from "react";
import { TaskFormProps } from "../types";

const TaskForm = ({ onAddTask }: TaskFormProps) => {
  const [isFormOpen, setIsFormOpen] = useState(false);
  const [title, setTitle] = useState("");

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (title.trim()) {
      onAddTask(title.trim());
      setTitle("");
      setIsFormOpen(false);
    }
  };

  return (
    <>
      {isFormOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-md">
            <h2 className="text-2xl font-bold mb-4">Add New Task</h2>
            <form onSubmit={handleSubmit}>
              <input
                type="text"
                value={title}
                onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                  setTitle(e.target.value)
                }
                placeholder="Enter new Task"
                className="w-full border p-2 rounded-md mb-4"
                autoFocus
              />
              <div className="flex justify-end space-x-2">
                <button
                  type="button"
                  onClick={() => setIsFormOpen(false)}
                  className="bg-gray-300 text-gray-700 px-4 py-2 rounded-md hover:bg-gray-400 transition-colors"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 transition-colors"
                >
                  Add Task
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
      <div className="fixed bottom-8 right-8">
        <button
          onClick={() => setIsFormOpen(true)}
          className="bg-blue-500 text-white rounded-full w-12 h-12 flex items-center justify-center text-2xl shadow-lg hover:bg-blue-600 transition-colors"
        >
          +
        </button>
      </div>
    </>
  );
};

export default TaskForm;
