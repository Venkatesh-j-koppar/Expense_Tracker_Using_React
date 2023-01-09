import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import AddTransaction from "./AddTransaction";
import ViewTransaction from "./ViewTransaction";

const Home = () => {
  let navigate = useNavigate();
  const credit = useState([]);
  const debit = useState([]);

  const handleClick = (e) => {
    if (e.target.id == "add") {
      navigate("/add");
    } else {
      navigate("/view");
    }
  };

  return (
    <div>
      <h1>Welcome to MoneyTracker App</h1>
      <button onClick={handleClick} id="add">
        Add Expense
      </button>
      <button onClick={handleClick} id="view">
        View Expense
      </button>
    </div>
  );
};

export default Home;
