import React, {useState} from "react";
import Task from "./Task";

function TaskList({ tasks }) {
  const [visibleTasks, setVisibleTasks] = useState(tasks);

  function handleDelete(taskTextToRemove) {
    const updatedTasks = visibleTasks.filter(task => task.text !== taskTextToRemove);
    setVisibleTasks(updatedTasks);
  }
  return (
    <div className="tasks">
      {visibleTasks.map((task) => (
        <Task
          key={task.text}
          text={task.text}
          category={task.category}
          onDelete={handleDelete}
        />
      ))}
    </div>
  );
}

export default TaskList;
