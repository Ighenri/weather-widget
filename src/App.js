import WeatherWidget from "./Components/WeatherWidget";
import { useState } from "react";
import "./index.css";
function App() {
  const [inputValue, setInputValue] = useState("");
  const [location, setLocation] = useState("");

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
        <input
          className="input"
          type="text"
          value={inputValue}
          onChange={handleInput}
        />
        <button className="btn">update Location</button>
      </form>
    </div>
  );
}

export default App;
