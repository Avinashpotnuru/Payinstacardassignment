import React from "react";

import "./index.css";

import { recharges } from "../../data";

const AvailableDiscounts = () => {
  return (
    <div>
      <div className="offers">
        <h3>Get 20% off for student</h3>
        {/* <img className="subtract" src="/Subtract.png" alt="subtract" /> */}
        <h1>
          Student discounts available.
          <br />
          <span>Get ready for some fun in the sun!</span>
        </h1>

        <ul>
          {recharges.map((item, idx) => (
            <li key={idx}>{item}</li>
          ))}
        </ul>
        <div>
          <button>Explore More</button>
        </div>
      </div>
      <div>block2</div>
    </div>
  );
};

export default AvailableDiscounts;
