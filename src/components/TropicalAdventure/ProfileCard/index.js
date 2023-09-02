import React from "react";

import "./index.css";

const ProfileCard = () => {
  return (
    <div className="profileCard">
      <img src={`/profile1.png`} alt="profile" />
      <div className="details">
        <h3>Jenny Wilson</h3>
        <h5>Lorem ipsum dolor sit amet, consectetur adipiscing...</h5>
      </div>
    </div>
  );
};

export default ProfileCard;
