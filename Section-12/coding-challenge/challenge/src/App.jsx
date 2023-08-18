import { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [inputValue, setInputValue] = useState(1);
  const [fromValue, setFromValue] = useState("EUR");
  const [toValue, setToValue] = useState("USD");

  const [finalValue, setFinalValue] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const controller = new AbortController();
    async function fetchCurreny() {
      try {
        setLoading(true);
        const res = await fetch(
          `https://api.frankfurter.app/latest?amount=${inputValue}&from=${fromValue}&to=${toValue}`,
          { signal: controller.signal }
        );

        // if (!res.ok) {
        //   throw new Error("Something went wrong with fetching currency!");
        // }

        const data = await res.json();

        setFinalValue(data?.rates[toValue]);
      } catch (e) {
        console.log(e.message);
      } finally {
        setLoading(false);
      }
    }

    if (fromValue === toValue) return setFinalValue(inputValue);

    fetchCurreny();

    return () => controller.abort();
  }, [inputValue, fromValue, toValue]);

  const handleInput = (e) => {
    setInputValue(Number(e.target.value));
  };

  const handleFromValue = (e) => {
    setFromValue(e.target.value);
  };
  const handleToValue = (e) => {
    setToValue(e.target.value);
  };

  console.log(inputValue);
  return (
    <>
      <div>
        <input type="text" onChange={handleInput} value={inputValue} />
        <select onChange={handleFromValue} value={fromValue}>
          <option value="USD">USD</option>
          <option value="EUR">EUR</option>
          <option value="CAD">CAD</option>
          <option value="INR">INR</option>
        </select>
        <select onChange={handleToValue} value={toValue}>
          <option value="USD">USD</option>
          <option value="EUR">EUR</option>
          <option value="CAD">CAD</option>
          <option value="INR">INR</option>
        </select>
        <p>OUTPUT</p>
        {finalValue}
      </div>
    </>
  );
}

export default App;
