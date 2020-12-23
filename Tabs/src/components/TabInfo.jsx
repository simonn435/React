import React from "react";
import { FaAngleDoubleRight } from "react-icons/fa";

const TabInfo = ({ info, value }) => {
  const { dates, company, title, duties } = info[value];
  return (
    <div className="info">
      <h3>{title}</h3>
      <h5>{company}</h5>
      <p className="info-p">{dates}</p>
      {duties.map((duty, index) => {
        return (
          <ul className="info-list" key={index}>
            <li>
              <span>
                <FaAngleDoubleRight />
              </span>
              <p>{duty}</p>
            </li>
          </ul>
        );
      })}
    </div>
  );
};
export default TabInfo;
