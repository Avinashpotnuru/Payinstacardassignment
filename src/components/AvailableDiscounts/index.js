import React from "react";

import "./index.css";

import { recharges } from "../../data";

const AvailableDiscounts = () => {
  return (
    <div className="availableDiscounts">
      <div className="discountimageContainer">
        <img
          className="profileImage"
          src="/discountProfile.jpg"
          alt="profile"
        />
      </div>
      <div className="offers">
        <h3>Get 20% off for student</h3>
        <img className="logo6" src="/circle.png" alt="subtract" />
        <img className="logo7" src="/logo1.png" alt="subtract" />
        <img className="logo8" src="/logo8.png" alt="subtract" />
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
    </div>
  );
};

export default AvailableDiscounts;
