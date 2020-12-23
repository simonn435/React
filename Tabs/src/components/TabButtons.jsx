import React from "react";

const TabButtons = ({ info, setVal }) => {
  return (
    <div className="buttons">
      {info.map(({ company }, index) => {
        return (
          <div key={index}>
            <button onClick={() => setVal(index)}>{company}</button>
          </div>
        );
      })}
    </div>
  );
};
export default TabButtons;
