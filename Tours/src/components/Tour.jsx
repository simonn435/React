import React, { useState } from "react";

const Tour = (props) => {
  const [showMore, setShowMore] = useState(false);

  return (
    <div className="tours-container">
      {props.tours.map(({ id, image, info, name, price, removeItem }) => {
        return (
          <div key={id} className="tour">
            <ul>
              <li>
                <img src={image} alt="Img" />
                <div className="tour-content">
                  <div>
                    <span>{name}</span>
                    <span>
                      <b>${price}</b>
                    </span>
                  </div>
                  <p>
                    {showMore ? info : `${info.substring(0, 200)}... `}
                    <button
                      className="btn-show"
                      onClick={() => setShowMore(!showMore)}
                    >
                      {showMore ? "show less" : "read more"}
                    </button>
                  </p>

                  <button
                    className="btn-danger"
                    onClick={() => {
                      props.removeItem(id);
                    }}
                  >
                    Not interested
                  </button>
                </div>
              </li>
            </ul>
          </div>
        );
      })}
    </div>
  );
};

export default Tour;
