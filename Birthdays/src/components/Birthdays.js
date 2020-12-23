import React, { useState } from "react";
import Person from "./Person";
import data from "../data";

const Birthdays = () => {
  const [people, setPeople] = useState(data);
  return (
    <div className="birthdays">
      <h3>{people.length} birthdays today</h3>
      <Person people={people} />
      <button
        className="btn"
        onClick={() => {
          setPeople([]);
        }}
      >
        Clear All
      </button>
      {people.length === 0 ? (
        <button className="btn" onClick={() => setPeople(data)}>
          Show All
        </button>
      ) : null}
    </div>
  );
};

export default Birthdays;
