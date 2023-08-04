import React from "react";

const BillInput = ({ bill, onSetBill }) => {
  return (
    <div>
      <label htmlFor="text">How much was the bill? </label>
      <input
        id="text"
        type="text"
        placeholder="Bill value"
        value={bill}
        onChange={(e) => onSetBill(Number(e.target.value))}
      />
    </div>
  );
};

export default BillInput;
