import React, { useState } from "react";
import Products from "./Products";
import Categories from "./Categories";
import products from "../data";

const Menu = () => {
  const categories = [
    "all",
    ...new Set(products.map((product) => product.category)),
  ];
  const [items, setItems] = useState(products);

  const filterItems = (category) => {
    if (category === "all") {
      setItems(products);
      return;
    }
    const newItems = products.filter(
      (product) => product.category === category,
    );
    setItems(newItems);
  };

  return (
    <main>
      <header>
        <h1>Our menu</h1>
        <div className="line"></div>
      </header>
      <Categories categories={categories} filterItems={filterItems} />
      <Products items={items} />
    </main>
  );
};

export default Menu;
