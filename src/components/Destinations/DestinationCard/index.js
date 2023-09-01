import React from "react";

import "./index.css";

const DestinationsCard = ({ name, address, id }) => {
  return (
    <div className="destinationsCard">
      <img
        className="university"
        src={`/University${id}.png`}
        alt={`University1`}
      />
      <h4>{name}</h4>
      <div className="address">
        <h3>{address}</h3>
        <div className="dots">
          {[...Array(3)].map((item) => (
            <img src="/dot.svg" alt="dot" />
          ))}
        </div>
      </div>
    </div>
  );
};

export default DestinationsCard;
