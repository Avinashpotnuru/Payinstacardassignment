import React from "react";
import "./index.css";
import DestinationsCard from "./DestinationCard";

import { ourDestinationsData } from "../../data";

const Destinations = () => {
  return (
    <div className="destinations">
      <h1>Our Destinations</h1>

      <div className="destinations-cards">
        {ourDestinationsData.map((item, idx) => (
          <DestinationsCard key={idx} {...item} />
        ))}
      </div>
    </div>
  );
};

export default Destinations;
