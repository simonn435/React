import React, { useState, useEffect } from "react";
import data from "../data";

const Reviews = () => {
  const [index, setIndex] = useState(0);
  const { name, image, job, text } = data[index];

  const checkIndex = (number) => {
    if (number < 0) {
      return data.length - 1;
    }
    if (number > data.length - 1) {
      return 0;
    }
    return number;
  };

  const prevHandler = () => {
    setIndex((index) => {
      const newIndex = index - 1;
      return checkIndex(newIndex);
    });
  };
  const nextHandler = () => {
    setIndex((index) => {
      const newIndex = index + 1;
      return checkIndex(newIndex);
    });
  };

  return (
    <>
      <h1>Our Reviews</h1>
      <div className="line"></div>
      <div className="list">
        <div className="img-container">
          <img src={image} alt={name} />
        </div>
        <ul className="list-content">
          <li>
            <h4>{name}</h4>
            <span>{job}</span>
            <p>{text}</p>
          </li>
        </ul>
        <button className="btn-prev" onClick={prevHandler}>
          {"<"}
        </button>
        <button className="btn-next" onClick={nextHandler}>
          {">"}
        </button>
      </div>
    </>
  );
};

export default Reviews;
