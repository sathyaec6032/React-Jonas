import React, { useState } from "react";

const Challenge = () => {
  const [step, setStep] = useState(1);
  const [count, setCount] = useState(0);

  const handleStepDecrease = () => {
    setStep((s) => s - 1);
  };

  const handleStepIncrease = () => {
    setStep((s) => s + 1);
  };
  const handleCountDecrease = () => {
    setCount((c) => c - step);
  };

  const handleCountIncrease = () => {
    setCount((c) => c + step);
  };

  const date = new Date("Aug 1 2023");
  date.setDate(date.getDate() + count);
  return (
    <>
      <div style={{ display: "flex" }}>
        <button onClick={handleStepDecrease}>-</button>
        <p>Step: {step}</p>
        <button onClick={handleStepIncrease}>+</button>
      </div>
      <div style={{ display: "flex", marginTop: "2rem" }}>
        <button onClick={handleCountDecrease}>-</button>
        <p>Count: {count}</p>
        <button onClick={handleCountIncrease}>+</button>
      </div>
      <p>
        <span>
          {count === 0
            ? "Today is "
            : count > 0
            ? `${count} days from today is `
            : `${Math.abs(count)} days ago was `}
        </span>
        <span>{date.toDateString()}</span>
      </p>
    </>
  );
};

export default Challenge;
