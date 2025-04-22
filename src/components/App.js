import React from "react";
import CategoryFilter from "./CategoryFilter";
import NewTaskForm from "./NewTaskForm";
import TaskList from "./TaskList";

import { CATEGORIES, TASKS } from "../data";

function App() {
  const [selectedCategory, setSelectedCategory] = useState("All");


  const filteredTasks =
    selectedCategory === "All"
      ? TASKS
      : TASKS.filter((task) => task.category === selectedCategory);

  return (
    <div className="App">
      <h2>My tasks</h2>
      <CategoryFilter 
      categories={CATEGORIES} 
      selectedCategory={selectedCategory}
      onCategoryChange={setSelectedCategory}
      />
      <NewTaskForm categories={CATEGORIES}/>
      <TaskList tasks={filteredTasks} />
    </div>
  );
}

export default App;
