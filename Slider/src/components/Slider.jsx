import React, { useState, useEffect } from "react";
import data from "../data";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

const Slider = () => {
  const [people, setPeople] = useState(data);
  let [index, setIndex] = useState(0);

  useEffect(() => {
    let interval = setInterval(() => {
      setIndex((index += 1));
    }, 5000);
    return () => {
      clearInterval(interval);
    };
  }, [index]);

  return (
    <div>
      <h1>Slider</h1>
      <div className="line"></div>
      <div className="container">
        {people.map((person, personIndex) => {
          const { id, title, image, quote, name } = person;
          let classList = "nextSlide";
          if (personIndex === index) {
            classList = "activeSlide";
          }
          if (personIndex === index - 1) {
            classList = "prevSlide";
          }
          if (index === 0 && personIndex === people.length - 1) {
            classList = "prevSlide";
          }
          if (index < 0) {
            setIndex(people.length - 1);
          }
          if (index > people.length - 1) {
            setIndex(0);
          }
          return (
            <div className={`list ${classList}`} key={id}>
              <img className="person-img" src={image} alt={name} />
              <h4>{name}</h4>
              <p className="title">{title}</p>
              <p className="quote">{quote}</p>
            </div>
          );
        })}
        <div className="btn-container">
          <button
            onClick={() => {
              setIndex(index - 1);
            }}
            className="btn btn-left"
          >
            <FaArrowLeft />
          </button>
          <button
            onClick={() => {
              setIndex(index + 1);
            }}
            className="btn btn-right"
          >
            <FaArrowRight />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Slider;
