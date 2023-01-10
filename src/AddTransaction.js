import React from "react";
import { useState } from "react";

function AddTransaction(props) {
  const [expenseObject, setExpenseObject] = useState({
    name: "",
    type: "",
    amount: "",
  });

  const handleChange = (e) => {
    let { name, value } = e.target;
    setExpenseObject({ ...expenseObject, [name]: value });
  };

  const handleSubmit = (e) => {
    // if (expenseObject.type == "credit") {
    //   props.setCredit([...props.credit, expenseObject]);
    // } else {
    //   props.setDebit([...props.debit, expenseObject]);
    // }
    e.preventDefault();
    console.log(expenseObject);
  };

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="name">Enter The Expense Name</label>
      <input
        type="text"
        placeholder="Expense Name"
        id="name"
        name="name"
        onChange={handleChange}
      ></input>
      <label htmlFor="type">Enter The Expense Name</label>
      <select onChange={handleChange} name="type">
        <option>select Once</option>
        <option value="credit" id="type">
          Credit
        </option>
        <option value="debit" id="type">
          Debit
        </option>
      </select>
      <label htmlFor="amount">Enter The Expense Amount</label>
      <input
        type="number"
        placeholder="Expense Amount"
        id="amount"
        name="amount"
        onChange={handleChange}
      ></input>
      <button type="submit">Submit</button>
    </form>
  );
}

export default AddTransaction;
