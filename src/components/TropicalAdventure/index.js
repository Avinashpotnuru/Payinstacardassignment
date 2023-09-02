import React from "react";

import "./index.css";

import { recharges } from "../../data";
import ProfileCard from "./ProfileCard";

const TropicalAdventure = () => {
  return (
    <div className="tropicalAdventure">
      <div>
        {[...Array(3)].map((item) => (
          <ProfileCard />
        ))}
      </div>
      <img className="ellipse" src="/Ellipse.png" alt="Ellipse" />
      <div className="students">
        <img className="subtract" src="/Subtract.png" alt="subtract" />
        <h1>
          Tropical Adventure <br /> <span>for Students.</span>
        </h1>
        <h3>Student Tropical Vacation: Relax and Recharge</h3>
        <ul>
          {recharges.map((item, idx) => (
            <li key={idx}>{item}</li>
          ))}
        </ul>
        <button>Explore More</button>
      </div>
    </div>
  );
};

export default TropicalAdventure;
