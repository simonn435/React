import React from "react";
import data from "../data";
import Question from "./Question";

const Accordion = () => {
  const questions = data;
  return (
    <section className="section">
      <div>
        <h1>FAQ</h1>
        <div className="line"></div>
      </div>
      <div className="article-container">
        {questions.map((question) => {
          return <Question key={question.id} {...question} />;
        })}
      </div>
    </section>
  );
};

export default Accordion;
