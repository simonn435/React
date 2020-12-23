import React from "react";

const Person = (props) => {
  return (
    <div className="person">
      {props.people.map(({ name, image, age, id }) => {
        return (
          <div key={id} className="list-item">
            <img src={image} alt="profile-img" />
            <div className="list-item-content">
              <p>{name}</p>
              <span>{age}</span>
            </div>
          </div>
        );
      })}{" "}
    </div>
  );
};

export default Person;
