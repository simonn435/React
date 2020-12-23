import React, { useState } from "react";
import { FaMinus, FaPlus } from "react-icons/fa";
const Question = ({ title, info }) => {
  const [showInfo, setShowInfo] = useState(false);
  return (
    <article className="article">
      <div className="question-title">
        <h3>{title}</h3>
        <button onClick={() => setShowInfo(!showInfo)}>
          {showInfo ? <FaMinus /> : <FaPlus />}
        </button>
      </div>
      <div className="question-info">{showInfo && <p>{info}</p>}</div>
    </article>
  );
};

export default Question;
