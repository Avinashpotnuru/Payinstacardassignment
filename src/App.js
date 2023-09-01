import "./App.css";
import Destinations from "./components/Destinations";
import Discounts from "./components/Discounts";
import Navbar from "./components/Navbar";
import Testimonials from "./components/Testimonials";

function App() {
  return (
    <div className="App">
      <Navbar />
      <div className="components">
        <Destinations />
        <Testimonials />
        <Discounts />
      </div>
    </div>
  );
}

export default App;
