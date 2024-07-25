import { Task, TaskListProps } from "../types";

const TaskList = ({ tasks, onToggle }: TaskListProps) => {
  return (
    <ul className="space-y-2">
      {tasks.map((task) => (
        <li key={task.id} className="flex items-center space-x-2">
          <input
            type="checkbox"
            checked={task.completed}
            onChange={() => onToggle(task.id)}
            className="form-checkbox h-5 w-5 text-cyan-600"
          />
          <span
            className={`${task.completed ? "line-through text-gray-500" : ""}`}
          >
            {task.title}
          </span>
        </li>
      ))}
    </ul>
  );
};

export default TaskList;
