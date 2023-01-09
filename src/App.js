import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "../src/Home";
import "../src/Style/moneytracker.css";
import AddTransaction from "./AddTransaction";
import ViewTransaction from "./ViewTransaction";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/add" element={<AddTransaction />}></Route>
          <Route path="/view" element={<ViewTransaction />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
