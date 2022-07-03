import "./App.css";
import { useState } from "react";

function App() {
  const [heading, setHeading] = useState("Hello World");

  const handleChange = (event) => {
    setHeading(event.target.value);
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1 data-cy="heading">{heading}</h1>
        <form>
          <input
            data-cy="input"
            type="text"
            name="headerName"
            defaultValue={heading}
            onChange={handleChange}
          />
        </form>
      </header>
    </div>
  );
}

export default App;
