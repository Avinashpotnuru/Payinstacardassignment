import React from "react";

import "./index.css";
import TestimonialCard from "./TestimonialCard";

import { testimonialCardData } from "../../data";

const Testimonials = () => {
  return (
    <div className="testimonials">
      <h1>Testimonials</h1>
      <div className="cards-block">
        {testimonialCardData.map((val, idx) => (
          <TestimonialCard key={idx} {...val} />
        ))}
      </div>
    </div>
  );
};

export default Testimonials;
