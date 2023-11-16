import React from "react";
import "./counter.css";

const Counter = () => {
  // initialize counter fields
  const [counter, setCounter] = React.useState(0);

  function decrementCounter(e) {
    return setCounter(counter - 1);
  }

  function incrementCounter(e) {
    return setCounter(counter + 1);
  }

  return (
    <div>
      <div className="counter-wrapper">
        <div className="counter">
          <p>{counter}</p>
        </div>
        <div className="counter-buttons-wrapper">
          <button className="counter-button" onClick={decrementCounter}>
            -
          </button>
          <button className="counter-button" onClick={incrementCounter}>
            +
          </button>
        </div>
      </div>
    </div>
  );
};

export default Counter;
