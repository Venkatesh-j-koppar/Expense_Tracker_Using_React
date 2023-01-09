import React from "react";

function AddTransaction() {
  return (
    <form>
      <label htmlFor="name">Enter The Expense Name</label>
      <input
        type="text"
        placeholder="Expense Name"
        id="name"
        name="name"
      ></input>
      <label htmlFor="type">Enter The Expense Name</label>
      <select>
        <option>select Once</option>
        <option>Credit</option>
        <option>Debit</option>
      </select>
    </form>
  );
}

export default AddTransaction;
