import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "../src/Home";
import "../src/Style/moneytracker.css";
import AddTransaction from "./AddTransaction";
import ViewTransaction from "./ViewTransaction";
import { useState } from "react";

function App() {
  const [credit, setCredit] = useState([]);
  const [debit, setDebit] = useState([]);

  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route
            path="/add"
            element={
              <AddTransaction
                debit={debit}
                setDebit={setDebit}
                credit={credit}
                setCredit={setCredit}
              />
            }
          ></Route>
          <Route path="/view" element={<ViewTransaction />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
