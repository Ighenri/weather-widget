import WeatherWidget from "./Components/WeatherWidget";
import { useState } from "react";
import "./index.css";
function App() {
  const [inputValue, setInputValue] = useState("London");
  const [location, setLocation] = useState("London");

  const handleInput = (e) => {
    setInputValue(e.target.value);
  };

  const submitHandle = (e) => {
    e.preventDefault();
    setLocation(inputValue);
  };

  return (
    <div className="app">
      <WeatherWidget location={location} />
      <form onSubmit={submitHandle}>
        <input type="text" value={inputValue} onChange={handleInput} />
        <button>update Location</button>
      </form>
    </div>
  );
}

export default App;
