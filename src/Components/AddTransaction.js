import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import * as validObj from "../Validations/UserInputValidation";

function AddTransaction(props) {
  let navigate = useNavigate();
  const [expenseObject, setExpenseObject] = useState({
    name: "",
    type: "",
    amount: "",
    date: "",
  });

  const [successMsg, setSuccessMsg] = useState("");
  const [nameError, setNameError] = useState("");
  const [expenseTypeError, setExpenseTypeError] = useState("");
  const [expenseError, setExpenseError] = useState("");

  const handleChange = (e) => {
    let { name, value } = e.target;
    setExpenseObject({ ...expenseObject, [name]: value });
    setNameError("");
    setExpenseTypeError("");
    setExpenseError("");
    setSuccessMsg("");
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!validObj.handleNameError(expenseObject.name)) {
      setNameError("Enter a valid Name");
    }

    if (!validObj.handleExpenseType(expenseObject.type)) {
      setExpenseTypeError("Please Select The Expense Type");
    }

    if (!validObj.handleExpenseAmout(expenseObject.amount)) {
      setExpenseError("Please Enter A Valid Amount");
    }

    if (
      validObj.handleNameError(expenseObject.name) &&
      validObj.handleExpenseType(expenseObject.type) &&
      validObj.handleExpenseAmout(expenseObject.amount)
    ) {
      props.setExpense([...props.expense, expenseObject]);
      setSuccessMsg("Expense Saved Successfully");
      setExpenseObject({
        name: "",
        type: "",
        amount: "",
        date: new Date(),
      });
    }
  };

  const buttonClick = () => {
    navigate("/");
  };

  return (
    <div className="Add">
      <form onSubmit={handleSubmit}>
        <span className="Success">{successMsg}</span>

        <label htmlFor="name">Enter The Expense Name</label>

        <input
          type="text"
          placeholder="Expense Name"
          id="name"
          name="name"
          onChange={handleChange}
          value={expenseObject.name}
        ></input>

        <span className="Error">{nameError}</span>

        <label htmlFor="type">Expense Type</label>

        <select onChange={handleChange} name="type" value={expenseObject.type}>
          <option>Select One</option>
          <option value="credit" id="type">
            Credit
          </option>
          <option value="debit" id="type">
            Debit
          </option>
        </select>

        <span className="Error">{expenseTypeError}</span>

        <label htmlFor="amount">Enter The Expense Amount</label>

        <input
          type="number"
          placeholder="Expense Amount"
          id="amount"
          name="amount"
          onChange={handleChange}
          value={expenseObject.amount}
        ></input>

        <span className="Error">{expenseError}</span>

        <label htmlFor="date">Select Date</label>
        <input
          type="date"
          name="date"
          id="date"
          onChange={handleChange}
          value={expenseObject.date}
        ></input>

        <div className="buttons-div">
          <button type="submit">Submit</button>
          <button onClick={buttonClick}>Back</button>
        </div>
      </form>
    </div>
  );
}

export default AddTransaction;
