import "./App.css";
import AvailableDiscounts from "./components/AvailableDiscounts";
import BookNow from "./components/BookNow";
import Destinations from "./components/Destinations";
import Discounts from "./components/Discounts";
import Navbar from "./components/Navbar";
import Testimonials from "./components/Testimonials";
import Tropical from "./components/Tropical";
import TropicalAdventure from "./components/TropicalAdventure";

function App() {
  return (
    <div className="App">
      <Navbar />
      <div className="components">
        <Tropical />
        <TropicalAdventure />
        <AvailableDiscounts />
        <Destinations />
        <BookNow />
        <Testimonials />
        <Discounts />
      </div>
    </div>
  );
}

export default App;
