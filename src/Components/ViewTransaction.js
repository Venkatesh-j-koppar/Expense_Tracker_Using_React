import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Showdate from "./Showdate";
import Transactiontable from "./Transactiontable";

function ViewTransaction(props) {
  let navigate = useNavigate();
  let [dataToBeDisplayed, setDataToBeDisplayed] = useState([]);
  let [displaydate, setDisplayDate] = useState(false);

  const handleChangeOption = (e) => {
    let optionSelected = e.target.value;

    if (optionSelected === "all") {
      setDataToBeDisplayed(props.expense);
      setDisplayDate(false);
    }

    if (optionSelected === "date") {
      if (displaydate === false) {
        setDisplayDate(true);
      } else {
        setDisplayDate(false);
      }
    }

    if (optionSelected === "debit") {
      let debitdata = props.expense.filter((data) => data.type === "debit");
      setDataToBeDisplayed(debitdata);
      setDisplayDate(false);
    }

    if (optionSelected === "credit") {
      let debitdata = props.expense.filter((data) => data.type === "credit");
      setDataToBeDisplayed(debitdata);
      setDisplayDate(false);
    }
  };

  return (
    <div>
      <div className="ViewTransaction">
        <h1>Sort By :</h1>

        <select onChange={handleChangeOption}>
          <option>Select</option>
          <option value="all">All Transaction</option>
          <option value="date">View By Date</option>
          <option value="debit">View By Debit</option>
          <option value="credit">View By Credit</option>
        </select>

        <button onClick={() => navigate("/")}>Back</button>
      </div>
      <br></br>
      {/* Logic to Display Start and End Date */}

      {displaydate ? (
        <Showdate
          expense={props.expense}
          setDataToBeDisplayed={setDataToBeDisplayed}
        ></Showdate>
      ) : null}

      <Transactiontable
        dataToBeDisplayed={dataToBeDisplayed}
        setExpense={props.setExpense}
      ></Transactiontable>
    </div>
  );
}

export default ViewTransaction;
