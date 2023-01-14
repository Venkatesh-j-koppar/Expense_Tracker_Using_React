import React, { useState } from "react";
import { sortByDate } from "../TableLogic/displaylogic";

function Showdate({ expense, setDataToBeDisplayed }) {
  let [dateobject, setDateObject] = useState({
    startdate: new Date(),
    enddate: new Date(),
  });

  const handleChange = (e) => {
    let { name, value } = e.target;
    setDateObject({ ...dateobject, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    let sortedData = sortByDate(dateobject, expense);
    setDataToBeDisplayed(sortedData);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label htmlFor="startdate">Enter Start Date</label>

        <input
          type="date"
          placeholder="Start Date"
          id="startdate"
          name="startdate"
          onChange={handleChange}
          value={dateobject.startdate}
        ></input>

        <label htmlFor="enddate">Enter End Date</label>

        <input
          type="date"
          placeholder="End Date"
          id="enddate"
          name="enddate"
          onChange={handleChange}
          value={dateobject.enddate}
        ></input>

        <button type="submit">Search</button>
      </form>
    </div>
  );
}

export default Showdate;
