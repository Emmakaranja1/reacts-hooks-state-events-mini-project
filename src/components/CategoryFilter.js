import React, { useState }from "react";

function CategoryFilter({ categories }) {
  const [selectedCategory, setSelectedCategory] = useState("All");

  function handleClick(category) {
    setSelectedCategory(category);
  }

  return (
    <div className="categories">
      <h5>Category filters</h5>
      {categories.map((category) => (
        <button
          key={category}
          className={category === selectedCategory ? "selected" : ""}
          onClick={() => handleClick(category)}
        >
                {category}
        </button>
      ))}
    </div>
  );
}

export default CategoryFilter;
