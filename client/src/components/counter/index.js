import { useState } from "react";
import "./index.css";

const Counter = () => {
  // use array destructuring to set a count variable and setCount function from the useState Hook
  const [count, setCount] = useState(0);

  const handleIncrement = () => {
    setCount(count + 1);
  };

  const handleDecrement = () => {
    setCount(count - 1);
  };

  const handleReset = () => {
    setCount(0);
  };

  return (
    <div className="counter">
      <span>Current Count: {count}</span>
      <section>
        <button onClick={handleIncrement}>+</button>
        <button onClick={handleDecrement}>-</button>
        <button onClick={handleReset}>Reset Count</button>
      </section>
    </div>
  );
};

export default Counter;
