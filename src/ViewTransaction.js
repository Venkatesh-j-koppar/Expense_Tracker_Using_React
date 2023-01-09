import React from "react";
import { useNavigate } from "react-router-dom";

function ViewTransaction() {
  let navigate = useNavigate();
  const handleClick = (e) => {
    navigate("/");
  };

  return (
    <div>
      <button onClick={handleClick} id="view">
        Back
      </button>
    </div>
  );
}

export default ViewTransaction;
