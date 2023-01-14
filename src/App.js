import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "../src/Components/Home";
import "../src/Style/moneytracker.css";
import AddTransaction from "./Components/AddTransaction";
import ViewTransaction from "./Components/ViewTransaction";
import { useState } from "react";

function App() {
  const [expense, setExpense] = useState([]);

  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route
            path="/add"
            element={
              <AddTransaction expense={expense} setExpense={setExpense} />
            }
          ></Route>
          <Route
            path="/view"
            element={<ViewTransaction expense={expense} />}
          ></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
