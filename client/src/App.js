import { useState, useEffect } from "react";
import "./App.css";
import Counter from "./components/counter";
import Header from "./components/header";

function App() {
  let [checkboxValue, setCheckboxValue] = useState(false);

  // count site visits
  useEffect(() => {
    console.log("first render, incrementing site visits by 1");
  }, []);

  console.log("rendering App"); // happens every rerender

  let handleChange = (e) => {
    setCheckboxValue(!checkboxValue);
  };

  return (
    <div className="App">
      <Header />
      <Counter />
      <input
        type="checkbox"
        value={checkboxValue}
        onChange={() => handleChange()}
      />
    </div>
  );
}

export default App;
