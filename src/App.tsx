import { useState } from "react";
import TaskList from "./components/TaskList";
import { Task } from "./types";
import TaskForm from "./components/TaskForm";

const App = () => {
  const [tasks, setTasks] = useState<Task[]>([
    { id: "1", title: "Take a break", completed: false },
    { id: "2", title: "Continue with project", completed: false },
    { id: "3", title: "Push project to github", completed: false },
  ]);

  const toggleTask = (id: string) => {
    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, completed: !task.completed } : task
      )
    );
  };

  const addTask = (title: string) => {
    const newTask: Task = {
      id: Date.now().toString(),
      title,
      completed: false,
    };
    setTasks([...tasks, newTask]);
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-4">Task Manager</h1>
      <TaskForm onAddTask={addTask} />
      <TaskList tasks={tasks} onToggle={toggleTask} />
    </div>
  );
};

export default App;
