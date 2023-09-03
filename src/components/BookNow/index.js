import React, { useState } from "react";
import "./index.css";

const BookNow = () => {
  const [stars, setStars] = useState(0);
  const [room, setRooms] = useState(0);

  const submitHandler = (e) => {
    e.preventDefault();
  };

  return (
    <div className="book">
      <img className="circle" src="/circle.png" alt="circle" />
      <div className="imageContainer">
        <img className="profileImage" src="/BooknowImage.png" alt="profile" />
        <img className="recbox" src="/recbox.png" alt="rec" />
      </div>
      <img className="circle2" src="/circle.png" alt="circle" />
      <div className="booknow">
        <h1>Book now</h1>
        <h3>Lorem ipsum dolor sit amet, consectetur adipiscing elit</h3>
        <form onSubmit={submitHandler} className="form">
          <p>City</p>
          <input placeholder="Placeholder" />
          <div className="datablock">
            <div className="subdatablock">
              <p>Arrival</p>
              <input placeholder="10 October" />
            </div>
            <div className="subdatablock">
              <p>Departure</p>
              <input placeholder="11 October" />
            </div>
          </div>
          <div className="datablock">
            <div className="subdatablock">
              <p>Star</p>
              <div className="counter">
                <button onClick={() => setStars((prev) => prev - 1)}>
                  <img src="/minus.png" alt="minus" />
                </button>
                <div>{stars}</div>
                <button onClick={() => setStars((prev) => prev + 1)}>
                  <img src="/add.png" alt="minus" />
                </button>
              </div>
            </div>
            <div className="subdatablock">
              <p>Room</p>
              <div className="counter">
                <button onClick={() => setRooms((prev) => prev - 1)}>
                  <img src="/minus.png" alt="minus" />
                </button>
                <div>{room}</div>
                <button onClick={() => setRooms((prev) => prev + 1)}>
                  <img src="/add.png" alt="minus" />
                </button>
              </div>
            </div>
          </div>
          <button>BOOK NOW</button>
        </form>
      </div>
    </div>
  );
};

export default BookNow;
