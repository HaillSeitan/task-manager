import { useState, useRef, useEffect } from "react";
import { Task, TaskListProps } from "../types";
import { Checkbox } from "@headlessui/react";

const TaskList = ({ tasks, onToggle, onDelete, onEdit }: TaskListProps) => {
  const [editingId, setEditingId] = useState<string | null>(null);
  const [editingTitle, setEditingTitle] = useState<string>("");
  const editInputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (editingId && editInputRef.current) {
      editInputRef.current.focus();
    }
  }, [editingId]);

  const handleEditStart = (task: Task) => {
    setEditingId(task.id);
    setEditingTitle(task.title);
  };

  const handleEditSave = (id: string) => {
    if (editingTitle.trim() !== "") {
      onEdit(id, editingTitle.trim());
    }
    setEditingId(null);
  };

  const handleKeyDown = (e: React.KeyboardEvent, id: string) => {
    if (e.key === "Enter") {
      handleEditSave(id);
    } else if (e.key === "Escape") {
      setEditingId(null);
    }
  };

  return (
    <>
      <ul className="space-y-2 w-full">
        {tasks.map((task) => (
          <li
            key={task.id}
            className="flex justify-between items-center bg-gray-100 p-4 rounded-full text-sm md:text-base overflow-hidden"
          >
            <Checkbox
              checked={task.completed}
              onChange={() => onToggle(task.id)}
              className="group block size-6 rounded-full p-1 border bg-white data-[checked]:bg-green-600"
            >
              <svg
                className="stroke-zinc-700 group-data-[checked]:stroke-white"
                viewBox="0 0 14 14"
                fill="none"
              >
                <path
                  d="M3 8L6 11L11 3.5"
                  strokeWidth={2}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </Checkbox>
            <div className="flex-grow mx-4">
              {editingId === task.id ? (
                <input
                  ref={editInputRef}
                  type="text"
                  value={editingTitle}
                  onChange={(e) => setEditingTitle(e.target.value)}
                  onBlur={() => handleEditSave(task.id)}
                  onKeyDown={(e) => handleKeyDown(e, task.id)}
                  className="w-full bg-transparent border-b border-gray-300 focus:outline-none focus:border-blue-500"
                />
              ) : (
                <span
                  className={`${
                    task.completed ? "line-through text-gray-400" : ""
                  }`}
                >
                  {task.title}
                </span>
              )}
            </div>
            <div className="flex items-center">
              <button
                onClick={() => handleEditStart(task)}
                className="bg-blue-500 text-white p-1 rounded-full mr-2"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-4 w-4"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path d="M13.586 3.586a2 2 0 112.828 2.828l-.793.793-2.828-2.828.793-.793zM11.379 5.793L3 14.172V17h2.828l8.38-8.379-2.83-2.828z" />
                </svg>
              </button>
              <button
                onClick={() => onDelete(task.id)}
                className="bg-zinc-600 text-white p-1 rounded-full"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-4 w-4"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  />
                </svg>
              </button>
            </div>
          </li>
        ))}
      </ul>
    </>
  );
};

export default TaskList;
