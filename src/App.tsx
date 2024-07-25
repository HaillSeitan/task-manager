import React, { useState } from "react";
import { Task } from "./types";
import TaskList from "./components/TaskList";

const App = () => {
  const [tasks, setTasks] = useState<Task[]>([
    { id: "1", title: "Take a break", completed: false },
    { id: "2", title: "Continue with project", completed: false },
    { id: "3", title: "Push project to github", completed: false },
  ]);

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-4">Task Manager</h1>
      <TaskList tasks={tasks} />
    </div>
  );
};

export default App;
