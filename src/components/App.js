import React, { useState } from "react";
import CategoryFilter from "./CategoryFilter";
import NewTaskForm from "./NewTaskForm";
import TaskList from "./TaskList";

import { CATEGORIES, TASKS } from "../data";

function App() {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [tasks, setTasks] = useState(TASKS);


  const filteredTasks =
    selectedCategory === "All"
      ? tasks
      : tasks.filter((task) => task.category === selectedCategory);


  function handleDeleteTask(textToRemove) {
      setTasks(tasks.filter((task) => task.text !== textToRemove));
    }
  
    function handleTaskFormSubmit(newTask) {
      setTasks([...tasks, newTask]);
    }


  return (
    <div className="App">
      <h2>My tasks</h2>
      <CategoryFilter 
      categories={CATEGORIES} 
      selectedCategory={selectedCategory}
      onCategoryChange={setSelectedCategory}
      />
      <NewTaskForm
       categories={CATEGORIES}
       onTaskFormSubmit={handleTaskFormSubmit}
       />
      <TaskList tasks={filteredTasks} onDeleteTask={handleDeleteTask}/>
    </div>
  );
}

export default App;
