import React from "react";
import "./index.css";

import { footerData } from "../../data";

const Discounts = () => {
  return (
    <div className="discounts">
      <div>
        <h1>Student Special: Discounted rates on tropical getaways!</h1>
        <h4>
          Let’s embody your beautiful ideas together, simplify the way you
          visualize your next big things.
        </h4>
      </div>
      <ul>
        {footerData.map((val, idx) => (
          <li key={idx}>{val}</li>
        ))}
      </ul>
    </div>
  );
};

export default Discounts;
