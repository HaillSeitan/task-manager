import { useState } from "react";
import { Task, TaskListProps } from "../types";
import cross from "../img/cross.svg";

const TaskList = ({ tasks, onToggle, onDelete, onEdit }: TaskListProps) => {
  const [editingId, setEditingId] = useState<string | null>(null);
  const [editingTitle, setEditingTitle] = useState<string>("");

  const handleEditStart = (task: Task) => {
    setEditingId(task.id);
    setEditingTitle(task.title);
  };

  const handleEditSave = (id: string) => {
    onEdit(id, editingTitle);
    setEditingId(null);
  };

  return (
    <>
      <ul className="space-y-2 w-1/2">
        {tasks.map((task) => (
          <li
            key={task.id}
            className="flex justify-between items-center bg-gray-100 p-4 rounded-full"
          >
            <input
              type="checkbox"
              checked={task.completed}
              onChange={() => onToggle(task.id)}
              className="form-checkbox h-5 w-5 text-blue-600"
            />
            {editingId === task.id ? (
              <input
                type="text"
                value={editingTitle}
                onChange={(e) => setEditingTitle(e.target.value)}
                onBlur={() => handleEditSave(task.id)}
                className="border p-1 rounded"
              />
            ) : (
              <span
                className={`${
                  task.completed ? "line-through text-gray-500" : ""
                }`}
                onDoubleClick={() => handleEditStart(task)}
              >
                {task.title}
              </span>
            )}
            <button
              onClick={() => onDelete(task.id)}
              className="bg-zinc-600 text-white p-1 rounded-full"
            >
              <img src={cross} className="h-4" />
            </button>
          </li>
        ))}
      </ul>
      <p className="text-gray-400 mt-8">double click to edit task</p>
    </>
  );
};

export default TaskList;
