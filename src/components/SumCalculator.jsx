import React, { useState } from "react";
import "./SumCalculator.css";

function SumCalculator() {
  const [number1, setNumber1] = useState("");
  const [number2, setNumber2] = useState("");
  const [result, setResult] = useState(null);
  const [error, setError] = useState("");

  // main handler: validate and compute the sum
  const handleCalculate = () => {
    // empty validation
    if (number1 === "" || number2 === "") {
      setError("⚠️ Please enter both numbers!");
      setResult(null);
      return;
    }

    // convert to number
    const num1 = parseFloat(number1);
    const num2 = parseFloat(number2);

    // validation is not a number
    if (isNaN(num1) || isNaN(num2)) {
      setError("❌ Invalid input! Please enter valid numbers.");
      setResult(null);
      return;
    }

    setResult(num1 + num2);
    setError("");
  };

  return (
    <div className="calculator-container fancy-card">
      <div className="calc-header">
        <div className="calc-icon">+</div>
        <div>
          <h2>Sum Calculator</h2>
          <p className="calc-subtitle">Enter two numbers to see the result</p>
        </div>
      </div>

      <div className="input-row">
        <label>Number 1:</label>
        <input
          type="text"
          value={number1}
          onChange={(e) => setNumber1(e.target.value)}
          placeholder="E.g. 1"
        />
      </div>

      <div className="input-row">
        <label>Number 2:</label>
        <input
          type="text"
          value={number2}
          onChange={(e) => setNumber2(e.target.value)}
          placeholder="E.g. 2"
        />
      </div>

      <button onClick={handleCalculate}>Calculate Sum</button>

      {error && <p className="error">{error}</p>}

      {result !== null && !error && (
        <div className="result-box">
          <span>Result</span>
          <strong>{result}</strong>
        </div>
      )}
    </div>
  );
}

export default SumCalculator;
