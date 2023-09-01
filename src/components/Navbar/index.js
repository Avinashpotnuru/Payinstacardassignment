import { useRef } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import "./index.css";

function Navbar() {
  const navRef = useRef();

  const showNavbar = () => {
    navRef.current.classList.toggle("responsive_nav");
  };

  return (
    <header>
      <nav ref={navRef}>
        <a href="/#">Home</a>
        <a href="/#">About</a>
        <a href="/#">Schedules</a>
        <a href="/#">Membership</a>
        <a href="/#">Pricing</a>
        <div className="buttons">
          <a className="offer" href="/#">
            Offers
          </a>
          <button>Courses</button>
        </div>

        <button className="nav-btn nav-close-btn" onClick={showNavbar}>
          <FaTimes />
        </button>
      </nav>
      <button className="nav-btn" onClick={showNavbar}>
        <FaBars />
      </button>
    </header>
  );
}

export default Navbar;
