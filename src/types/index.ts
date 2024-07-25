export interface Task {
  id: string;
  title: string;
  completed: boolean;
}

export interface TaskListProps {
  tasks: Task[];
  onToggle: (id: string) => void;
}

export interface TaskFormProps {
  onAddTask: (title: string) => void;
}
