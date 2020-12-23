import React from "react";

const Categories = ({ categories, filterItems }) => {
  return (
    <section className="categories">
      {categories.map((category, index) => {
        return (
          <button onClick={() => filterItems(category)} key={index}>
            {category}
          </button>
        );
      })}
    </section>
  );
};

export default Categories;
