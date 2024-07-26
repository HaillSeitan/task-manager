import { FilterStatus, TaskFilterProps } from "../types";

const TaskFilter = ({ currentFilter, onFilterChange }: TaskFilterProps) => {
  return (
    <div className="mb-4">
      <span className="mr-2"></span>
      {(["all", "active", "completed"] as FilterStatus[]).map((filter) => (
        <button
          key={filter}
          onClick={() => onFilterChange(filter)}
          className={`text-sm mr-2 px-3 py-1 rounded-full ${
            currentFilter === filter
              ? "bg-gray-400 text-white"
              : "border text-gray-400"
          }`}
        >
          {filter.charAt(0).toUpperCase() + filter.slice(1)}
        </button>
      ))}
    </div>
  );
};

export default TaskFilter;
