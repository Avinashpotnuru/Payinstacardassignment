import React from "react";
import "./index.css";
const TestimonialCard = ({ name, description, id }) => {
  return (
    <div className="testimonialCard">
      <img src={`/Testimonials${id}.png`} alt={`images${id}`} />

      <h3>{name}</h3>
      <hr />
      <h4>{description}</h4>
    </div>
  );
};

export default TestimonialCard;
